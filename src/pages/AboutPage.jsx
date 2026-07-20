import ValueCard from "../components/ValueCard";
import { NavLink } from "react-router-dom";

function AboutPage() {
  return (
    <section className="max-w-3xl h-screen flex justify-center flex-col mx-auto mt-54 p-10 md:mt-0 lg:p-0">
      <div className="text-center mb-14">
        <p className="text-purple-600 text-sm tracking-widest uppercase mb-2">
          私たちについて
        </p>
        <h1 className="text-4xl font-bold text-zinc-300">About DriveFlow</h1>
        <p className="mt-4 text-zinc-300">
          Honest, precise car care — built on Japanese craftsmanship.
        </p>
      </div>

      {/* Story section */}
      <div className="mb-14">
        <h2 className="text-xl font-semibold text-zinc-300 mb-3">Our Story</h2>
        <p className="text-zinc-300 leading-relaxed">
          DriveFlow was founded to bring a Japanese standard of care to Dublin
          drivers — attention to detail, respect for the customer, and a genuine
          pride in getting the small things right. Every vehicle that comes
          through our doors gets the same careful treatment, whether it's a
          routine service or a full engine rebuild.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14">
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

      <div className="text-center">
        <NavLink
          to={"/contact"}
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg
                     hover:bg-purple-700 transition-colors"
        >
          Book a service
        </NavLink>
      </div>
    </section>
  );
}

export default AboutPage;
