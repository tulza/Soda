import clsx from "clsx";
import { motion } from "framer-motion";

const StateButton = ({
  label,
  OnClick,
  className,
}: {
  label: string;
  OnClick: () => void;
  className?: string;
}) => {
  return (
    <motion.div
      className={clsx(
        "relative grid aspect-square w-[100px] cursor-pointer select-none place-items-center overflow-hidden rounded-full border border-white text-3xl",
        `${className}`,
      )}
      onClick={OnClick}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={{ width: "0%" }}
        variants={{ hover: { width: "100%" } }}
        className="absolute aspect-square rounded-full bg-white/20"
      ></motion.div>
      {label}
    </motion.div>
  );
};

export default StateButton;
