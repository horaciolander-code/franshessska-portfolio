"use client";

import { motion } from "motion/react";
import { about } from "@/data/content";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function AboutMobile() {
  return (
    <section
      id="about"
      className="md:hidden bg-crema px-6 pt-8 pb-16 -mt-px"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-md mx-auto"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-5 justify-center">
          <span className="h-px w-8 bg-crimson/40" />
          <p className="font-body text-[0.65rem] uppercase tracking-[0.35em] text-crimson">
            {about.title}
          </p>
          <span className="h-px w-8 bg-crimson/40" />
        </motion.div>

        <motion.p
          variants={item}
          className="font-body text-marron/85 leading-relaxed text-center mb-10"
          style={{ fontSize: "var(--about-bio)" }}
        >
          {about.bio[0]}
        </motion.p>

        <motion.div variants={item} className="grid grid-cols-3 gap-3 pt-6 border-t border-rosa/30">
          {about.stats.map((s) => (
            <div key={s.label} className="text-center">
              <span
                className="block font-heading text-crimson leading-none"
                style={{ fontSize: "var(--about-stat)" }}
              >
                {s.value}
              </span>
              <span className="font-body text-[0.6rem] text-marron/70 uppercase tracking-wider mt-2 block">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
