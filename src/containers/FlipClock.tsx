"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const DELAY_IN_MS = 1000;
const TRANSITION_DURATION_IN_SECS = 0.8;

export const FlipClock = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, DELAY_IN_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex h-7 flex-col items-center justify-center gap-1 px-3 md:flex-row">
      <ClockUnit label="Hour" value={time.hours} />
      <div className="flex text-white items-center justify-center mb-6">:</div>
      <ClockUnit label="Minute" value={time.minutes} />
    </section>
  );
};

const getCurrentTime = () => {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");
  return {
    hours: pad(now.getHours()),
    minutes: pad(now.getMinutes()),
    seconds: pad(now.getSeconds()),
  };
};

const ClockUnit = ({ label, value }: { label: string; value: string }) => {
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    if (value !== prevValue) {
      setPrevValue(value);
    }
  }, [value, prevValue]);

  return (
    <div className="flex flex-col items-center">
      <div
        style={{ transformStyle: "preserve-3d" }}
        className="relative z-0 h-10 w-10 rounded-xl border border-neutral-700 bg-neutral-800 text-xl font-mono text-white shadow-lg"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={value + "-top"}
            style={{
              y: "-50%",
              x: "-50%",
              clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
              zIndex: -1,
              backfaceVisibility: "hidden",
            }}
            transition={{
              duration: TRANSITION_DURATION_IN_SECS,
              ease: "easeInOut",
            }}
            initial={{ rotateX: "0deg" }}
            animate={{ rotateX: "0deg" }}
            exit={{ rotateX: "-180deg" }}
            className="absolute left-1/2 top-1/2 grid h-10 w-6 place-content-center"
          >
            {value}
          </motion.div>
          <motion.div
            key={value + "-bottom"}
            style={{
              y: "-50%",
              x: "-50%",
              clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
              zIndex: 1,
              backfaceVisibility: "hidden",
            }}
            initial={{ rotateX: "180deg" }}
            animate={{ rotateX: "0deg" }}
            exit={{ rotateX: "0deg" }}
            transition={{
              duration: TRANSITION_DURATION_IN_SECS,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 grid h-10 w-6 place-content-center"
          >
            {value}
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-xs text-neutral-400">{label}</span>
    </div>
  );
};
