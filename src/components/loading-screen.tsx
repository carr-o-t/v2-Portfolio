import { personalInfo } from '@/entities';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
            <div className="flex flex-col items-center space-y-6">
                {/* Animated Logo/Initial */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.6, -0.05, 0.01, 0.99]
                    }}
                    className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-rose-100/60 flex items-center justify-center overflow-hidden"
                >
                    <img
                        src={personalInfo.profileImage}
                        alt={personalInfo.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                </motion.div>

                {/* Loading Text */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-lg font-medium text-foreground/90 mb-2">
                        bytethecarrot.dev
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Frontend Engineer
                    </p>
                </motion.div>

                {/* Loading Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="flex space-x-1"
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut",
                            }}
                            className="w-2 h-2 bg-primary rounded-full"
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;