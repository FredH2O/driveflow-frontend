import { useEffect, useState } from "react";

export function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const result = await fetch(
          "http://driveflow-backend.local/wp-json/wp/v2/services",
        );
        const data = await result.json();

        setServices(data);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  return { services, loading };
}
