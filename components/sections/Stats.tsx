"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, type Variants } from "framer-motion";

// TODO: substituir por números reais
const stats = [
  { value: 5, suffix: "+", label: "Anos de experiência" },
  { value: 300, suffix: "+", label: "Clientes atendidos" },
  { value: 150, suffix: "+", label: "Profissionais qualificados" },
  { value: 200, suffix: "+", label: "Projectos concluídos" },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <span className="tabular-nums">
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.15)_0%,transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="grid grid-cols-2 gap-10 md:grid-cols-4"
        >
          {stats.map(({ value, suffix, label }) => (
            <motion.div key={label} variants={item} className="text-center md:text-left">
              <div className="gold-text font-sans text-[clamp(36px,5vw,52px)] font-semibold leading-none">
                <Counter value={value} suffix={suffix} />
              </div>
              <p className="mt-3 text-[14px] uppercase tracking-[0.1em] text-white/60">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}