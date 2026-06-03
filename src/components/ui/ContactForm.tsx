"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const inputCls = "w-full bg-slate-50 border border-slate-200 focus:border-brand-red focus:bg-white rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm outline-none transition-colors";

  if (sent) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-brand-red-light border-2 border-brand-red/30 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={30} className="text-brand-red" />
        </div>
        <h3 className="text-xl font-black text-slate-900 mb-2">Message Received!</h3>
        <p className="text-slate-500 text-sm">Thank you, {form.name}. Our team will reach you at <strong>{form.phone || form.email}</strong> shortly.</p>
        <button
          onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", service: "", message: "" }); }}
          className="mt-6 px-6 py-2.5 border-2 border-brand-red text-brand-red rounded-xl text-sm font-bold hover:bg-brand-red hover:text-white transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Full Name *</label>
          <input name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Phone *</label>
          <input name="phone" required value={form.phone} onChange={handleChange} placeholder="09xx xxx xxx" className={inputCls} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls} />
      </div>
      <div>
        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Service Needed</label>
        <select name="service" value={form.service} onChange={handleChange} className={inputCls}>
          <option value="">Select a service...</option>
          <option>General Surgery — Baqaqsanii Yaaluu</option>
          <option>Pediatric Care — Daa&apos;imman Yaaluu</option>
          <option>Maternal Care — Haadha Yaaluu</option>
          <option>Diagnostic Imaging — Sakatta&apos;a Fayyaa</option>
          <option>Emergency Care — Hatattamaa</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Message</label>
        <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Describe your condition or inquiry..." className={`${inputCls} resize-none`} />
      </div>
      <button
        type="submit" disabled={loading}
        className="btn-primary w-full justify-center"
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <><Send size={15} /> Send Request</>
        )}
      </button>
    </form>
  );
}
