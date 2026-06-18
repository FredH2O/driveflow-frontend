import { useServices } from "../hooks/useServices";
import ServiceCard from "./ServiceCard";

function Services() {
  const { services, loading } = useServices();
  const visibleServices = services.slice(0, 6);

  if (loading) return <p>Retrieving Services...</p>;

  return (
    <section className="py-16 px-6">
      <h2 className="text-center font-bold text-3xl mb-10">
        Services <span className="text-purple-400 font-light">サービス</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
