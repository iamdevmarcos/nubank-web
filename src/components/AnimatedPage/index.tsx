import { motion } from "framer-motion";

interface AnimatedPageProps {
  children: React.ReactNode;
}

const animations = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const AnimatedPage = ({ children }: AnimatedPageProps) => (
  <motion.div
    variants={animations}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 2 }}
  >
    {children}
  </motion.div>
);

export default AnimatedPage;
