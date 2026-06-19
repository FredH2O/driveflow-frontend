import { useEffect, useState } from "react";

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const result = await fetch(
          "http://driveflow-backend.local/wp-json/wp/v2/testimonials?_embed=1",
        );

        if (!result.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data = await result.json();

        setTestimonials(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
}
