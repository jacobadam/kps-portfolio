"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "lhdMxDBMufUETZkc3"
      )
      .then(
        () => {
          console.log("Success!");
          setMessageSent(true);
          setTimeout(() => setMessageSent(false), 5000);
        },
        (error) => {
          console.log("Failed...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact-form" className="flex-grow">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-center gap-4">
            <h1 className="text-2xl font-bold text-portfolio sm:text-3xl text-center">
              Contact
            </h1>
          </div>
        </div>
      </header>

      <div className="bg-stone-100 text-center p-4 mx-auto max-w-screen-md mt-4 rounded-lg">
        <p className="text-md text-portfolio">
          If you’re ready to invest in high-quality content, get in touch! I’d
          love to discuss how I can contribute to the success of your business.
        </p>
      </div>

      {messageSent && (
        <p
          className="text-center text-portfolio text-xl font-bold"
          aria-live="polite"
        >
          Message sent!
        </p>
      )}
      <div className="py-12 lg:py-8 px-4 mx-auto max-w-screen-md">
        <form action="#" ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-portfolio"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-stone-100 border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 text-portfolio border-portfolio"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-portfolio"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block p-3 w-full text-sm bg-stone-100 rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 text-portfolio border-portfolio"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-portfolio"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm bg-stone-100 rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 text-portfolio border-portfolio"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-stone-100 bg-portfolio rounded-lg sm:w-fit focus:ring-4 focus:outline-none"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
