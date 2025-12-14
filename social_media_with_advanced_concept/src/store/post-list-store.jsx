import { createContext, useReducer } from "react";

export const PostCreateContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
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
    const addNewPost = {
      id: action.payload.id,
      title: action.payload.title,
      body: action.payload.body,
      reactions: action.payload.reactions,
      userId: action.payload.userId,
      tags: action.payload.tags,
    };
    newPostList = [addNewPost, ...currentPostList];
  }
  return newPostList;
};

const CreateContextProvider = ({ children }) => {
  const [postList, dispachPostList] = useReducer(createPostReducer, []);

  const addPost = (title, body, reactions, userId, tags) => {
    dispachPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispachPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (id) => {
    dispachPostList({
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
        addInitialPosts,
      }}
    >
      {children}
    </PostCreateContext.Provider>
  );
};
export default CreateContextProvider;
