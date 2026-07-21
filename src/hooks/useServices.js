import { useEffect, useState } from "react";

export function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const result = await fetch(`${import.meta.env.VITE_API_URL}/services`);

        if (!result.ok) {
          throw new Error("Failed to fetch services!");
        }
        const data = await result.json();

        setServices(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  return { services, loading };
}
