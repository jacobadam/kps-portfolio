import React from "react";

export const Contact = () => {
  return (
    <section id="contact-form" className="bg-white flex-grow">
      <div className="py-12 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
          className="mb-4 text-4xl tracking-tight font-extrabold text-center"
          style={{ color: "#172754" }}
        >
          Contact Me
        </h2>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium"
              style={{ color: "#172754" }}
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-white border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              style={{ borderColor: "#172754", color: "#172754" }}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium"
              style={{ color: "#172754" }}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm bg-white rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500"
              style={{ borderColor: "#172754", color: "#172754" }}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium"
              style={{ color: "#172754" }}
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm bg-white rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500"
              style={{ borderColor: "#172754", color: "#172754" }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none"
            style={{ backgroundColor: "#172754", color: "white" }}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
