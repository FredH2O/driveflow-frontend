import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://driveflow.local/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  });

  return (
    <div>
      <h1>My Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
