import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function Counter({ title, count }) {
  const value = useMotionValue(0);
  const rounded = useTransform(value, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(value, count, { duration: 10 });
    return controls.stop;
  }, [count, value]);

  return (
    <div className="flex flex-col p-5 gap-3">
      <p className="text-4xl">{title}</p>
      <motion.h2 className="text-xl">{rounded}</motion.h2>
    </div>
  );
}

export default Counter;
