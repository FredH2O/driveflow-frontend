import { useEffect, useState } from "react";

export function useBooking() {
  const [bookings, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const result = await fetch(
          "http://driveflow-backend.local/wp-json/wp/v2/bookings",
        );

        if (!result.ok) {
          throw new Error("Failed fetching booking, try again later.");
        }

        const data = await result.json();
        setBooking(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  return {
    bookings,
    loading,
    error,
  };
}
