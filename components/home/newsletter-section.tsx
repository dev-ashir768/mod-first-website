"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 15 } }
}

export function NewsletterSection() {
  return (
    <section className="container py-10 md:py-12 lg:py-16">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full rounded-[24px] md:rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center bg-linear-to-b from-[#D3F52E] via-[#e8fa85] to-white/90"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black mb-4 text-center tracking-tight">
          Ready To Elevate Your Print Brand?
        </motion.h2>
        <motion.p variants={itemVariants} className="text-[#464545] text-base md:text-lg text-center max-w-[775px] mb-8 leading-[1.6]">
          Join the Modfirst newsletter to receive exclusive discounts, design templates, and
          professional DTF printing guides directly in your inbox.
        </motion.p>

        <motion.form variants={itemVariants} className="flex flex-row items-center gap-3 w-full max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Email"
            required
            className="flex-1 px-5 py-3 h-14 rounded-xl border border-[#848383] bg-white focus:outline-none focus:border-primary transition-all text-md text-muted-foreground"
          />
          <button
            type="submit"
            className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-xl transition-colors shrink-0"
          >
            <Image src="/images/icons/send.svg" alt="User" width={24} height={24} />
          </button>
        </motion.form>
      </motion.div>
    </section>
  )
}
