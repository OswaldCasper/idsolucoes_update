"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ServiceLink = {
  title: string;
  href: string;
};

type Props = {
  title?: string;
  description?: string;
  links: ServiceLink[];
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function RelatedServices({
  title = "Explore outros serviços",
  description = "Conheça outras áreas de actuação da IDS.",
  links,
}: Props) {
  return (
    <section className="bg-card/40 py-20 text-foreground transition-colors duration-300">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="font-sans text-[28px] font-semibold tracking-tight">
            {title}
          </h3>

          <p className="mt-3 max-w-[600px] text-muted-foreground">
            {description}
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {links.map(({ title: linkTitle, href }) => (
            <motion.div key={href} variants={item} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
              <Link
                href={href}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-colors duration-300 hover:border-gold/50"
              >
                <div>
                  <div className="h-[2px] w-10 bg-gold transition-all duration-300 group-hover:w-20" />

                  <h4 className="mt-4 font-sans text-[16px] font-semibold text-foreground transition-colors group-hover:text-gold">
                    {linkTitle}
                  </h4>
                </div>

                <ArrowRight className="mt-4 h-4 w-4 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-gold group-hover:opacity-100" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}