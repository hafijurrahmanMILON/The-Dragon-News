import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      {/* Animated spinner */}
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      ></motion.div>

      {/* Shimmer text */}
      <motion.h2
        className="mt-6 text-xl font-semibold  bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
        animate={{
          backgroundPositionX: ["0%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      >
        Loading...
      </motion.h2>
    </div>
  );
};

export default Loading;
