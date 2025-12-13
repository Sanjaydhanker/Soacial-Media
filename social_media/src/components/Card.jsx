import { useContext } from "react";
import { PostCreateContext } from "../store/post-list-store";

function Card({ post }) {
  const { deletePost } = useContext(PostCreateContext);
  return (
    <div className="flex justify-center mt-2.5">
      <div className="bg-white w-90 rounded-lg shadow-md overflow-hidden">
        {/* Content */}
        <div className="p-5">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-4">{post.message}</p>
          <div className="flex gap-3 ">
            {post.tags.map((tag) => (
              <p
                key={tag}
                className="text-white px-2 py-1 rounded bg-indigo-600 mb-4 "
              >
                #{tag}
              </p>
            ))}
          </div>
          <div className="w-full text-center mb-4 bg-green-300 rounded font-bold p-3">
            This post has been reacted by {post.reactions} peoples.
          </div>
          <button
            className="bg-red-600 w-full text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            onClick={() => deletePost(post.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
