import { useState, useEffect } from "react";

function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://driveflow.local/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return posts;
}

export default usePosts;
