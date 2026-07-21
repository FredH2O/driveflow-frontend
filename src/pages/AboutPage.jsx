import ValueCard from "../components/ValueCard";
import { NavLink } from "react-router-dom";
import story1 from "../assets/images/story1.jpg";
import story2 from "../assets/images/story2.jpg";

const images = [story1, story2];

function AboutPage() {
  return (
    <section className="w-full bg-zinc-750 py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-purple-500 text-sm tracking-[0.3em] uppercase mb-3">
            私たちについて
          </p>

          <h1 className="text-5xl font-bold text-white italic">
            About <span className="text-purple-500">DriveFlow</span>
          </h1>

          <p className="mt-5 text-zinc-400 text-lg">
            Honest, precise car care — built on Japanese craftsmanship.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-5">
              Our Story
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              DriveFlow was founded to bring a Japanese standard of care to
              Dublin drivers — attention to detail, respect for the customer,
              and a genuine pride in getting the small things right. Every
              vehicle that comes through our doors gets the same careful
              treatment, whether it's a routine service or a full engine
              rebuild.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {images.map((image) => (
              <img
                src={image}
                key={image}
                className="rounded-2xl h-64 w-full object-cover"
              />
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <ValueCard
            title="Precision"
            jp="精密"
            description="Every job checked twice. No shortcuts."
          />

          <ValueCard
            title="Trust"
            jp="信頼"
            description="Clear pricing, honest advice, no surprises."
          />

          <ValueCard
            title="Care"
            jp="配慮"
            description="Your car treated like our own."
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <NavLink
            to="/contact"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-xl
            hover:bg-purple-700 transition"
          >
            Book a service
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
