"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ShieldCheck,
  Zap
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Web Design",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Web Design",
        details: "",
      });
    }, 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="w-full bg-slate-50/20 text-slate-800 antialiased pt-28">
      {/* Hero Header */}
      <section className="relative py-16 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-600/15 blur-[100px]" />
        </div>

        <Container>
          <div className="max-w-3xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400"
            >
              <Zap className="h-4.5 w-4.5" />
              <span>Let's Discuss Your Project</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight"
            >
              Get in Touch with Our Expert Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base text-slate-300 max-w-2xl leading-relaxed"
            >
              Have an idea, upgrade request, or complex software requirement? Tell us about your project goals, and let's craft a secure, high-converting solution.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Info */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-10">
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    Contact Channels
                  </span>
                  <h2 className="font-heading text-2xl font-extrabold text-slate-900 mt-4 tracking-tight">
                    Start Your Success Story Today
                  </h2>
                  <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                    Choose any of our channels below to request a call, or fill out the questionnaire to receive a customized estimate.
                  </p>
                </div>

                {/* Cards */}
                <div className="space-y-4">
                  <div className="flex gap-4 p-4.5 border border-slate-100 rounded-2xl bg-slate-50/30">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">EMAIL US</div>
                      <a href="mailto:hello@cbssoftware.com" className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors mt-1 block">
                        hello@cbssoftware.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4.5 border border-slate-100 rounded-2xl bg-slate-50/30">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">CALL US</div>
                      <a href="tel:+15550192834" className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors mt-1 block">
                        +1 (555) 019-2834
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4.5 border border-slate-100 rounded-2xl bg-slate-50/30">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">VISIT US</div>
                      <span className="text-xs font-semibold text-slate-700 mt-1 block">
                        100 Innovation Way, Suite 400, Tech City
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4.5 border border-slate-100 rounded-2xl bg-slate-50/30">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">BUSINESS HOURS</div>
                      <span className="text-xs font-semibold text-slate-700 mt-1 block">
                        Monday – Friday: 9:00 AM – 6:00 PM EST
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="p-6 border border-slate-100 bg-slate-50/30 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-600 font-heading text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="h-4.5 w-4.5" />
                  <span>Privacy Guaranteed</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  We value your privacy. All information submitted remains strictly confidential and is used solely to construct your technical estimation. We do not sell or share data.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50/50 p-6 md:p-10 border border-slate-100 rounded-3xl shadow-sm">
                <h3 className="font-heading text-xl font-bold text-slate-900 leading-snug mb-8">
                  Submit a Consultation Request
                </h3>

                <AnimatePresence mode="wait">
                  {submitStatus === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      className="text-center py-12 flex flex-col items-center"
                    >
                      <CheckCircle2 className="h-16 w-16 text-emerald-500 mb-6" />
                      <h4 className="font-heading text-xl font-bold text-slate-900">Thank You!</h4>
                      <p className="text-slate-500 text-sm mt-3 leading-relaxed max-w-md">
                        Your consultation request has been successfully received. One of our senior technology architects will review your details and contact you within 24 business hours.
                      </p>
                      <Button
                        onClick={() => setSubmitStatus("idle")}
                        className="mt-8 rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                      >
                        Send Another Inquiry
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="h-11 px-4 border border-slate-200 rounded-xl bg-white text-sm focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="h-11 px-4 border border-slate-200 rounded-xl bg-white text-sm focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Phone */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="h-11 px-4 border border-slate-200 rounded-xl bg-white text-sm focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        {/* Company */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="company" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Acme Corp"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="h-11 px-4 border border-slate-200 rounded-xl bg-white text-sm focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Service needed */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="service" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                          Service Category
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="h-11 px-4 border border-slate-200 rounded-xl bg-white text-sm focus:outline-none focus:border-blue-500"
                        >
                          <option>Web Design</option>
                          <option>Web Development</option>
                          <option>eCommerce Store</option>
                          <option>Mobile App Development</option>
                          <option>Digital Marketing</option>
                          <option>Custom Software</option>
                        </select>
                      </div>

                      {/* Project description */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="details" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                          Project Scope & Details <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="details"
                          name="details"
                          required
                          rows={5}
                          placeholder="Tell us about your project requirements, goals, timeline, or key feature requests..."
                          value={formData.details}
                          onChange={handleInputChange}
                          className="p-4 border border-slate-200 rounded-xl bg-white text-sm focus:outline-none focus:border-blue-500 resize-y"
                        />
                      </div>

                      {submitStatus === "error" && (
                        <div className="flex items-center gap-2 text-red-500 text-xs font-semibold bg-red-50 p-3 rounded-lg border border-red-100">
                          <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                          <span>Please fill out all required fields marked with an asterisk (*).</span>
                        </div>
                      )}

                      {/* Submit */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-12 w-full rounded-xl font-bold bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white cursor-pointer transition-all shadow-md shadow-blue-500/10 flex items-center justify-center gap-2 border-0"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Transmitting Request...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            <span>Send Consultation Request</span>
                          </>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
