import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Globe, 
  Sparkles 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  // Animation variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section id="contact" className="relative px-6 lg:px-14 pt-1 pb-20 bg-slate-50/50 overflow-hidden">
      {/* Ambient Background & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
            Let's Connect 
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg leading-relaxed">
            Have a project in mind, a freelance opportunity, or just want to chat about web development? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bento Contact Info */}
          <motion.div 
            className="lg:col-span-5 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="mb-8">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Contact Information
              </h3>
              <p className="mt-2 text-slate-600 text-sm">
                Reach out to me directly through any of these channels.
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.a 
              variants={fadeUpVariant}
              href="mailto:sokkhenkheum7@gmail.com"
              className="group flex items-center gap-5 p-5 bg-white border border-slate-200/80 rounded-2xl shadow-xs hover:border-blue-400/60 hover:shadow-md hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</p>
                <p className="text-sm font-semibold text-slate-900 mt-0.5">sokkhenkheum7@gmail.com</p>
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.a 
              variants={fadeUpVariant}
              href="tel:070550517"
              className="group flex items-center gap-5 p-5 bg-white border border-slate-200/80 rounded-2xl shadow-xs hover:border-indigo-400/60 hover:shadow-md hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</p>
                <p className="text-sm font-semibold text-slate-900 mt-0.5">070 550 517</p>
              </div>
            </motion.a>

            {/* Location Card */}
            <motion.div 
              variants={fadeUpVariant}
              className="group flex items-center gap-5 p-5 bg-white border border-slate-200/80 rounded-2xl shadow-xs hover:border-emerald-400/60 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</p>
                <p className="text-sm font-semibold text-slate-900 mt-0.5">SenSok, Phnom Penh</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Glassmorphic Contact Form */}
          <motion.div 
            className="lg:col-span-7 bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/80"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUpVariant}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Name Input */}
                <div className="space-y-2.5">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white text-slate-900 placeholder:text-slate-400 transition-all duration-300"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2.5">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white text-slate-900 placeholder:text-slate-400 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="space-y-2.5">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  placeholder="Tell me about your project, timeline, and goals..."
                  className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white text-slate-900 placeholder:text-slate-400 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="button" 
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
              >
                Send Message
                <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}