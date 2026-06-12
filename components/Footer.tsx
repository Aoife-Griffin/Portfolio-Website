"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>

      {/* Main Purple Footer */}

      <section className="relative bg-purple-950 overflow-hidden">

        {/* Honeycomb Background */}

        <div className="absolute inset-0 opacity-5">
          <img
            src="/honeycomb.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative Honey Pot */}

        <motion.div
          className="absolute left-10 top-8 text-8xl"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          🍯
        </motion.div>

        {/* Decorative Bee */}

        <motion.div
          className="absolute right-32 top-12 text-6xl"
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

        {/* Decorative Flower */}

        <div className="absolute right-10 bottom-6 text-7xl">
          🌸
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

          <div className="grid lg:grid-cols-3 gap-8 items-center">

            {/* Text */}

            <div className="lg:col-span-2">

              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Let's build something amazing together.
              </h2>

              <p className="text-gray-300 mt-4 text-lg">
                I'm currently available for freelance work
                and exciting opportunities.
              </p>

            </div>

            {/* Button + Socials */}

            <div className="flex flex-col items-center lg:items-end gap-6 lg:pr-40">

              <button
                className="
                bg-yellow-400
                text-black
                px-8
                py-4
                rounded-2xl
                font-bold
                shadow-xl
                hover:scale-105
                transition
                "
              >
                Get In Touch 🚀
              </button>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="
                  bg-white/10
                  backdrop-blur
                  p-4
                  rounded-xl
                  text-white
                  hover:bg-white/20
                  transition
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  className="
                  bg-white/10
                  backdrop-blur
                  p-4
                  rounded-xl
                  text-white
                  hover:bg-white/20
                  transition
                  "
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  className="
                  bg-white/10
                  backdrop-blur
                  p-4
                  rounded-xl
                  text-white
                  hover:bg-white/20
                  transition
                  "
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="
                  bg-white/10
                  backdrop-blur
                  p-4
                  rounded-xl
                  text-white
                  hover:bg-white/20
                  transition
                  "
                >
                  <FaEnvelope />
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Bottom Bar */}

      <section className="bg-purple-950 border-t border-white/10">

        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          py-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          text-gray-400
          "
        >
          <p>
            © 2025 BeeDev. All rights reserved.
          </p>

          <div className="text-yellow-400 text-3xl">
            ⬢
          </div>

          <p>
            Built with ❤️ and lots of ☕
          </p>

        </div>

      </section>

    </footer>
  );
}