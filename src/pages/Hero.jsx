// // import React from 'react'

// // const Hero = () => {
// //   return (
// //     <div className='image-hero'>
// //         <div className = 'h-[90vh] w-[90vw]'>

// //         </div>
// //     </div>
// //   )
// // }

// // export default Hero


// import React from "react";

// const Hero = () => {
//   return (
//     <section className="image-hero">
      
//       {/* Background Image
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/src/assets/pictures/img1.png')",
//         }}
//       /> */}

//       {/* Dark cinematic overlay */}
//       <div className="absolute inset-0 bg-black/35" />

//       {/* Glass Letter Container */}
//       <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        
//         <div className="relative w-full max-w-3xl">

//           {/* Decorative vines */}
//           <div className="pointer-events-none absolute -inset-8">

//             {/* Top Left Vine */}
//             <div className="absolute left-0 top-0 h-32 w-32 rotate-[-25deg]">
//               <div className="absolute left-8 top-5 h-24 w-[2px] rotate-[-20deg] bg-white/40" />

//               <span className="absolute left-5 top-8 text-3xl">
//                 🌿
//               </span>

//               <span className="absolute left-12 top-20 text-2xl">
//                 🌸
//               </span>
//             </div>

//             {/* Top Right Vine */}
//             <div className="absolute right-0 top-0 h-32 w-32 rotate-[25deg]">
//               <div className="absolute right-8 top-5 h-24 w-[2px] rotate-[20deg] bg-white/40" />

//               <span className="absolute right-5 top-8 text-3xl">
//                 🌿
//               </span>

//               <span className="absolute right-12 top-20 text-2xl">
//                 🌸
//               </span>
//             </div>

//             {/* Bottom Left */}
//             <div className="absolute bottom-0 left-0 h-32 w-32 rotate-[25deg]">
//               <span className="absolute left-5 bottom-8 text-3xl">
//                 🌿
//               </span>

//               <span className="absolute left-12 bottom-20 text-2xl">
//                 🌸
//               </span>
//             </div>

//             {/* Bottom Right */}
//             <div className="absolute bottom-0 right-0 h-32 w-32 rotate-[-25deg]">
//               <span className="absolute right-5 bottom-8 text-3xl">
//                 🌿
//               </span>

//               <span className="absolute right-12 bottom-20 text-2xl">
//                 🌸
//               </span>
//             </div>

//           </div>

//           {/* Glass Card */}
//           <div
//             className="
//               relative
//               overflow-hidden
//               rounded-[2rem]
//               border border-white/25
//               bg-white/10
//               p-8
//               shadow-[0_25px_80px_rgba(0,0,0,0.35)]
//               backdrop-blur-xl
//               md:p-12
//             "
//           >

//             {/* Glass shine */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 bg-gradient-to-br
//                 from-white/20
//                 via-transparent
//                 to-transparent
//               "
//             />

//             {/* Content */}
//             <div className="relative z-10">

//               <p className="mb-6 font-serif text-sm tracking-[0.25em] text-white/70 uppercase">
//                 A little letter for you
//               </p>

//               <h1
//                 className="
//                   mb-8
//                   font-serif
//                   text-4xl
//                   italic
//                   text-white
//                   md:text-5xl
//                 "
//               >
//                 Hey Pranu,
//               </h1>

//               <div
//                 className="
//                   max-h-[55vh]
//                   overflow-y-auto
//                   pr-3
//                   font-serif
//                   text-base
//                   leading-8
//                   text-white/90
//                   scrollbar-thin
//                   md:text-lg
//                 "
//               >
//                 <p className="mb-5 italic text-white">
//                   My sweet little devil...
//                 </p>

//                 <p className="mb-5">
//                   Nenu ninu devil anna, you are my beautiful angel.
//                   Nenu neeto unnatu inka evarito undalenu. You are my
//                   best comfort space.
//                 </p>

//                 <p className="mb-5">
//                   I like everything about you. I still wonder, naaku inta
//                   best ammai dorikindi ani. I should definitely never miss
//                   her. I am the luckiest one in the world to have you...!
//                 </p>

//                 <p className="mb-5">
//                   Thank you for every sweet memory you created for me...
//                   <br />
//                   Thank you for supporting me when I feel low...
//                   <br />
//                   Thank you for making me do the right things, even by
//                   scolding me...
//                 </p>

//                 <p className="mb-5">
//                   I promise I will become the Dhanu you like. I will lose
//                   this worst stomach and I will become white...
//                 </p>

//                 <p className="mb-5">
//                   I will make sure it happens, no matter what.
//                 </p>

//                 <p className="font-semibold text-white">
//                   I promise you, we will build our own house or flat by
//                   the age of 30. ❤️
//                 </p>
//               </div>

//               {/* Signature */}
//               <div className="mt-10 text-right">
//                 <p className="font-serif text-sm italic text-white/60">
//                   — Yours,
//                 </p>

//                 <p className="mt-1 font-serif text-2xl italic text-white">
//                   Dhanu ❤️
//                 </p>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import heroFrame from "../assets/pictures/heroFrame.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isMouseInside, setIsMouseInside] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden cursor-none"
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => setIsMouseInside(false)}
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroFrame})`,
        }}
      />

      {/* Cinematic Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Soft Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.04]
          blur-3xl
        "
      />

      {/* =====================================================
          CUSTOM IMAGE CURSOR
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[100]
          hidden
          h-24
          w-24
          -translate-x-1/2
          -translate-y-1/2
          overflow-hidden
          rounded-full
          border
          border-white/70
          shadow-[0_0_35px_rgba(255,255,255,0.25)]
          md:block
        "
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isMouseInside ? 1 : 0,
          opacity: isMouseInside ? 1 : 0,
        }}
        transition={{
          x: {
            type: "spring",
            stiffness: 350,
            damping: 30,
            mass: 0.5,
          },
          y: {
            type: "spring",
            stiffness: 350,
            damping: 30,
            mass: 0.5,
          },
          scale: {
            duration: 0.25,
          },
          opacity: {
            duration: 0.2,
          },
        }}
      >
        {/* Cursor Image */}
        <img
          src={heroFrame}
          alt=""
          className="
            h-full
            w-full
            scale-125
            object-cover
          "
        />

        {/* Glass Shine */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-white/30
            via-transparent
            to-black/20
          "
        />

        {/* Inner Ring */}
        <div
          className="
            absolute
            inset-[5px]
            rounded-full
            border
            border-white/30
          "
        />
      </motion.div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-6
          py-20
        "
      >
        <div className="relative w-full max-w-3xl">

          {/* =================================================
              FLOWER / VINE DECORATIONS
          ================================================== */}

          <div className="pointer-events-none absolute -inset-8">

            {/* Top Left */}
            <div className="absolute left-0 top-0 h-32 w-32 rotate-[-25deg]">
              <div
                className="
                  absolute
                  left-8
                  top-5
                  h-24
                  w-[2px]
                  rotate-[-20deg]
                  bg-white/40
                "
              />

              <span className="absolute left-5 top-8 text-3xl">
                🌿
              </span>

              <span className="absolute left-12 top-20 text-2xl">
                🌸
              </span>
            </div>

            {/* Top Right */}
            <div className="absolute right-0 top-0 h-32 w-32 rotate-[25deg]">
              <div
                className="
                  absolute
                  right-8
                  top-5
                  h-24
                  w-[2px]
                  rotate-[20deg]
                  bg-white/40
                "
              />

              <span className="absolute right-5 top-8 text-3xl">
                🌿
              </span>

              <span className="absolute right-12 top-20 text-2xl">
                🌸
              </span>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-0 left-0 h-32 w-32 rotate-[25deg]">
              <span className="absolute bottom-8 left-5 text-3xl">
                🌿
              </span>

              <span className="absolute bottom-20 left-12 text-2xl">
                🌸
              </span>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0 h-32 w-32 rotate-[-25deg]">
              <span className="absolute bottom-8 right-5 text-3xl">
                🌿
              </span>

              <span className="absolute bottom-20 right-12 text-2xl">
                🌸
              </span>
            </div>
          </div>

          {/* =================================================
              GLASS LETTER
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/25
              bg-white/[0.10]
              p-8
              shadow-[0_25px_80px_rgba(0,0,0,0.4)]
              backdrop-blur-xl
              md:p-12
            "
          >

            {/* Glass Highlight */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-white/[0.18]
                via-transparent
                to-transparent
              "
            />

            {/* Top Glass Reflection */}
            <div
              className="
                pointer-events-none
                absolute
                -left-20
                -top-32
                h-64
                w-64
                rounded-full
                bg-white/[0.08]
                blur-3xl
              "
            />

            {/* =================================================
                LETTER CONTENT
            ================================================== */}

            <div className="relative z-10">

              {/* Small Label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="
                  mb-6
                  font-serif
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-white/60
                "
              >
                A little letter for you
              </motion.p>

              {/* Heading */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                }}
                className="
                  mb-8
                  font-serif
                  text-4xl
                  italic
                  text-white
                  md:text-5xl
                "
              >
                Hey Pranu,
              </motion.h1>

              {/* Letter */}
              <div
                className="
                  max-h-[55vh]
                  overflow-y-auto
                  pr-3
                  font-serif
                  text-base
                  leading-8
                  text-white/90
                  md:text-lg
                "
              >

                <p className="mb-5 italic text-white">
                  My sweet little devil...
                </p>

                <p className="mb-5">
                  Nenu ninu devil anna, you are my beautiful angel.
                  Nenu neeto unnatu inka evarito undalenu. You are my
                  best comfort space.
                </p>

                <p className="mb-5">
                  I like everything about you. I still wonder, naaku inta
                  best ammai dorikindi ani. I should definitely never miss
                  her. I am the luckiest one in the world to have you...!
                </p>

                <p className="mb-5">
                  Thank you for every sweet memory you created for me...
                  <br />

                  Thank you for supporting me when I feel low...
                  <br />

                  Thank you for making me do the right things, even by
                  scolding me...
                </p>

                <p className="mb-5">
                  I promise I will become the Dhanu you like. I will lose
                  this worst stomach and I will become white...
                </p>

                <p className="mb-5">
                  I will make sure it happens, no matter what.
                </p>

                <p className="font-semibold text-white">
                  I promise you, we will build our own house or flat by
                  the age of 30. ❤️
                </p>

              </div>

              {/* =================================================
                  SIGNATURE
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1.5,
                  duration: 1,
                }}
                className="mt-10 text-right"
              >
                <p className="font-serif text-sm italic text-white/60">
                  — Yours,
                </p>

                <p
                  className="
                    mt-1
                    font-serif
                    text-2xl
                    italic
                    text-white
                  "
                >
                  Dhanu ❤️
                </p>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-20
          h-32
          bg-gradient-to-t
          from-black/40
          to-transparent
        "
      />

    </section>
  );
};

export default Hero;