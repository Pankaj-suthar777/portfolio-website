import ContactForm from "@/components/contact/ContactForm";
import PageContainer from "@/components/layout/PageContainer";
import PageTitle from "@/components/layout/PageTitle";
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
