"use client";
import React, { useRef, useState } from "react";
import Button from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { AnimatePresence } from "motion/react";
import ToastMessage from "@/components/ui/ToastMessage";

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
          "service_9p8dopp",
          "template_ovuuswk",
          form.current,
          "0oRK_lOeJo5UekD0c"
        )
        .then(
          (result) => {
            console.log(result.text);
            showToast("Message sent successfully!");
            form.current?.reset();
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
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
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="user_name"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your Name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your Email"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your Message"
          rows={4}
          required
        ></textarea>
      </div>

      <Button loading={loading} type={"submit"}>
        {loading ? "Sending..." : "Send"}
      </Button>
      <AnimatePresence>
        {show && <ToastMessage message={toastMessage} />}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;
