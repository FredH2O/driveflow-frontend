import Counter from "./Counter";

function CounterSection() {
  const stats = [
    { value: 944, label: "Cars Serviced" },
    { value: 23452, label: "Parts Delivered" },
    { value: 2939, label: "NCT Passed" },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-purple-500 uppercase tracking-[0.3em] text-sm">
            OUR IMPACT
          </p>

          <h2 className="text-4xl text-zinc-700 font-bold italic mt-3">
            Numbers That{" "}
            <span className="text-purple-500 underline">Matter</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Since 2015, every vehicle we service represents our commitment to
            precision, reliability, and keeping our customers on the road.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <Counter key={stat.label} title={stat.label} count={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
