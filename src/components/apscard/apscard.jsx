import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router-dom';

const AppsCard = ({ app }) => {
  const { image, title, ratingAvg, downloads, id } = app;

  return (
    <Link
      to={`/app/${id}`}
      className="flex flex-col items-center gap-4 p-4 bg-white rounded shadow-drop-shadow hover:shadow-lg transition-all duration-300"
    >
      {/* App Image */}
      <div className="w-full h-[316px] bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Title */}
      <h3 className="text-[#001931] font-medium text-xl text-center">
        {title}
      </h3>

      {/* Stats Section */}
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2.5 px-2.5 py-1.5 bg-[#f1f5e8] rounded">
          <FiDownload className="text-[#00d390]" />
          <span className="text-[#00d390] font-medium text-base">
            {downloads}
          </span>
        </div>

        <div className="flex items-center gap-2.5 px-2.5 py-1.5 bg-[#fff0e1] rounded">
          <IoIosStar className="text-[#ff8811]" />
          <span className="text-[#ff8811] font-medium text-base">
            {ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
