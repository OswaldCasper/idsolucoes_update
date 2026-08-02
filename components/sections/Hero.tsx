"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const areas = [
  ["01", "Formação Profissional"],
  ["02", "Segurança Electrónica"],
  ["03", "Manpower & Recrutamento"],
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        overflow-hidden
        bg-background
        py-10
        text-foreground
        md:py-16
      "
    >

      {/* brilho dourado ambiente */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[600px]
          w-[600px]
          rounded-full
          bg-[radial-gradient(circle,rgba(201,154,58,0.15)_0%,transparent_65%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1240px]
          items-center
          gap-16
          px-6
          md:grid-cols-[1.1fr_0.9fr]
          lg:px-8
        "
      >

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          <span
            className="
              mb-6
              inline-flex
              items-center
              gap-3
              text-xs
              font-bold
              uppercase
              tracking-[0.3em]
              text-foreground
              dark:text-gold
            "
          >
            <span className="h-px w-7 bg-primary dark:bg-gold" />
            Império Dourado Soluções
          </span>


          <h1
            className="
              mb-6
              font-sans
              text-[clamp(40px,5vw,72px)]
              font-semibold
              leading-[1.05]
              tracking-tight
            "
          >

            <motion.span
              className="block"
              initial={{ opacity:0, x:-20 }}
              animate={{ opacity:1, x:0 }}
              transition={{ delay:.2 }}
            >
              Serviços que capacitam,
            </motion.span>


            <motion.span
              className="block"
              initial={{ opacity:0, x:-20 }}
              animate={{ opacity:1, x:0 }}
              transition={{ delay:.35 }}
            >
              conectam e
            </motion.span>


            <motion.span
              className="gold-text block"
              initial={{ opacity:0, x:-20 }}
              animate={{ opacity:1, x:0 }}
              transition={{ delay:.5 }}
            >
              desenvolvem.
            </motion.span>

          </h1>


          <motion.p
            className="
              mb-9
              max-w-[520px]
              text-lg
              text-muted-foreground
            "
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:.65}}
          >
            Empresa angolana de prestação de serviços estratégicos.
            Combinamos tecnologia, equipas qualificadas e uma
            abordagem centrada nas pessoas para entregar soluções
            práticas a cada cliente.
          </motion.p>


          <motion.div
            className="flex flex-wrap gap-4"
            initial={{opacity:0, y:15}}
            animate={{opacity:1, y:0}}
            transition={{delay:.8}}
          >

          <Button asChild size="lg" className="hover:bg-gold dark:hover:bg-gold">
          <Link href="#contactos">
            Pedir levantamento técnico
          </Link>
        </Button>


        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-foreground hover:border-gold hover:text-gold dark:border-foreground dark:hover:border-gold"
        >
          <Link href="#servicos">
            Ver serviços
          </Link>
        </Button>

          </motion.div>

        </motion.div>



        {/* IMAGEM */}
        <motion.div
          initial={{
            opacity:0,
            scale:.95,
            x:40
          }}
          animate={{
            opacity:1,
            scale:1,
            x:0
          }}
          transition={{
            duration:.9,
            delay:.3
          }}
          className="
            relative
            block
          "
        >

          <motion.div
            whileHover={{
              scale:1.12
            }}
            transition={{
              duration:.4
            }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-border
              shadow-xl
            "
          >

            <Image
              src="/Image_1.jpg"
              alt="Império Dourado Soluções"
              width={700}
              height={700}
              className="
                h-auto
                w-full
                object-cover
              "
              priority
            />


            {/* overlay dourado */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-tr
                from-gold/20
                via-transparent
                to-transparent
              "
            />

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}