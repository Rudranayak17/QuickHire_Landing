import React from "react";

const Hero = () => (
  <section
    id="hero"
    className="py-20 px-4 text-center flex flex-col md:flex-row items-center justify-center"
  >
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-5xl font-bold mb-4">Welcome to Quickhire</h2>
      <h3 className="text-2xl text-gray-700 mb-4">
        Quality service from an experienced team you can trust
      </h3>
      <p className="text-lg text-gray-600 mb-8">
        We're here to provide our customers with the highest quality of service.
        With our dedication to customer satisfaction, you can rest assured that
        you will have a great experience.
      </p>
      <a
        href="#contact"
        className="bg-purple-700 text-white py-2 px-6 rounded hover:bg-purple-600"
      >
        Get Started
      </a>
      <div className="mt-4">
        <a
          href="tel:+919359841317"
          className="text-purple-700 font-bold text-lg"
        >
          +91-9359841317
        </a>
      </div>
    </div>
    <div className="md:w-1/2">
      <img
        src="https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg"
        alt="Startup"
        className="w-full rounded-md shadow-lg"
      />
    </div>
  </section>
);
export default Hero;
