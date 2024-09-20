import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <p className="text-lg text-center max-w-4xl mx-auto">
        Need assistance? Get in touch with our team today. We're here to help
        you!
      </p>

      <form className="max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
