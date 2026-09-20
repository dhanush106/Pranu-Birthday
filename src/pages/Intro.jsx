import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const sequences = [
  {
    text: "22-09-2026",
    duration: 100,
    pause: 1800,
  },
  {
    text: "The Best Day Of The Year...",
    duration: 90,
    pause: 1200,
  },
  {
    text: "Happy Birthday, My Dear Cute Rabbit 🐰❤️",
    duration: 80,
    pause: 2200,
  },
];

export default function BirthdayIntro({ onComplete }) {
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState("typing");
  const [showConfetti, setShowConfetti] = useState(false);

  const current = sequences[sequenceIndex];

  useEffect(() => {
    let timer;

    if (phase === "typing") {
      if (displayText.length < current.text.length) {
        timer = setTimeout(() => {
          setDisplayText(
            current.text.slice(0, displayText.length + 1)
          );
        }, current.duration);
      } else {
        timer = setTimeout(() => {
          setPhase("fading");
        }, current.pause);
      }
    }

    if (phase === "fading") {
      timer = setTimeout(() => {
        if (sequenceIndex === sequences.length - 1) {
          setShowConfetti(true);
          setPhase("celebrating");
          startGrandConfetti();
        } else {
          setDisplayText("");
          setSequenceIndex((prev) => prev + 1);
          setPhase("typing");
        }
      }, 800);
    }

    if (phase === "celebrating") {
      timer = setTimeout(() => {
        onComplete();
      }, 7500);
    }

    return () => clearTimeout(timer);
  }, [
    displayText,
    phase,
    sequenceIndex,
    current,
    onComplete,
  ]);

  const startGrandConfetti = () => {
    const duration = 5000;
    const end = Date.now() + duration;

    const colors = [
      "#ff4d88",
      "#ff85a2",
      "#ffd166",
      "#ffffff",
      "#c77dff",
    ];

    const frame = () => {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 70,
        origin: {
          x: 0,
          y: 0.65,
        },
        colors,
      });

      confetti({
        particleCount: 8,
        angle: 120,
        spread: 70,
        origin: {
          x: 1,
          y: 0.65,
        },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Big center burst
    setTimeout(() => {
      confetti({
        particleCount: 280,
        spread: 120,
        startVelocity: 45,
        origin: {
          x: 0.5,
          y: 0.55,
        },
        colors,
      });
    }, 300);

    // Second burst
    setTimeout(() => {
      confetti({
        particleCount: 350,
        spread: 200,
        startVelocity: 40,
        origin: {
          x: 0.5,
          y: 0.45,
        },
        colors,
      });
    }, 1000);
  };

  return (
    <div className="relative text-regular min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,160,0.08),transparent_45%)]" />

      {/* Tiny stars */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 80 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-[5px] w-[5px] rounded-full bg-pink-400 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={sequenceIndex + phase}
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="relative z-10 px-6 text-center"
        >
          <motion.div
            animate={
              phase === "celebrating"
                ? {
                    scale: [1, 1.04, 1],
                  }
                : {}
            }
            transition={{
              duration: 1.2,
              repeat:
                phase === "celebrating"
                  ? Infinity
                  : 0,
            }}
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              lg:text-7xl
              font-light
              tracking-wide
              leading-tight
              main
            "
          >
            {displayText}
            {phase === "typing" && (
              <span className="ml-1 animate-pulse">
                |
              </span>
            )}
          </motion.div>

          {/* Birthday celebration subtitle */}
          {phase === "celebrating" && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 1,
              }}
              className="mt-6 secondary text-sm md:text-lg tracking-[0.3em] uppercase text-white/60"
            >
              Today is all about you ✨
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Celebration glow */}
      {showConfetti && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.35, 0] }}
          transition={{
            duration: 2,
            repeat: 2,
          }}
          className="absolute inset-0 pointer-events-none bg-pink-500/10"
        />
      )}
    </div>
  );
}