const serviceDetails = [
  {
    illustration: "../src/assets/illustrations/inspection.svg",
    titleEnglish: "NCT Inspection",
    titleJapanese: "検査",
    details:
      "Professional NCT inspections carried out with precision and care. Book your slot today.",
  },
  {
    illustration: "../src/assets/illustrations/repairs.svg",
    titleEnglish: "Repairs",
    titleJapanese: "修理",
    details:
      "From minor fixes to major overhauls, our technicians handle it all with Japanese precision.",
  },
  {
    illustration: "../src/assets/illustrations/parts.svg",
    titleEnglish: "Parts & Delivery",
    titleJapanese: "部品と配送",
    details:
      "Genuine and aftermarket parts sourced and delivered straight to your door or fitted in store.",
  },
];

function Services() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-center font-bold text-3xl mb-10">
        Services <span className="text-purple-400 font-light">サービス</span>
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {serviceDetails.map((service) => (
          <div
            key={service.titleEnglish}
            className="flex flex-col group items-center text-center 
            gap-4 p-6 rounded-2xl 
            bg-zinc-700/50 hover:bg-zinc-700 duration-200"
          >
            <img
              src={service.illustration}
              alt={service.title}
              className="w-44 h-32 object-contain group-hover:scale-105 
              duration-200"
            />
            <div className="relative cursor-pointer">
              <h3 className="group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-200 text-lg font-semibold">
                {service.titleEnglish}
              </h3>
              <h3 className="absolute inset-0 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 group-hover:block text-lg font-semibold group-hover:">
                {service.titleJapanese}
              </h3>
            </div>
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
