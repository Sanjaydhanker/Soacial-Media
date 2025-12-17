import { useContext, useRef } from "react";
import { PostCreateContext } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostCreateContext);

  return (
    <div className=" flex justify-center ">
      <Form
        method="POST"
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Create Post</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">userId</label>
          <input
            type="text"
            placeholder="user Id"
            name="userId"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            placeholder="how was you day"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">body</label>
          <textarea
            rows="2"
            placeholder="Your body"
            name="body"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Likes</label>
          <input
            type="text"
            placeholder="how many Like did you get"
            name="likes"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">DisLikes</label>
          <input
            type="text"
            placeholder="how many Dislike did you get"
            name="unLikes"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Tags</label>
          <input
            type="text"
            placeholder="Please enter tag using space"
            name="tags"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition active:bg-green-600 cursor-pointer"
        >
          Post
        </button>
      </Form>
    </div>
  );
}

export const actionForm = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  // ✅ Convert to numbers
  const likes = Number(postData.likes) || 0;
  const dislikes = Number(postData.unLikes) || 0;

  // ✅ Build correct structure
  postData.reactions = {
    likes,
    dislikes,
  };

  // ✅ Remove unused fields
  delete postData.likes;
  delete postData.unLikes;

  postData.tags = postData.tags.split(" ");

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
};

export default CreatePost;
