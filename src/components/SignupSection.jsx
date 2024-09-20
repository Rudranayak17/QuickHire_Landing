import React from 'react';

const SignupSection = () => {
  return (
    <section id="signup" className="text-center py-10">
      <h2 className="text-2xl font-bold mb-2">Login As</h2>
      <h3 className="text-lg mb-5">Please Select your category</h3>
      <div className="flex justify-center space-x-4 mb-5">
        <a 
          className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          href="http://127.0.0.1:5500/index2"
        >
          Contractor
        </a>
        <a 
          className="btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          href="http://127.0.0.1:5500/index3"
        >
          Workers
        </a>
      </div>
      <div className="mt-5">
        <p className="text-gray-500 text-3xl">More Feature coming soon!</p>
        <div className="mt-2">
          <span className="text-yellow-500 font-semibold">Stay tuned!</span>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
