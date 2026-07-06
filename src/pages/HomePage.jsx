import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CounterSection from "../components/CounterSection";
import BookingForm from "../components/BookingForm";

function HomePage() {
  return (
    <>
      <Hero />
      <CounterSection />
      <div className="max-w-5xl mx-auto">
        <Services />
        <Testimonials />
        <BookingForm />
      </div>
    </>
  );
}

export default HomePage;
