import { useContext, useRef } from "react";
import { PostCreateContext } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostCreateContext);

  const titleElement = useRef("");
  const messageElement = useRef("");
  const reactionsElement = useRef("");
  const userIdElement = useRef("");
  const tagsElement = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const title = titleElement.current.value;
    const message = messageElement.current.value;
    const reactions = reactionsElement.current.value;
    const userId = userIdElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    titleElement.current.value = "";
    messageElement.current.value = "";
    reactionsElement.current.value = "";
    userIdElement.current.value = "";
    tagsElement.current.value = "";

    addPost(title, message, reactions, userId, tags);
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
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            rows="2"
            placeholder="Your message"
            ref={messageElement}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Reactions</label>
          <input
            type="text"
            placeholder="how many react did you get"
            ref={reactionsElement}
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
