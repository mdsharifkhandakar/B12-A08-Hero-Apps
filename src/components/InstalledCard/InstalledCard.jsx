import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { MdOutlineFileDownload } from 'react-icons/md';

const InstalledCard = ({ app, handleUninstallData }) => {
  const { image, title, size, ratingAvg, downloads } = app;
  return (
    <div className="rounded-lg bg-white shadow flex flex-col sm:flex-row justify-between items-center p-4 gap-4">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div>
          <img className="w-16 rounded-xl" src={image} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="font-semibold text-xl mb-3 text-black">{title}</h2>
          <div className="flex gap-4 items-center">
            <span className="flex text-[#00D390] font-medium">
              <MdOutlineFileDownload size={20} /> {downloads}
            </span>
            <span className="flex text-[#FF8811] font-medium">
              <IoIosStar size={20} />
              {ratingAvg}
            </span>
            <span className="font-medium text-[#627382]">{size}MB</span>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-auto flex justify-center sm:justify-end">
        <button
          onClick={() => handleUninstallData(app)}
          className="btn bg-[#00D390] text-white w-full sm:w-auto"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledCard;
