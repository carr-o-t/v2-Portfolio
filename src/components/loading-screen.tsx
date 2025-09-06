import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const LoadingScreen = () => {
  const location = useLocation()
  const pageName = useMemo(
    () =>
      location.pathname === '/'
        ? 'Home'
        : location.pathname
          .slice(1)
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase()),
    [location.pathname]
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Loading Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-2 text-2xl font-medium text-foreground/90">
            {pageName}
          </h1>
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
                ease: 'easeInOut',
              }}
              className="h-2 w-2 rounded-full bg-primary"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
