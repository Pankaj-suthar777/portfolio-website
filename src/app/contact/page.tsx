import ContactForm from "@/components/ContactForm";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import React from "react";

const ContactPage = () => {
  return (
    <PageContainer>
      <PageTitle title="Contact" />
      <div className="max-w-[600px] mx-auto">
        <ContactForm />
      </div>
    </PageContainer>
  );
};

export default ContactPage;
