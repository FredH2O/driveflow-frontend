import { useEffect, useState } from "react";

export function useBookings() {
  const [bookings, setBookings] = useState([]);
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
        setBookings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  return {
    bookings,
    setBookings,
    loading,
    error,
  };
}
