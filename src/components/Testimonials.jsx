import { useTestimonials } from "../hooks/useTestimonials";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";

function Testimonials() {
  const { loading, testimonials, error } = useTestimonials();

  if (loading) return <p>Retrieving testimonials...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <section>
      <h2 className="text-center font-bold text-3xl mb-10">
        Testimonials <span className="text-purple-400 font-light">証言</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ id, title, acf, image_url }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <TestimonialCard
              name={title?.rendered}
              comment={acf?.comment_testimonial}
              image={image_url}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
