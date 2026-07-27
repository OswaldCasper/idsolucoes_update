"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  image: string;
  imageAlt: string;
}

export default function PageHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  image,
  imageAlt,
}: PageHeaderProps) {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="relative h-[380px] w-full md:h-[460px] lg:h-[520px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
        />

        {/* overlay para garantir legibilidade do texto sobre a imagem, em qualquer tema */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(201,154,58,0.22)_0%,transparent_60%)]" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1240px] flex-col justify-end px-6 pb-14 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-5 inline-flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-goldsoft"
          >
            <span className="h-px w-7 bg-goldsoft" />
            {eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-sans text-[clamp(38px,6vw,68px)] font-semibold leading-[1.05] tracking-tight text-white"
          >
            {title}
            {titleAccent && (
              <span className="gold-text block">{titleAccent}</span>
            )}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
              className="mt-5 max-w-[560px] text-[16.5px] leading-relaxed text-white/80"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}