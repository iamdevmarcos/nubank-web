import { motion } from "framer-motion";

interface AnimatedPageProps {
  children: React.ReactNode;
}

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const AnimatedPage = ({ children }: AnimatedPageProps) => (
  <motion.div
    variants={animations}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

export default AnimatedPage;
