import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CounterSection from "../components/CounterSection";
import BookingForm from "../components/BookingForm";
import WhyChooseUs from "../components/WhyChooseUs";

function HomePage() {
  return (
    <>
      <Hero />
      <CounterSection />
      <div className="max-w-5xl mx-auto">
        <Services />
        <Testimonials />
      </div>
      <WhyChooseUs />
      <BookingForm />
    </>
  );
}

export default HomePage;
