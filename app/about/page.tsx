"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import HoneycombParticle from "../../components/HoneycombParticle";

export default function AboutPage() {
  const funFacts = [
    "☕ 1000+ Cups of Hot Chocolate",
    "🎧 Podcasts while coding",
    "🌱 Nature lover",
    "✈️ Love to travel",
    "📚 Always reading",
  ];

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      {/* Honeycomb Particles */}
      <section className="relative bg-purple-950 text-white py-24 overflow-hidden">

        {/* Honeycomb Particles Layer */}
      <div className="absolute inset-0 pointer-events-none">
      <HoneycombParticle />
      <HoneycombParticle />
      <HoneycombParticle />
      <HoneycombParticle />
      <HoneycombParticle />
      </div>

      

        {/* Honeycomb Background */}
        <div className="absolute inset-0 opacity-10">
        <img
          src="/honeycomb.svg"
          alt=""
          className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none">
      <HoneycombParticle className="top-10 left-10" />
      <HoneycombParticle className="top-1/3 left-1/4 text-3xl" />
      <HoneycombParticle className="top-1/2 left-1/2 text-6xl" />
      <HoneycombParticle className="top-20 right-20 text-4xl" />
      <HoneycombParticle className="bottom-20 left-1/3 text-5xl" />
</div>

         {/* Floating Honey Jar */}
        <motion.div
        className="absolute top-20 left-10 text-8xl opacity-50"
        animate={{
          y: [0, -15, 0],
          rotate: [-5, 5, -5],
          }}
        transition={{
        duration: 5,
        repeat: Infinity,
        }}
  >
    🍯
  </motion.div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-purple-800 text-yellow-300 px-4 py-2 rounded-full text-sm">
              About Me
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
              Building digital
              <br />
              experiences with
              <br />
              <span className="text-yellow-400">
                passion & purpose.
              </span>
            </h1>

            <p className="text-gray-300 mt-8 text-lg max-w-xl">
              I'm a full-stack developer who loves crafting clean,
              performant and user-friendly applications.
              I turn ideas into reality with code, creativity,
              and a little bit of honey. 🍯
            </p>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >

            {/* Floating Bee */}

            <motion.div
              className="absolute -top-8 right-0 text-7xl"
              animate={{
                y: [0, -15, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              🐝
            </motion.div>

            <div className="relative">

              <div
              className="
              absolute
              -top-20
              -right-20
              w-80
              h-80
              bg-yellow-400
              rounded-full
              blur-[100px]
              opacity-30
              z-0
              "
              />

              <Image
                src="/profile.jpg"
                alt="Profile"
                width={420}
                height={500}
                className="rounded-3xl object-cover shadow-2xl"
              />

              {/* Experience Card */}

              <div
                className="
                absolute
                bottom-8
                -left-8
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                text-black
                rounded-3xl
                shadow-xl
                p-6
                text-center
                "
              >
                <div className="text-yellow-500 text-4xl">
                  🏅
                </div>

                <p className="text-4xl font-bold mt-2">
                  3+
                </p>

                <p className="text-gray-500">
                  Years Experience
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* JOURNEY SECTION */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <span className="text-yellow-500 font-semibold">
            ─ My Journey
          </span>

          <div className="grid md:grid-cols-3 gap-10 mt-8">

            {/* LEFT */}

            <div>

              <h2 className="text-5xl font-bold text-purple-950 mb-6">
                From curiosity
                <br />
                to code.
              </h2>

              <p className="text-gray-600 leading-relaxed">
                My journey into development started with curiosity
                about how websites work. That curiosity became
                a passion, and today I build products that solve
                real-world problems and create meaningful impact.
              </p>

              <div className="mt-10 space-y-6">

                <div>
                  <h3 className="font-bold text-xl">
                    🐝 Problem Solver
                  </h3>

                  <p className="text-gray-600">
                    Building solutions that make a difference.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    🌻 Lifelong Learner
                  </h3>

                  <p className="text-gray-600">
                    Always exploring new technologies.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    ⚡ Clean Code Advocate
                  </h3>

                  <p className="text-gray-600">
                    Writing maintainable and scalable software.
                  </p>
                </div>

              </div>

            </div>

            {/* CENTER */}

            <div className="flex justify-center items-center">

              <div className="text-center">

                <div className="text-9xl">
                  🍯
                </div>

                <div className="text-6xl mt-4">
                  📚
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div
              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              rounded-3xl
              shadow-lg
              p-8
              "
            >
              <h3 className="text-2xl font-bold mb-6">
                Fun Facts
              </h3>

              <div className="space-y-5">

                {funFacts.map((fact) => (
                  <div
                    key={fact}
                    className="
                    border-b
                    pb-4
                    text-gray-700
                    "
                  >
                    {fact}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
            bg-purple-950
            rounded-[40px]
            text-white
            p-10
            grid
            md:grid-cols-4
            gap-8
            "
          >
            <StatCard
  number={20}
  label="Projects Completed"
/>

<StatCard
  number={15}
  label="Happy Clients"
/>

<StatCard
  number={3}
  label="Years Experience"
/>

<StatCard
  number={5}
  label="Technologies"
/>
          </div>

        </div>

      </section>

    </main>
  );
}

function StatCard({
  number,
  label,
}: {
  number: number;
  label: string;
}) {
  return (
    <div className="text-center">

      <div className="text-5xl mb-4">
        🐝
      </div>

      <h3 className="text-4xl font-bold">

        <CountUp
          end={number}
          duration={2}
          enableScrollSpy
          scrollSpyOnce
        />

        +

      </h3>

      <p className="text-gray-300 mt-2">
        {label}
      </p>

    </div>
  );
}

