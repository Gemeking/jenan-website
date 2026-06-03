"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={30} className="text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message Received!</h3>
        <p className="text-slate-400 text-sm">
          Thank you, {form.name}. Our team will reach you at{" "}
          {form.phone || form.email} shortly.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm({ name: "", phone: "", email: "", service: "", message: "" });
          }}
          className="mt-6 px-6 py-2.5 border border-blue-500/40 text-blue-400 rounded-xl text-sm hover:bg-blue-600/10 transition-colors"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
            Full Name *
          </label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full bg-navy-800 border border-white/10 focus:border-blue-500/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
            Phone Number *
          </label>
          <input
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="09xx xxx xxx"
            className="w-full bg-navy-800 border border-white/10 focus:border-blue-500/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
          Email Address
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full bg-navy-800 border border-white/10 focus:border-blue-500/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
          Service Needed
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full bg-navy-800 border border-white/10 focus:border-blue-500/60 rounded-xl px-4 py-3 text-slate-300 text-sm outline-none transition-colors"
        >
          <option value="">Select a service...</option>
          <option>General Surgery</option>
          <option>Pediatric Care</option>
          <option>Maternal &amp; Obstetric Care</option>
          <option>Diagnostic Imaging</option>
          <option>Emergency Care</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your condition or inquiry..."
          className="w-full bg-navy-800 border border-white/10 focus:border-blue-500/60 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send size={16} />
            Send Appointment Request
          </>
        )}
      </button>
    </form>
  );
}
