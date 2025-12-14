import { useContext, useRef } from "react";
import { PostCreateContext } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostCreateContext);

  const titleElement = useRef("");
  const bodyElement = useRef("");
  const likesElement = useRef("");
  const dislikesElement = useRef("");
  const userIdElement = useRef("");
  const tagsElement = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const likes = likesElement.current.value;
    const dislikes = dislikesElement.current.value;
    const reactions = {
      likes: likes,
      dislikes: dislikes,
    };
    const userId = userIdElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    titleElement.current.value = "";
    likesElement.current.value = "";
    dislikesElement.current.value = "";
    bodyElement.current.value = "";
    userIdElement.current.value = "";
    tagsElement.current.value = "";

    addPost(title, body, reactions, userId, tags);
  };

  return (
    <div className=" flex justify-center ">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleOnSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4">Create Post</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">userId</label>
          <input
            type="text"
            placeholder="user Id"
            ref={userIdElement}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            type="text"
            ref={titleElement}
            placeholder="how was you day"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">body</label>
          <textarea
            rows="2"
            placeholder="Your body"
            ref={bodyElement}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Likes</label>
          <input
            type="text"
            placeholder="how many Like did you get"
            ref={likesElement}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">DisLikes</label>
          <input
            type="text"
            placeholder="how many Dislike did you get"
            ref={dislikesElement}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Tags</label>
          <input
            type="text"
            placeholder="Please enter tag using space"
            ref={tagsElement}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
