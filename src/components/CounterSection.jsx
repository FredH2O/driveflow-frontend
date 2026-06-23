import Counter from "./Counter";

function CounterSection() {
  const stats = [
    { value: 1500, label: "Cars Serviced" },
    { value: 23452, label: "Parts Delivered" },
    { value: 2939, label: "NCT Passed" },
  ];

  return (
    <section>
      {stats.map((stat) => (
        <Counter key={stat.label} title={stat.label} count={stat.value} />
      ))}
    </section>
  );
}

export default CounterSection;
