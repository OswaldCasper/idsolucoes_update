"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    lines: ["+244 929 481 473", "+244 929 826 387"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["sales@idsolucoes.ao"],
  },
  {
    icon: MapPin,
    title: "Localização",
    lines: ["Av. Mortala Mohamed, Ilha de Luanda"],
  },
];

const listContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactCTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:sales@idsolucoes.ao?subject=Contacto IDS - ${form.name}&body=Nome: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contactos"
      className="
        relative
        overflow-hidden
        bg-background
        py-10
        text-foreground
        transition-colors
        duration-300
        md:py-16
      "
    >
      {/* linha separadora superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-[600px]
          w-[600px]
          rounded-full
          bg-[radial-gradient(circle,rgba(201,154,58,0.12)_0%,transparent_65%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">

          {/* LEFT SIDE — mensagem + dados de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
              Vamos trabalhar juntos
            </span>

            <h2 className="font-sans text-[clamp(34px,4vw,56px)] font-semibold leading-[1.1] tracking-tight">
              Pronto para transformar
              <span className="gold-text block">
                o seu negócio?
              </span>
            </h2>

            <p className="mt-6 max-w-[480px] text-[16.5px] text-muted-foreground">
              Fale connosco e descubra como podemos ajudar a sua empresa a
              crescer com soluções tecnológicas e estratégicas.
            </p>

            {/* DADOS DE CONTACTO */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={listContainer}
              className="mt-12 space-y-6"
            >
              {contactInfo.map(({ icon: Icon, title, lines }) => (
                <motion.div
                  key={title}
                  variants={listItem}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-gold/30
                      bg-gold/10
                      text-foreground
                      dark:text-gold
                    "
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>

                  <div>
                    <h3 className="mb-1 font-sans text-[15px] font-semibold">
                      {title}
                    </h3>
                    {lines.map((line) => (
                      <p key={line} className="text-[15px] text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — formulário */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="
              rounded-xl
              border
              border-border
              bg-card
              p-6
              shadow-sm
              backdrop-blur-md
              md:p-8
            "
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nome"
                required
                className="
                  w-full
                  rounded-lg
                  border
                  border-border
                  bg-background
                  p-3
                  text-sm
                  text-foreground
                  outline-none
                  transition-colors
                  duration-300
                  placeholder:text-muted-foreground
                  focus:border-gold
                "
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="
                  w-full
                  rounded-lg
                  border
                  border-border
                  bg-background
                  p-3
                  text-sm
                  text-foreground
                  outline-none
                  transition-colors
                  duration-300
                  placeholder:text-muted-foreground
                  focus:border-gold
                "
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Mensagem"
                rows={15}
                required
                className="
                  w-full
                  resize-none
                  rounded-lg
                  border
                  border-border
                  bg-background
                  p-3
                  text-sm
                  text-foreground
                  outline-none
                  transition-colors
                  duration-300
                  placeholder:text-muted-foreground
                  focus:border-gold
                "
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="
                  group
                  relative
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-lg
                  bg-primary
                  py-3
                  text-sm
                  font-semibold
                  text-primary-foreground
                  transition-colors
                  duration-300
                  hover:bg-gold
                "
              >
                Enviar Mensagem
                <Send className="h-4 w-4" strokeWidth={1.75} />

                {/* linha dourada animada */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[image:var(--gold-grad)]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}