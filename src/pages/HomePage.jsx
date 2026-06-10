import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import usePosts from "../hooks/usePosts";

function HomePage() {
  const posts = usePosts();

  return (
    <>
      <Navbar />
      <Hero />
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
        </div>
      ))}
    </>
  );
}

export default HomePage;
