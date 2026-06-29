import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import usePosts from "../hooks/usePosts";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CounterSection from "../components/CounterSection";
import { ApiTest } from "../components/ApiTest";

function HomePage() {
  const posts = usePosts();

  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-5xl mx-auto">
        <Services />
        <Testimonials />
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title.rendered}</h2>
          </div>
        ))}
        <CounterSection />
        <ApiTest />
      </div>
    </>
  );
}

export default HomePage;
