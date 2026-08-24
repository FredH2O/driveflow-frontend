import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

export function useBookings() {
  const { logout } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const result = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token") || sessionStorage.getItem("token")}`,
          },
        });

        if (result.status === 401) {
          logout();
          return;
        }

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
  }, [logout]);

  return {
    bookings,
    setBookings,
    loading,
    error,
  };
}
