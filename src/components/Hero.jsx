import background from "../assets/driveflow-bg.jpg";

function Hero() {
  return (
    <section className="relative flex flex-col justify-center h-screen">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={background}
        alt="Driveflow's Background"
      />
      <div className="absolute bg-black/50 inset-0"></div>
      <h1 className="relative z-10 text-7xl font-bold italic text-center drop-shadow-lg">
        Driveflow
      </h1>
    </section>
  );
}

export default Hero;
