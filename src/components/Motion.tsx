import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface Props {
  duration: number;
  hasTransitionY?: boolean;
}

function Motion({
  duration,
  hasTransitionY = true,
  children,
}: PropsWithChildren<Props>) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, ...(hasTransitionY && { y: 0 }) },
        hidden: { opacity: 0, ...(hasTransitionY && { y: -20 }) },
      }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
}

export default Motion;
