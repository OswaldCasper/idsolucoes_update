"use client";

import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Award, BadgeCheck } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Parceiro Dahua Technology" },
  { icon: ShieldCheck, label: "Parceiro UNV" },
  { icon: Award, label: "Certificação INEFOP" },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Certifications() {
  return (
    <section className="border-y border-border bg-card/40 py-10 transition-colors duration-300">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
          className="flex flex-wrap items-center justify-center gap-4 md:justify-between"
        >
          {badges.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 rounded-full border border-border bg-background px-5 py-2.5"
            >
              <BadgeCheck className="h-4 w-4 text-gold" strokeWidth={2} />
              <span className="text-[13.5px] font-medium text-foreground">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}