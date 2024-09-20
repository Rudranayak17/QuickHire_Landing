import React from "react";

const Services = () => {
  return (
    <section id="services" className="bg-white py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="service bg-gray-50 p-6 shadow-md rounded-md">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/1/JE/RO/JR/103139155/industrial-contract-labour-supplier-services.png"
            alt="Contract Labour Services"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Contract Labour Services</h3>
          <p className="text-gray-600">
            We provide labor contracting services as per industry standards. Our
            labor is well-versed in handling machines & equipment. We offer
            affordable contractor services to meet your needs.
          </p>
          <a href="https://en.wikipedia.org/wiki/Employment_contract" className="text-blue-600 hover:underline">
            Read more
          </a>
        </div>
        
        {/* Service 2 */}
        <div className="service bg-gray-50 p-6 shadow-md rounded-md">
          <img
            src="https://www.betterplace.co.in/blog/wp-content/uploads/2022/05/8-Hacks-to-Ease-The-Health-Insurance-Claim-Process-for-Employees.jpg"
            alt="Health Insurance"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Health Insurance</h3>
          <p className="text-gray-600">
            We provide comprehensive health insurance, covering sickness,
            maternity, disability, and job loss, for employees in the organized
            sector.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Employees%27_State_Insurance#:~:text=This%20fund%20is%20managed%20by,employees%20in%20the%20organised%20sector.S"
            className="text-blue-600 hover:underline"
          >
            Read more
          </a>
        </div>

        {/* Service 3 */}
        <div className="service bg-gray-50 p-6 shadow-md rounded-md">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*qwR8fw_l2fwlH8A2xUwauA.jpeg"
            alt="Labour Management Consulting"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Labour Management Consulting</h3>
          <p className="text-gray-600">
            Our consulting services optimize employee scheduling, labor tracking,
            and ensure compliance, so your business runs efficiently with the
            right workforce.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Management_consulting"
            className="text-blue-600 hover:underline"
          >
            Read more
          </a>
        </div>

        {/* Service 4 */}
        <div className="service bg-gray-50 p-6 shadow-md rounded-md">
          <img
            src="https://www.apptree.com/wp-content/uploads/2023/03/temporary-staffing-services-apptree-staffing-solutions-1024x683.jpg"
            alt="Temporary Staffing Solutions"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Temporary Staffing Solutions</h3>
          <p className="text-gray-600">
            We provide temporary staffing solutions to meet the labor demand for
            short-term projects while maintaining high-quality output.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Temporary_work"
            className="text-blue-600 hover:underline"
          >
            Read more
          </a>
        </div>

        {/* Service 5 */}
        <div className="service bg-gray-50 p-6 shadow-md rounded-md">
          <img
            src="https://www.shrofile.com/blog/wp-content/uploads/2021/05/payroll-services.jpg"
            alt="Payroll Outsourcing"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Payroll Outsourcing</h3>
          <p className="text-gray-600">
            Outsource payroll processing for greater efficiency, accuracy, and
            reduced costs. Let our experts manage your payroll to minimize errors.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Payroll"
            className="text-blue-600 hover:underline"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
