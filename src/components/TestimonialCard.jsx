function TestimonialCard({ name, comment, image }) {
  return (
    <div className="bg-white flex flex-col h-full border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all ease-in-out hover:bg-purple-200 duration-300">
      <p className="text-gray-600 grow italic leading-relaxed mb-4">
        “{comment}”
      </p>

      <div className="">
        <img
          className="w-20 h-20 border rounded-full bg-purple-700 object-cover"
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
