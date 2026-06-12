"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  description,
  image,
  tech,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="
      bg-white
      rounded-3xl
      shadow-xl
      overflow-hidden
      "
    >
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-purple-950">
          {title}
        </h3>

        <p className="text-gray-600 mt-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">

          {tech?.map((item) => (
            <span
              key={item}
              className="
              bg-yellow-100
              text-purple-950
              px-3
              py-1
              rounded-full
              text-sm
              "
            >
              {item}
            </span>
          ))}

        </div>

        {/* Button */}
        <button
          className="
          mt-6
          bg-purple-950
          text-white
          px-5
          py-3
          rounded-full
          hover:bg-yellow-400
          hover:text-black
          transition
          "
        >
          View Project →
        </button>

      </div>
    </motion.div>
  );
}