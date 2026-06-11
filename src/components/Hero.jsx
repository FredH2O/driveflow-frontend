import background from "../assets/driveflow-bg.jpg";

const buttons = ["Book a Service", "Our Story"];

function Hero() {
  return (
    <section className="relative flex flex-col justify-center h-screen">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={background}
        alt="Driveflow's Background"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-transparent"></div>
      <div className="relative flex flex-col gap-3 z-10 text-center">
        <h1 className="text-7xl font-bold italic text-center drop-shadow-lg">
          Drive<span className="text-purple-500">flow</span>
        </h1>

        <div>
          <p className="text-white text-sm tracking-widest uppercase">
            ダブリン初の日本人向けガレージ
          </p>
          <p className="italic text-gray-300">
            Dublin's Elite Garage — Precision care for your vehicle, rooted in
            Japanese craftsmanship.
          </p>
        </div>

        <div className="flex flex-row justify-center gap-4">
          {buttons.map((title, index) => (
            <button
              className={`cursor-pointer px-6 py-3 rounded-full font-semibold duration-200
                ${
                  index === 0
                    ? "bg-purple-500 text-white hover:bg-purple-600"
                    : "border border-white hover:text-zinc-800 hover:bg-white"
                }`}
              key={title}
            >
              {title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
