import ContactForm from "@/components/contact/ContactForm";
import PageContainer from "@/components/layout/PageContainer";
import PageTitle from "@/components/layout/PageTitle";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <PageContainer>
      <PageTitle title="Contact" />
      <div className="max-w-[480px]">
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm leading-relaxed">
          Have a question, project idea, or just want to say hi? Fill out the
          form below or reach me directly on{" "}
          <Link
            href="https://x.com/Inyourdream0007"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors"
          >
            Twitter
          </Link>
          .
        </p>
        <ContactForm />
        <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 flex gap-6 text-sm">
          <Link
            href="https://github.com/Pankaj-suthar777"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://x.com/Inyourdream0007"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Twitter
          </Link>
          <Link
            href="https://www.linkedin.com/in/pankaj-suthar-550b0a2a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactPage;
