const serviceDetails = [
  {
    illustration: "../src/assets/illustrations/inspection.svg",
    title: "NCT Inspection",
    details:
      "Professional NCT inspections carried out with precision and care. Book your slot today.",
  },
  {
    illustration: "../src/assets/illustrations/repairs.svg",
    title: "Repairs",
    details:
      "From minor fixes to major overhauls, our technicians handle it all with Japanese precision.",
  },
  {
    illustration: "../src/assets/illustrations/parts.svg",
    title: "Parts & Delivery",
    details:
      "Genuine and aftermarket parts sourced and delivered straight to your door or fitted in store.",
  },
];

function Services() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-center font-bold text-3xl mb-10">Services</h2>

      <div className="grid grid-cols-3 gap-6">
        {serviceDetails.map((service) => (
          <div
            key={service.title}
            className="flex flex-col group items-center text-center gap-4 p-6 rounded-2xl 
            bg-zinc-700/50 hover:bg-zinc-700 duration-200"
          >
            <img
              src={service.illustration}
              alt={service.title}
              className="w-44 h-32 object-contain group-hover:scale-105 duration-200"
            />
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-400 font-light">
              {service.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
