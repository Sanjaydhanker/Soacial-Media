import { createContext, useReducer } from "react";

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
  } else if (action.type === "ADD_POST") {
    const addNewPost = {
      id: action.payload.id,
      title: action.payload.title,
      message: action.payload.message,
      reactions: action.payload.reactions,
      userId: action.payload.userId,
      tags: action.payload.tags,
    };
    newPostList = [addNewPost, ...currentPostList];
  }
  return newPostList;
};

const CreateContextProvider = ({ children }) => {
  const [postList, dispachPostList] = useReducer(
    createPostReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (title, message, reactions, userId, tags) => {
    dispachPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        message: message,
        reactions: reactions,
        userId: userId,
        tags: tags,
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
      }}
    >
      {children}
    </PostCreateContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Delhi",
    message: "Hi friends ,  I am going to Delhi",
    reactions: 10,
    userId: "user9",
    tags: ["#vacation", " #enjoy"],
  },
  {
    id: "2",
    title: "Going to College",
    message: "Hi friends ,  I am going to college",
    reactions: 3,
    userId: "user8",
    tags: ["#study", " #enjoy"],
  },
];
export default CreateContextProvider;
