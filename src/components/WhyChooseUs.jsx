import { NavLink } from "react-router-dom";
import WhyChooseUsImage from "../assets/images/WhyChooseUs.jpg";
import technicians from "../assets/images/technicians.png";
import repairs from "../assets/images/repairs.png";
import honestService from "../assets/images/honest-service.png";
import booking from "../assets/images/booking.png";

const reasons = [
  {
    name: "Experienced Technicians",
    description:
      "Our skilled mechanics have the knowledge and experience to diagnose problems accurately and keep your vehicle running smoothly.",
    logo: technicians,
  },
  {
    name: "Quality Parts & Repairs",
    description:
      "We use reliable parts and modern repair methods to ensure your vehicle receives the care it deserves.",
    logo: repairs,
  },
  {
    name: "Honest & Transparent Service",
    description:
      "We provide clear advice, upfront communication, and no unnecessary repairs — just dependable service you can trust.",
    logo: honestService,
  },
  {
    name: "Convenient Booking",
    description:
      "Book your service easily online and let us help keep your vehicle maintained with minimal hassle.",
    logo: booking,
  },
];

function WhyChooseUs() {
  return (
    <section className="py-16 px-10 mt-10 bg-gray-50">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            At Driveflow Garage, we’re proud to serve a wide variety of
            customers across multiple industries. Our commitment to quality and
            tailored solutions has earned us the trust of businesses and
            organizations throughout the region.
          </p>

          <NavLink
            to="/contact"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Book an Appointment
          </NavLink>
        </div>

        {/* Image */}
        <div>
          <img
            src={WhyChooseUsImage}
            alt="Why Choose Us"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Reasons Cards */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <li
              key={reason.name}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center"
            >
              <img
                src={reason.logo}
                alt={reason.name}
                className="w-16 h-16 mx-auto mb-5 object-contain"
              />

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {reason.name}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseUs;
