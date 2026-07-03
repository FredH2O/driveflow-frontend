import Counter from "./Counter";

function CounterSection() {
  const stats = [
    { value: 1500, label: "Cars Serviced" },
    { value: 23452, label: "Parts Delivered" },
    { value: 2939, label: "NCT Passed" },
  ];

  return (
    <section className="w-full bg-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Counter key={stat.label} title={stat.label} count={stat.value} />
        ))}
      </div>
    </section>
  );
}

export default CounterSection;
