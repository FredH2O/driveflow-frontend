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

function ServiceCard({ service }) {
  const { title, acf } = service;

  return (
    <div
      className="flex flex-col group items-center text-center 
            gap-4 p-6 rounded-2xl 
            bg-zinc-700/50 hover:bg-zinc-700 duration-200"
    >
      <img
        src={illustrations[acf.illustration] || servicing}
        alt={title.rendered}
        className="w-44 h-32 object-contain group-hover:scale-105 
              duration-200"
      />
      <div className="relative cursor-pointer">
        <h3 className="group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-200 text-lg font-semibold">
          {title.rendered}
        </h3>
        <h3 className="absolute inset-0 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 group-hover:block text-lg font-semibold group-hover:">
          {acf.jp_title}
        </h3>
      </div>
      <p className="text-sm text-gray-400 font-light">{acf.description}</p>
    </div>
  );
}

export default ServiceCard;
