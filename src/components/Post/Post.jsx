import { useMutation, useQuery } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { DELETE_POST, LIKE_POST } from "../../graphql/Mutations/Post";
import { useState } from "react";
import { GET_USER_BY_ID } from "../../graphql/Queries/User";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { GET_POSTS } from "../../graphql/Queries/Post";
import { useNavigate } from "react-router-dom";

const Post = ({
  description,
  createdAt,
  postId,
  likes,
  username,
  comments,
}) => {
  const [postLiked, setPostLike] = useState(false);
  const { userId } = jwtDecode(localStorage.getItem("jwtToken"));
  const navigate = useNavigate();
  const [likeDislikePost] = useMutation(LIKE_POST, {
    refetchQueries: [{ query: GET_POSTS }],
  });

  const [deletePost] = useMutation(DELETE_POST, {refetchQueries: [{query: GET_POSTS}]})

  const deletePostById = (postId) => {
    deletePost({
      variables: {postId},
      onCompleted(res){
        toast.success(res.deletePost)
      },
      onError(err) {
        const error = err.graphQLErrors[0].extensions.exception.stacktrace[0]
        toast.error(error)
      }
    })
  }

  const likeandDislikePost = (postId) => {
    likeDislikePost({
      variables: { postId },
      onCompleted(res) {
        console.log(res);
        setPostLike((prev) => !prev);
        toast.success(res.likeandDislikePost);
      },
      onError(error) {
        toast.error(error);
      },
    });
  };

  const { data, error, loading } = useQuery(GET_USER_BY_ID, {
    variables: { userId: userId },
  });

  useEffect(() => {
    if (likes?.find((e) => e?.username === data?.getUserById?.userName)) {
      setPostLike(true);
    } else {
      setPostLike(false);
    }
  }, [data, likes]);

  if (error) console.log("error", error);
  if (loading) return <p>Loading...</p>;

  const navigateToComments = (postId) => {
    navigate(`/post/${postId}`);
  };

 

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg py-4">
        <img
          className="w-full"
          src="data:image/jpeg;base64,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"
          alt="Mountain"
        />
        <div className="px-6 py-4">
          <div className="flex justify-between">
            <div className="font-bold text-xl mb-2">{username}</div>
            <div className="font text-gray-500 text-xs mb-2">{createdAt}</div>
          </div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex mx-4">
          <button
            onClick={() => likeandDislikePost(postId)}
            className=" bg-slate-200 mx-4 px-2 py-1 cursor-pointer rounded-sm"
          >
            <i
              className={`fa fa-thumbs-up mx-1 ${
                postLiked ? "text-blue-400" : ""
              }`}
            />
            Like {likes.length}
          </button>
          <button
            onClick={() => navigateToComments(postId)}
            className=" bg-slate-200 mx-4 px-2 py-1 cursor-pointer rounded-sm"
          >
            {" "}
            <i className="fa fa-comment mx-1" />
            Comment {comments.length}
          </button>
          {data?.getUserById?.userName === username ? (
            <button onClick={() => deletePostById(postId)} className=" bg-slate-200 mx-4 px-2 py-1 cursor-pointer rounded-sm">
              {" "}
              <i className="fa fa-trash" />
            </button>
          ) : (
            ""
          )}
        </div>
        <ToastContainer />
      </div>

      {/* </div> */}
    </>
  );
};

export default Post;
