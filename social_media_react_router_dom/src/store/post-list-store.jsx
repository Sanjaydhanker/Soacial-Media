import { createContext, useReducer, useState, useEffect } from "react";

export const PostCreateContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const createPostReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const CreateContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(createPostReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  };

  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id,
      },
    });
  };

  return (
    <PostCreateContext.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostCreateContext.Provider>
  );
};
export default CreateContextProvider;
