import { useServices } from "../hooks/useServices";
import inspection from "../assets/illustrations/inspection.svg";
import repairs from "../assets/illustrations/repairs.svg";
import parts from "../assets/illustrations/parts.svg";
import diagnostics from "../assets/illustrations/diagnostics.svg";
import servicing from "../assets/illustrations/servicing.svg";
import delivery from "../assets/illustrations/delivery.svg";

const illustrations = {
  inspection,
  repairs,
  parts,
  diagnostics,
  servicing,
  delivery,
};

function Services() {
  const { services, loading } = useServices();
  const visibleServices = services.slice(0, 6);

  if (loading) return <p>Retrieving Services...</p>;

  return (
    <section className="py-16 px-6">
      <h2 className="text-center font-bold text-3xl mb-10">
        Services <span className="text-purple-400 font-light">サービス</span>
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {visibleServices.map((service) => (
          <div
            key={service.id}
            className="flex flex-col group items-center text-center 
            gap-4 p-6 rounded-2xl 
            bg-zinc-700/50 hover:bg-zinc-700 duration-200"
          >
            <img
              src={illustrations[service.acf.illustration] || servicing}
              alt={service.title.rendered}
              className="w-44 h-32 object-contain group-hover:scale-105 
              duration-200"
            />
            <div className="relative cursor-pointer">
              <h3 className="group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-200 text-lg font-semibold">
                {service.title.rendered}
              </h3>
              <h3 className="absolute inset-0 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 group-hover:block text-lg font-semibold group-hover:">
                {service.title.rendered}
              </h3>
            </div>
            <p className="text-sm text-gray-400 font-light">
              {service.acf.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
