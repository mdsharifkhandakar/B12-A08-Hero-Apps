import React from 'react';
import { Link } from 'react-router-dom';

const ErrorAppsNotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-10 px-4 text-center">
      {/* 404 Illustration */}
      <div className="relative w-full flex justify-center">
        <img
          src="https://c.animaapp.com/mggsi6mwshA69k/img/objects.png"
          alt="404 error illustration with grumpy cat and laptop showing not found message"
          className="w-[220px] h-[220px] object-contain"
        />
      </div>

      {/* Error Message */}
      <div className="flex flex-col items-center gap-2 w-full">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#001931] leading-tight">
          OPPS!! APP NOT FOUND
        </h1>
        <p className="text-lg sm:text-xl text-[#627382] max-w-2xl leading-relaxed">
          The App you are requesting is not found on our system. Please try
          another apps
        </p>
      </div>

      {/* CTA Button */}
      <Link
        to="/"
        className="inline-flex items-center justify-center px-6 py-3 rounded gradient-bg text-white font-semibold text-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Go Back!
      </Link>
    </section>
  );
};

export default ErrorAppsNotFound;
