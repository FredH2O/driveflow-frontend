import { useServices } from "../hooks/useServices";
import ServiceCard from "./ServiceCard";

function Services() {
  const { services, loading } = useServices();
  const visibleServices = services.slice(0, 6);

  if (loading) return <p>Retrieving Services...</p>;

  return (
    <section id="services" className="py-16 px-6">
      <h2 className="text-center font-bold text-3xl mb-10">
        Services <span className="text-purple-400 font-light">サービス</span>
      </h2>
      <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        From routine maintenance to complex repairs, DriveFlow provides reliable
        automotive care with precision and attention to detail. Our experienced
        team combines modern diagnostics with a passion for keeping your vehicle
        running safely and efficiently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleServices.map((service) => (
          <ServiceCard
            id={`service-${service.slug}`}
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
