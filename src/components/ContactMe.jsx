import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiHackerrank,
  SiCodechef,
  SiLeetcode,
  SiKaggle,
} from "react-icons/si";

export default function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "YOUR_SERVICE_ID",      // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",     // Replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "mailbhuviquick@gmail.com", // Optional if set in template
        },
        "YOUR_PUBLIC_KEY"       // Replace with your EmailJS public key (User ID)
      )
      .then(() => {
        setStatus("Thanks for reaching out! I will get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Oops! Something went wrong, please try again.");
      })
      .finally(() => setLoading(false));
  }

  return (
    <section
      id="contact"
      className="w-full bg-black text-white py-20 px-6 sm:px-12"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        Get in <span className="text-[#ff5f9e]">Touch</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 max-w-xl mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-4 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#ff5f9e]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-4 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#ff5f9e]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="p-4 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#ff5f9e]"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#ff5f9e] px-6 py-3 rounded-xl font-semibold hover:bg-[#e14f8f] transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && (
        <p className="mt-6 text-center text-[#ff5f9e] font-medium">{status}</p>
      )}

      {/* Social & Coding Profiles */}
      <div className="mt-12 flex justify-center gap-8 text-white text-3xl">
        <a
          href="https://github.com/bhuvi_d"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-[#ff5f9e] transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/bhuvi_d"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#ff5f9e] transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/bhuvi_d"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-[#ff5f9e] transition"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:bhuvi@example.com"
          aria-label="Email"
          className="hover:text-[#ff5f9e] transition cursor-pointer"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="mt-8 flex justify-center gap-8 text-white text-3xl">
        <a
          href="https://www.hackerrank.com/bhuvi_d"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="HackerRank"
          className="hover:text-[#ff5f9e] transition"
        >
          <SiHackerrank />
        </a>
        <a
          href="https://www.codechef.com/users/bhuvi_d"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="CodeChef"
          className="hover:text-[#ff5f9e] transition"
        >
          <SiCodechef />
        </a>
        <a
          href="https://leetcode.com/bhuvi_d"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
          className="hover:text-[#ff5f9e] transition"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://www.kaggle.com/bhuvi_d"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kaggle"
          className="hover:text-[#ff5f9e] transition"
        >
          <SiKaggle />
        </a>
      </div>
    </section>
  );
}
