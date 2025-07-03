"use client";

import React from "react";
import { Card } from "./ui/card";
import { ContactForm } from "./ContactForm";

const ContactUs = () => {
  return (
    <div
      className="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto"
      id="contact"
    >
      <h1 className="text-xl flex justify-start text-primary md:text-2xl font-bold mt-4 py-4">
        Contact Us
      </h1>
      <Card className="p-6 md:p-10 bg-muted/50 dark:bg-card grid grid-cols-1 md:grid-cols-2 ">
        <div className="h-full justify-center items-center md:pt-30">
          <h1 className="text-lg font-bold md:text-2xl text-primary text-center mb-2 tracking-wider px-10">
            Join the AI Revolution
          </h1>
          <p className="px-6 text-muted-foreground text-center">
            Secure your spots to gain unparalleled insights and connect with
            AI's leading minds
          </p>
        </div>
        <ContactForm />
      </Card>
    </div>
  );
};

export default ContactUs;
