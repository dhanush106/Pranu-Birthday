import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import birthdaySong from "../assets/music/Guche Gulabi.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;
    audio.loop = true;

    const handlePlay = () => {
      setIsPlaying(true);
      setShowStartButton(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const startMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
      setShowStartButton(false);
    } catch (error) {
      console.log("Music could not start:", error);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={birthdaySong}
        preload="auto"
      />

      {/* ==============================================
          START MUSIC OVERLAY
      =============================================== */}

      <AnimatePresence>
        {showStartButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{ duration: 0.8 }}
            className="
              fixed
              inset-0
              z-[200]
              flex
              items-center
              justify-center
              bg-black/40
              backdrop-blur-sm
            "
          >
            <motion.button
              onClick={startMusic}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-full
                border
                border-white/30
                bg-white/10
                px-8
                py-4
                font-serif
                text-sm
                tracking-[0.2em]
                text-white
                shadow-[0_10px_50px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
              "
            >
              {/* Glow */}
              <span
                className="
                  absolute
                  inset-0
                  -z-10
                  bg-white/10
                  blur-xl
                  transition
                  duration-500
                  group-hover:bg-white/20
                "
              />

              <span className="mr-3">
                ♫
              </span>

              Tap to begin
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==============================================
          FLOATING MUSIC BUTTON
      =============================================== */}

      <AnimatePresence>
        {!showStartButton && (
          <motion.button
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.92,
            }}
            onClick={toggleMusic}
            aria-label={
              isPlaying
                ? "Pause background music"
                : "Play background music"
            }
            className="
              fixed
              bottom-6
              right-6
              z-[150]
              flex
              h-12
              w-12
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-white/30
              bg-white/10
              text-lg
              text-white
              shadow-[0_8px_30px_rgba(0,0,0,0.3)]
              backdrop-blur-xl
            "
          >
            {isPlaying ? "♫" : "▶"}

            {/* Playing ring */}
            {isPlaying && (
              <motion.span
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-white/40
                "
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackgroundMusic;