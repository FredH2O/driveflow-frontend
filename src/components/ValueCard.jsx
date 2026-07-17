function ValueCard({ title, jp, description }) {
  return (
    <div className="text-center border border-zinc-300 rounded-xl p-6 bg-zinc-700/60 backdrop-blur-sm">
      <p className="text-purple-500 text-sm mb-1">{jp}</p>
      <h3 className="font-semibold text-zinc-300 mb-2">{title}</h3>
      <p className="text-sm text-zinc-300">{description}</p>
    </div>
  );
}

export default ValueCard;
