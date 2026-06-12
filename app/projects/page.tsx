"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description:
      "X",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    emoji: "📊",
  },
  {
    title: "Project 2",
    description:
      "T",
    tech: ["React", "Node.js", "MongoDB"],
    emoji: "✅",
  },
  {
    title: "Project 3",
    description:
      "M",
    tech: ["Next.js", "Stripe", "Tailwind"],
    emoji: "🍯",
  },
  {
    title: "Project 4",
    description:
      "D",
    tech: ["React", "Firebase"],
    emoji: "📝",
  },
  {
    title: "Project 5",
    description:
      "R",
    tech: ["Socket.io", "Node.js"],
    emoji: "💬",
  },
  {
    title: "Project 6",
    description:
      "W.",
    tech: ["React", "Chart.js"],
    emoji: "🌤️",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* HERO */}

      <section className="relative bg-purple-950 py-28 overflow-hidden">

        {/* Honeycomb Background */}

        <div className="absolute inset-0 opacity-10">
          <img
            src="/honeycomb.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Glow */}

        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20" />

        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="text-white text-6xl md:text-8xl font-bold"
          >
            My Projects 🐝
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            className="text-gray-300 mt-6 text-xl max-w-2xl"
          >
            A collection of applications I've built,
            designed, and brought to life.
          </motion.p>

        </div>

      </section>

      {/* FILTERS */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-wrap gap-4 justify-center">

          <button className="bg-yellow-400 px-6 py-3 rounded-full font-bold">
            All
          </button>

          <button className="bg-white px-6 py-3 rounded-full shadow">
            React
          </button>

          <button className="bg-white px-6 py-3 rounded-full shadow">
            Next.js
          </button>

          <button className="bg-white px-6 py-3 rounded-full shadow">
            Full Stack
          </button>

        </div>

      </section>

      {/* FEATURED PROJECT */}

      <section className="max-w-7xl mx-auto px-6">

        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          className="
          bg-purple-950
          rounded-[40px]
          text-white
          p-10
          md:p-16
          mb-20
          "
        >
          <span className="text-yellow-400 font-bold">
            Featured Project
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Hive Dashboard 📊
          </h2>

          <p className="text-gray-300 mt-6 max-w-2xl">
            A modern analytics platform featuring real-time
            data visualization, user management,
            and performance monitoring.
          </p>

          <button
            className="
            mt-8
            bg-yellow-400
            text-black
            px-8
            py-4
            rounded-full
            font-bold
            "
          >
            View Project →
          </button>

        </motion.div>

      </section>

      {/* PROJECT GRID */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -10,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="
              bg-white
              rounded-3xl
              shadow-xl
              overflow-hidden
              "
            >
              <div
                className="
                h-48
                bg-gradient-to-br
                from-yellow-300
                to-orange-400
                flex
                items-center
                justify-center
                text-7xl
                "
              >
                {project.emoji}
              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-purple-950">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                      bg-yellow-100
                      text-purple-950
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <button
                  className="
                  mt-6
                  text-purple-700
                  font-semibold
                  "
                >
                  View Details →
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="pb-24 px-6">

        <div
          className="
          max-w-5xl
          mx-auto
          bg-purple-950
          text-white
          rounded-[40px]
          p-12
          text-center
          "
        >
          <h2 className="text-5xl font-bold">
            Let's Build Something Sweet 🍯
          </h2>

          <p className="mt-6 text-gray-300">
            Have a project in mind?
            Let's work together.
          </p>

          <button
            className="
            mt-8
            bg-yellow-400
            text-black
            px-8
            py-4
            rounded-full
            font-bold
            "
          >
            Contact Me
          </button>

        </div>

      </section>

    </main>
  );
}