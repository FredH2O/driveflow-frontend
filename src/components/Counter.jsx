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
    <div className="bg-white border border-purple-100 rounded-2xl shadow-sm p-6 flex flex-col items-center gap-3 hover:shadow-md transition">
      <p className="text-purple-600 text-lg font-medium text-center">{title}</p>

      <motion.h2 className="text-4xl font-bold text-purple-800">
        {rounded}
      </motion.h2>
    </div>
  );
}

export default Counter;
