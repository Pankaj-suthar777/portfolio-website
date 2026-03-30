"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence } from "motion/react";
import ToastMessage from "@/components/ui/ToastMessage";

const inputClass =
  "w-full px-3 py-2 text-sm border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-white transition-colors";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [show, setShow] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
          (result) => {
            console.log(result.text);
            showToast("Message sent!");
            form.current?.reset();
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
          }
        );
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setShow(true);
    setTimeout(() => {
      setShow(false);
      setToastMessage("");
    }, 4000);
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
          Name
        </label>
        <input type="text" id="name" name="user_name" className={inputClass} placeholder="Your name" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
          Email
        </label>
        <input type="email" id="email" name="user_email" className={inputClass} placeholder="your@email.com" required />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
          Message
        </label>
        <textarea id="message" name="message" className={inputClass} placeholder="What's on your mind?" rows={5} required />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-5 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded hover:opacity-70 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send message"}
      </button>

      <AnimatePresence>
        {show && <ToastMessage message={toastMessage} />}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;
