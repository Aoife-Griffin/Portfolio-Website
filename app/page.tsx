"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
        {/* Framer Motion Animations for the hero section */}
      <main className="bg-purple-950 min-h-screen overflow-hidden">
         

        <section className="max-w-7xl mx-auto py-32 px-6 relative">

          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            <h1 className="text-7xl md:text-8xl font-bold text-white leading-tight">
              I build things
              <br />
              for the
              <span className="text-yellow-400">
                {" "}web.
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-white/70 text-xl mt-8 max-w-xl"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            Turning ideas into sweet digital experiences with code, creativity,
            and a little bit of honey. 🍯
          </motion.p>

          <motion.div
            className="flex gap-4 mt-10"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
          >
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              View Projects
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-purple-950 transition">
              Contact Me
            </button>
          </motion.div>

          <motion.div
            /// Animated bee
            className="absolute right-10 top-20 text-8xl"
            animate={{
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
            }}
            transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            }}
>
            🐝
        </motion.div>

        </section>

      </main>
    </>
  );
}