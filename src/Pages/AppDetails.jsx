import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/Apps';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import ErrorAppsNotFound from './ErrorAppsNotFound';
import { MoonLoader } from 'react-spinners';

import dowicon from '../assets/icon-downloads.png';
import raticon from '../assets/icon-ratings.png';
import revicon from '../assets/icon-review.png';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar as RechartsBar,
} from 'recharts';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { loadInstalledData, updateInstalledData } from '../Utils/LocalStorege';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const [isInstalled, setIsInstalled] = useState(false);
  const [installing, setInstalling] = useState(false);

  const app = apps.find(a => String(a.id) === id);

  useEffect(() => {
    if (!app) return;
    const installedApps = loadInstalledData();
    const alreadyInstalled = installedApps.some(a => a.id === app.id);
    setIsInstalled(alreadyInstalled);
  }, [app]);

  const handleInstallBtn = appTitle => {
    setInstalling(true);
    updateInstalledData(app);
    setIsInstalled(true);
    toast.success(`✅ ${appTitle} Installed Successfully`);
    setTimeout(() => setInstalling(false), 3000);
  };

  if (loading) return <LoadingSpinner />;
  if (error || !app) return <ErrorAppsNotFound />;

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;

  return (
    <div className="max-w-[1600px] mx-auto px-4 lg:px-20 my-20 space-y-16 pt-10">
      {/* App Info Section */}
      <section className="flex flex-col lg:flex-row items-start gap-10">
        <img
          src={image}
          alt={title}
          className="w-full lg:w-[350px] h-auto object-cover rounded-lg shadow-md"
        />

        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#001931]">
            {title}
          </h1>
          <p className="text-[#627382]">
            Developed by{' '}
            <span className="font-semibold gradient-text">{companyName}</span>
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col items-center border-r border-dashed border-gray-300 pr-4">
              <img src={dowicon} alt="Downloads" className="w-10 h-10" />
              <span className="text-sm text-gray-600 mt-1">Downloads</span>
              <span className="text-2xl font-bold text-[#001931]">
                {downloads}
              </span>
            </div>
            <div className="flex flex-col items-center border-r border-dashed border-gray-300 pr-4">
              <img src={raticon} alt="Average rating" className="w-10 h-10" />
              <span className="text-sm text-gray-600 mt-1">Average Rating</span>
              <span className="text-2xl font-bold text-[#001931]">
                {ratingAvg}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img src={revicon} alt="Total review" className="w-10 h-10" />
              <span className="text-sm text-gray-600 mt-1">Total Reviews</span>
              <span className="text-2xl font-bold text-[#001931]">
                {reviews}
              </span>
            </div>
          </div>
          <button
            disabled={isInstalled || installing}
            onClick={() => handleInstallBtn(title)}
            className={`w-full md:w-1/5 mt-4 bg-[#00D390] text-white text-left  font-semibold text-lg p-4 py-3 pz-5 rounded-lg hover:opacity-90 transition-opacity disabled:bg-[#00d390b0] disabled:cursor-not-allowed flex items-center justify-center`}
          >
            {installing ? (
              <MoonLoader size={20} color="white" />
            ) : isInstalled ? (
              'Installed'
            ) : (
              `Install Now (${size}MB)`
            )}
          </button>
        </div>
      </section>

      {/* Ratings Section */}
      <section className="space-y-6">
        <h2 className=" text-2xl font-semibold text-[#001931]">Ratings</h2>
        <div className=" w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={ratings}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Legend />
              <RechartsBar dataKey="count" fill="#FF8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Description Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#001931]">Description</h2>
        <p className="text-[#627382] leading-7">{description}</p>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        Toast
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default AppDetails;
