import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { PostCreateContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

function Postlist() {
  const { postList, addInitialPosts } = useContext(PostCreateContext);
  const [dataFetch, setDataFetch] = useState(false);

  useEffect(() => {
    setDataFetch(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        addInitialPosts(data.posts);
        setDataFetch(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className="flex justify-center gap-x-10 flex-wrap px-8 ">
        {dataFetch && <LoadingSpinner />}
        {!dataFetch && postList.length === 0 && <WelcomeMessage />}
        {!dataFetch &&
          postList.map((post) => <Card key={post.id} post={post} />)}
      </div>
    </>
  );
}

export default Postlist;
