import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, CheckCircle2, Github, Linkedin, ExternalLink } from "lucide-react";

interface ContactViewProps {
  onShowToast: (message: string) => void;
}

export default function ContactView({ onShowToast }: ContactViewProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      onShowToast("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast("Message sent successfully to Bhumika Sudarshani!");
      setEmail("");
      setMessage("");
      // Reset state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const socials = [
    { name: "GitHub", url: "https://github.com", icon: <Github className="w-4 h-4" /> },
    { name: "LinkedIn", url: "https://linkedin.com", icon: <Linkedin className="w-4 h-4" /> },
    { name: "Email", url: "mailto:bhumika@example.com", icon: <Mail className="w-4 h-4" /> }
  ];

  return (
    <motion.div
      key="contact-view"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-start select-none w-full max-w-lg"
      id="contact-view"
    >
      <span className="text-zinc-400 font-light text-lg sm:text-xl md:text-2xl tracking-wide">
        Get in
      </span>
      
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight select-none mt-1 leading-none text-white mb-6">
        Touch
      </h2>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-2xl bg-zinc-950/40 border border-emerald-500/30 text-center w-full flex flex-col items-center gap-3 my-4"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-white">Message Sent</h3>
          <p className="text-xs text-zinc-400 max-w-xs">
            Thank you for reaching out! Bhumika will get back to you as soon as possible.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-[10px] tracking-widest font-bold uppercase text-zinc-500" htmlFor="contact-email">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              disabled={isSubmitting}
              className="px-4 py-3 rounded-xl bg-zinc-950/40 border border-zinc-900 focus:border-[#2B66FF]/60 text-xs sm:text-sm text-white placeholder-zinc-700 focus:outline-none transition-colors duration-200 disabled:opacity-50"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-[10px] tracking-widest font-bold uppercase text-zinc-500" htmlFor="contact-message">
              Your Message
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Bhumika, I'd love to collaborate on a new project..."
              disabled={isSubmitting}
              rows={4}
              className="px-4 py-3 rounded-xl bg-zinc-950/40 border border-zinc-900 focus:border-[#2B66FF]/60 text-xs sm:text-sm text-white placeholder-zinc-700 focus:outline-none transition-colors duration-200 resize-none disabled:opacity-50"
              required
            />
          </div>

          <button
            type="submit"
            id="btn-contact-submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2B66FF] hover:bg-blue-600 active:scale-95 text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-[0_5px_15px_rgba(43,102,255,0.2)] disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}

      {/* Social Links */}
      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-zinc-900 w-full">
        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-600">
          Find me on
        </span>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-950/50 border border-zinc-900 text-zinc-500 hover:text-white hover:border-zinc-800 transition-colors duration-300"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
