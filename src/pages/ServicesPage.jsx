import { NavLink } from "react-router-dom";
const services = [
  {
    title: "Vehicle Inspection",
    description:
      "Comprehensive safety and mechanical inspections to keep your vehicle roadworthy.",
  },
  {
    title: "Body & Engine Repairs",
    description:
      "From minor bodywork to major engine repairs, completed with precision and care.",
  },
  {
    title: "OEM Parts Supply",
    description:
      "High-quality genuine and OEM replacement parts for long-lasting performance.",
  },
  {
    title: "Digital Diagnostics",
    description:
      "Advanced diagnostic tools to quickly identify faults and recommend solutions.",
  },
  {
    title: "Full Car Servicing",
    description:
      "Routine maintenance including oil changes, filters, brakes, fluids, and more.",
  },
];

export default function ServicesPage() {
  return (
    <section className="flex flex-col m-auto justify-center h-screen">
      {/* Section heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          Our <span className="text-purple-500">Services</span>
        </h2>
        <p className="text-zinc-400 mt-2">
          Everything your car needs, all in one place.
        </p>
      </div>

      {/* Grid of service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 hover:border-purple-500 transition-colors duration-300"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/10 text-purple-400 font-bold mb-4">
              {index + 1}
            </div>

            <h3 className="text-white font-semibold text-lg">
              {service.title}
            </h3>

            <p className="text-zinc-400 mt-3 text-sm leading-6">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-zinc-400 mb-4">
          Need help choosing the right service?
        </p>

        <NavLink
          to="/contact"
          className="inline-block bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-r-full rounded-bl-full font-semibold transition-colors"
        >
          Book a Service
        </NavLink>
      </div>
    </section>
  );
}
