import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const message =
    error?.message || error?.statusText || "Something went wrong!";

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 space-y-6">
      {/* 404 Illustration */}
      <div className="relative w-full max-w-[500px] aspect-square">
        <img
          src="https://c.animaapp.com/mggspvkjeGR8JD/img/objects.png"
          alt="404 error illustration with laptop and decorative elements"
          className="absolute w-[92.14%] h-[79.01%] top-[11.07%] left-[4.34%] object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center gap-2 w-full">
        <h1 className="text-primary-dark text-3xl md:text-5xl font-semibold text-center leading-tight md:leading-[60px] tracking-tight max-w-[770px]">
          Oops, page not found!
        </h1>
        <p className="text-text-secondary text-lg md:text-xl text-center leading-8">
          The page you are looking for is not available.
        </p>
        <p className="text-text-secondary text-base">{message}</p>
      </div>

      {/* CTA Button */}
      <Link
        to="/"
        className="gradient-bg flex items-center justify-center gap-2.5 px-4 py-3 rounded min-w-[150px] min-h-[48px] transition-opacity hover:opacity-90 focus:outline-2 focus:outline-blue-500 mt-4"
      >
        <span className="text-white text-base font-semibold">Go Back!</span>
      </Link>
    </div>
  );
};

export default ErrorPage;
