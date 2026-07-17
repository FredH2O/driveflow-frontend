import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Single handler for every input — reads which field changed from e.target.name
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    //  swap this for a fetch() POST to your WordPress endpoint.
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  }

  return (
    <section className="max-w-3xl h-screen flex justify-center flex-col mx-auto">
      <div className="text-center mb-14">
        <p className="text-purple-600 text-sm tracking-widest uppercase mb-2">
          お問い合わせ
        </p>
        <h1 className="text-4xl font-bold text-zinc-300">Contact Us</h1>
        <p className="mt-4 text-zinc-300">
          Questions, bookings, or just want to talk cars — get in touch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {/* Contact details */}
        <div>
          <h2 className="text-xl font-semibold text-zinc-300 mb-4">
            Visit or reach us
          </h2>
          <ul className="space-y-3 text-zinc-300">
            <li>
              <span className="text-purple-500 block text-sm">Address</span>
              123 Garage Street, Dublin
            </li>
            <li>
              <span className="text-purple-500 block text-sm">Phone</span>
              01 234 5678
            </li>
            <li>
              <span className="text-purple-500 block text-sm">Email</span>
              hello@driveflow.ie
            </li>
            <li>
              <span className="text-purple-500 block text-sm">Hours</span>
              Mon–Fri, 9am–6pm
            </li>
          </ul>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <p className="text-zinc-300">
              Thanks — we'll get back to you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-zinc-400 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-zinc-800 border border-zinc-700
                             text-zinc-200 px-4 py-2 focus:outline-none
                             focus:border-purple-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-zinc-400 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-zinc-800 border border-zinc-700
                             text-zinc-200 px-4 py-2 focus:outline-none
                             focus:border-purple-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-zinc-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-zinc-800 border border-zinc-700
                             text-zinc-200 px-4 py-2 focus:outline-none
                             focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg
                           hover:bg-purple-700 transition-colors"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
