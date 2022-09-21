import { useQuery } from "@apollo/react-hooks";
import React from "react";
import CreatePost from "../components/Post/CreatePost";
import Post from "../components/Post/Post";
import { GET_POSTS } from "../graphql/Queries/Post";

const PostList = () => {
    const {loading, error, data} = useQuery(GET_POSTS)

    if(error) console.log("error", error)

    if(loading) return <p>Loading...</p>


  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <CreatePost />

        {data.getPosts.map((e) => (
            <Post key={e.id} description = {e.description} createdAt = {e.createdAt} postId = {e.id} likes = {e.likes} username = {e.username} comments = {e.comments} />
        ))}

      </div>
    </>
  );
};

export default PostList;
