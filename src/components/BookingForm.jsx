import { useState } from "react";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "http://driveflow-backend.local/wp-json/driveflow/v1/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await res.json();
      setResponse(data);

      // reset data
      if (data.success) {
        setForm({
          name: "",
          service: "",
          date: "",
          time: "",
        });
      }
    } catch {
      setResponse({ success: false, message: "Request failed" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-start justify-center px-4 py-12 ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 border border-purple-100">
        <h2 className="text-2xl font-semibold text-purple-700 mb-6 text-center">
          Book a Service
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            className="w-full px-4 py-2 border placeholder:text-slate-300 text-slate-500 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            className="w-full px-4 py-2 border placeholder:text-slate-300 text-slate-500 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border text-slate-500 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="" disabled>
              Select a service
            </option>

            <option value="nct-prep">NCT Preparation Check</option>
            <option value="nct-inspection">NCT Inspection Service</option>

            <option value="oil-change">Oil & Filter Change</option>
            <option value="tire-service">Tyre Replacement / Balance</option>
            <option value="brake-service">Brake Inspection & Repair</option>

            <option value="battery-check">Battery Health Check</option>
            <option value="diagnostics">Full Diagnostics Scan</option>

            <option value="general-service">General Car Service</option>
            <option value="pre-sale-check">Pre-Sale Vehicle Check</option>
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border text-slate-500  border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border text-slate-500 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Booking..." : "Book Now"}
          </button>
        </form>

        {response && (
          <div
            className={`mt-4 text-sm text-center ${
              response.success ? "text-green-600" : "text-red-500"
            }`}
          >
            {response.success
              ? `Booking created successfully (ID: ${response.booking_id})`
              : `Something went wrong: ${response.message}`}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingForm;
