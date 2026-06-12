"use client";

import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      
        {/* Framer Motion Animations for the hero section */}
      <main className="bg-purple-950 min-h-screen overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
          src="/honeycomb.svg"
          alt=""
          className="w-full h-full object-cover"
          />
          </div>
         

        <section className="max-w-7xl mx-auto py-24 px-6 relative">

  <div className="grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE */}

    <div>

      <motion.div
        className="inline-block bg-purple-800 px-6 py-3 rounded-2xl mb-8 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        👋 Hi, I'm
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl md:text-8xl font-bold text-white leading-tight"
      >
        I build things
        <br />
        for the
        <span className="text-yellow-400"> web.</span>
      </motion.h1>

      <motion.p
        className="text-white/70 text-xl mt-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I'm a software developer who loves crafting clean,
        efficient and beautiful web experiences.
      </motion.p>

      <motion.div
        className="flex gap-4 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold">
          View My Work →
        </button>

        <button className="border border-white text-white px-8 py-4 rounded-full">
          Download CV
        </button>
      </motion.div>

    </div>

    {/* RIGHT SIDE */}

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >

      <img
        src="/bee-hero.png"
        alt="Bee Developer"
        className="w-full max-w-2xl mx-auto"
      />

    </motion.div>

  </div>

</section>

<section className="bg-[#f7f5f2] py-20">

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">

    {/* About Card */}

    <div className="bg-white rounded-[32px] p-8 shadow-xl">
      About Me Card
    </div>

    {/* Skills Card */}

    <div className="bg-white rounded-[32px] p-8 shadow-xl">
      Skills Grid
    </div>

  </div>

</section>

<section className="bg-[#f7f5f2] pb-24">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-purple-950 mb-12">
      Featured Projects
    </h2>

    <div className="grid lg:grid-cols-3 gap-8">

      <ProjectCard />
      <ProjectCard />
      <ProjectCard />

    </div>

  </div>

</section>

      </main>
    </>
  );
}