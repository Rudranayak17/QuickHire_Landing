import React from "react";
import Logo from "../assets/quick.jpg.png";

const Features = () => {
  return (
    <section
      id="features"
      className="py-12 px-4 flex items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6 shadow-md rounded-md max-w-4xl">
        <img
          src={Logo}
          alt="Feature"
          className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-md mb-4 md:mb-0 mx-4"
        />
        <div className="text-center md:text-left ml-0 md:ml-6">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Feature</h3>
          <p className="text-gray-600 mb-4">Functions</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Direct end-to-end working</li>
            <li>Workforce planning</li>
            <li>Contractor and labor relationship management system</li>
            <li>Identify improvement opportunities</li>
            <li>
              Comprehensive performance control and improved customer satisfaction
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
