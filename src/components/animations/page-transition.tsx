import { motion } from 'framer-motion';
import React from 'react';

interface PageTransitionProps {
    children: React.ReactNode;
}

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
        scale: 0.98
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        y: -20,
        scale: 1.02
    }
};

const pageTransition = {
    type: "tween" as const,
    ease: [0.6, -0.05, 0.01, 0.99] as const,
    duration: 0.6
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;