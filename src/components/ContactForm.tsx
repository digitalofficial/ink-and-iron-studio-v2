"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission — replace with Supabase / Resend integration
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("sent");

    setTimeout(() => {
      setStatus("idle");
      setFormState({ name: "", email: "", phone: "", service: "", message: "" });
    }, 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formState.name}
          onChange={handleChange}
          className="form-input font-body"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formState.email}
          onChange={handleChange}
          className="form-input font-body"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formState.phone}
          onChange={handleChange}
          className="form-input font-body"
        />
        <select
          name="service"
          required
          value={formState.service}
          onChange={handleChange}
          className="form-input font-body"
        >
          <option value="" disabled>
            Select a Service
          </option>
          <option value="custom-tattoo">Custom Tattoo</option>
          <option value="cover-up">Cover-Up</option>
          <option value="fine-line">Fine Line</option>
          <option value="traditional">Traditional / Neo-Trad</option>
          <option value="piercing">Piercing</option>
          <option value="touch-up">Touch-Up</option>
        </select>
      </div>

      <textarea
        name="message"
        placeholder="Tell us about your idea, placement, size, or any questions..."
        rows={5}
        required
        value={formState.message}
        onChange={handleChange}
        className="form-input font-body resize-none"
      />

      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="group relative bg-crimson hover:bg-crimson/90 text-cream font-body text-sm uppercase tracking-[0.15em] px-10 py-4 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-3"
      >
        {status === "idle" && (
          <>
            Send Message
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
        {status === "sending" && "Sending..."}
        {status === "sent" && "Message Sent"}
        {status === "error" && "Error — Try Again"}
      </button>
    </form>
  );
}
