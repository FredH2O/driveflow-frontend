import car1 from "../assets/images/car1.jpg";
import car2 from "../assets/images/car2.jpg";
import car3 from "../assets/images/car3.jpg";
import car4 from "../assets/images/car4.jpg";
import car5 from "../assets/images/car5.jpg";
import car6 from "../assets/images/car6.jpg";

const images = [car1, car2, car3, car4, car5, car6];

function GalleryPage() {
  return (
    <section className="min-h-screen text-white px-6 py-36">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-purple-500 uppercase tracking-[0.3em] text-sm">
            ギャラリー
          </p>

          <h1 className="text-5xl font-bold italic mt-3">
            Our <span className="text-purple-500">Gallery</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A glimpse into our workshop, our craftsmanship, and the vehicles
            trusted to our care.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;
