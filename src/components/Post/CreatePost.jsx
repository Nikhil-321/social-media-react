import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { useForm } from "react-hook-form";
import { CREATE_POST } from "../../graphql/Mutations/Post";
import { GET_POSTS } from "../../graphql/Queries/Post";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {
  const [createPost] = useMutation(CREATE_POST,{
    refetchQueries: [{query: GET_POSTS}]
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    // data.file = data.file[0];
    createPost({
      variables: data,
      onCompleted(res) {
        toast.success("Post created successfully")
        e.target.reset()
        console.log("res", res)
      }
    });
  };

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Create Post</div>
          <p className="text-gray-700 text-base">
            Share your thoughts with the world! Users will be able to like and
            commenst on your post, Imagine this as your personal twitter
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-4">
            <textarea
              {...register("description", {
                required: "Post description is required",
              })}
              id="comment"
              rows="8"
              className="px-4 py-2 w-full text-sm text-gray-900 bg-white border-2 rounded dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Post your thoughts..."
            ></textarea>
          </div>
          <p className="text-red-500 text-xs mx-4">
            {errors.description?.message}
          </p>

          {/* <div className="px-4">
            <input
              {...register("file", { required: "File is required" })}
              type="file"
            />
          </div> */}
          <div className="px-4 mt-2">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post
            </button>
          </div>
        </form>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Tweet
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Thoughts
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Socialmedia
          </span>
        </div>
        <ToastContainer />

      </div>
    </>
  );
};

export default CreatePost;
