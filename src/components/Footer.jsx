import { NavLink } from "react-router-dom";
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Book a Service", href: "/contact" },
];

const services = [
  "Vehicle Inspection",
  "Body & Engine Repairs",
  "OEM Parts Supply",
  "Digital Diagnostics",
  "Full Car Servicing",
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            DriveFlow
            <span className="block text-sm font-normal text-purple-400 mt-1">
              ドライブフロー
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            Japanese precision, Dublin service. Trusted vehicle care built on
            craftsmanship and attention to detail.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <NavLink key={link.label} to={link.href}>
                <li>
                  <span className="text-sm text-neutral-400 hover:text-purple-400 transition-colors">
                    {link.label}
                  </span>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
            Services
          </h3>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service} className="text-sm text-neutral-400">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-400">
            <li>Dublin, Ireland</li>
            <li>
              <a
                href="tel:+3530000000"
                className="hover:text-purple-400 transition-colors"
              >
                +353 00 000 0000
              </a>
            </li>
            <li>
              <a
                href="mailto:info@driveflow.ie"
                className="hover:text-purple-400 transition-colors"
              >
                info@driveflow.ie
              </a>
            </li>
            <li>Mon – Sat, 9:00 – 18:00</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-800" />

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} DriveFlow. All rights reserved.
        </p>
        <p className="text-xs text-neutral-500">
          品質と信頼 — Quality and trust, always.
        </p>
      </div>
    </footer>
  );
}
