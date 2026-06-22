function TestimonialCard({ name, comment, image }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <p className="text-gray-600 italic leading-relaxed mb-4">“{comment}”</p>

      <div>
        <img
          className="w-20 h-20 border rounded-full bg-purple-500 object-cover"
          src={image}
          alt={name}
        />
        <h3 className="text-gray-900 font-semibold text-sm tracking-wide">
          {name}
        </h3>
      </div>
    </div>
  );
}

export default TestimonialCard;
