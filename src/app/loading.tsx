"use client";

import { motion } from "motion/react";

const Loading = () => {
  const text = "SHORIFUL";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center">
        {/* Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.1, 0.8] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-32 w-64 rounded-full bg-emerald-500/20 blur-3xl"
        />

        {/* Name */}
        <div className="relative flex overflow-hidden">
          {text.split("").map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl font-black tracking-[0.18em] text-foreground sm:text-5xl md:text-6xl"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Progress Line */}
        <div className="mt-6 h-px w-48 overflow-hidden bg-border">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 bg-emerald-600 dark:bg-emerald-400"
          />
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-4 text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground"
        >
          Loading Portfolio
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;