import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, X } from "lucide-react";

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-950 border border-blue-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-white select-none max-w-sm"
          id="toast-notification"
        >
          <div className="p-1 rounded-full bg-blue-500/10 text-blue-400">
            <CheckCircle className="w-4 h-4" />
          </div>
          <p className="text-xs font-medium text-zinc-200 flex-1">{message}</p>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
