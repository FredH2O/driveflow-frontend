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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="service"
          placeholder="Service"
          value={form.service}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Booking..." : "Book"}
        </button>
      </form>

      {response && (
        <div>
          {response.success ? (
            <p>Booking created successfully (ID: {response.booking_id})</p>
          ) : (
            <p>Something went wrong: {response.message}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default BookingForm;
