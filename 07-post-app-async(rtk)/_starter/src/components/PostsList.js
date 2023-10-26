import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchPost from "./SearchPost";
import { useSelector } from "react-redux";

import { fetchPostsAction } from "../stores/slices/postSlice";
import "./Posts.css";

const PostsList = () => {
  const dispatch = useDispatch();
  const { postData, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsAction());
  }, []);

  if (loading) return <h1> Loading...</h1>;
  if (error) return <h1> Error...</h1>;
  return (
    <>
      <SearchPost />
      <div className="posts-list">
        <h1>Total Posts : 0</h1>
        {postData.map((post) => (
          <div className="post-detail" key={post.id}>
            <h3> {post.title} </h3>
            <p> {post.body}</p>
          </div>
        ))}
        <div className="post-details">
          <h3>Title</h3>
          <p>Body</p>
        </div>
      </div>
    </>
  );
};

export default PostsList;
