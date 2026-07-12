import React from "react";
import { motion } from "motion/react";
import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import { Certificate } from "../types";

export default function CertificatesView() {
  const leftCertificates: Certificate[] = [
    {
      id: "cert-left-1",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Oct 2025",
      credentialId: "AWS-ASA-839210"
    },
    {
      id: "cert-left-2",
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "The Linux Foundation",
      date: "Jun 2025",
      credentialId: "CKA-283910"
    },
    {
      id: "cert-left-3",
      title: "Meta Full Stack Developer Certificate",
      issuer: "Meta / Coursera",
      date: "Jan 2025",
      credentialId: "META-FS-382910"
    }
  ];

  const rightCertificates: Certificate[] = [
    {
      id: "cert-1",
      title: "Google Cloud Certified Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "Dec 2025",
      credentialId: "GCP-ACE-938210"
    },
    {
      id: "cert-2",
      title: "TensorFlow Developer Certificate",
      issuer: "Google / Coursera",
      date: "Aug 2025",
      credentialId: "TF-DEV-108239"
    },
    {
      id: "cert-3",
      title: "Advanced React & Web System Design",
      issuer: "Frontend Masters",
      date: "May 2025",
      credentialId: "FM-REACT-382910"
    }
  ];

  const renderCertCard = (cert: Certificate) => (
    <div
      key={cert.id}
      className="p-5 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] w-full"
    >
      <div className="flex gap-3.5 items-start">
        <div className="p-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-amber-500 flex-shrink-0 mt-0.5">
          <Award className="w-5 h-5 text-amber-400" />
        </div>
        <div className="flex flex-col gap-1 text-left">
          <h3 className="text-sm font-bold text-zinc-100 leading-snug">
            {cert.title}
          </h3>
          <span className="text-xs text-[#FACC15] font-semibold">
            {cert.issuer}
          </span>
          {cert.credentialId && (
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-mono mt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
              <span>ID: {cert.credentialId}</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-zinc-400 text-[10px] sm:text-xs font-mono self-end sm:self-center">
        <Calendar className="w-3 h-3" />
        <span>{cert.date}</span>
      </div>
    </div>
  );

  return (
    <div
      className="flex flex-col items-start w-full select-none"
      id="certificates-view"
    >
      {/* Title Block - Animated strictly on scroll when in viewport */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-start mb-10 text-left w-full"
      >
        <div className="flex items-center gap-3">
          <span className="w-6 h-[2px] bg-[#EAB308]" />
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#EAB308] uppercase">
            CERTIFICATES
          </span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-1.5 leading-tight font-sans">
          Verified Credentials
        </h2>
      </motion.div>

      {/* Two-column layout grid - Animated strictly on scroll when in viewport */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full"
      >
        {/* Left Column Stack */}
        <div className="flex flex-col gap-4 w-full">
          {leftCertificates.map(renderCertCard)}
        </div>

        {/* Right Column Stack */}
        <div className="flex flex-col gap-4 w-full">
          {rightCertificates.map(renderCertCard)}
        </div>
      </motion.div>
    </div>
  );
}
