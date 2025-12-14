import { useContext, useEffect } from "react";
import Card from "./Card";
import { PostCreateContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

function Postlist() {
  const { postList, addInitialPosts } = useContext(PostCreateContext);

  // const handleOnClickPost = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  // };

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center gap-x-10 flex-wrap px-8 ">
        {postList.length === 0 && <WelcomeMessage />}
        {postList.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default Postlist;
