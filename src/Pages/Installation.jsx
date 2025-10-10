import React, { useState } from "react";
import { loadInstalledData, removeInstalledData } from "../Utils/LocalStorege";
import InstalledCard from "../components/installedcard/installedcard";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState(() => loadInstalledData());
  const [sortOrder, setSortOrder] = useState("none");

  const sortItem = (() => {
    if (sortOrder === "asc") {
      return [...installedApps.sort((a, b) => a.size - b.size)];
    }
    if (sortOrder === "desc") {
      return [...installedApps.sort((a, b) => b.size - a.size)];
    }
    return installedApps;
  })();

  const handleUninstallData = (app) => {
    toast.success(`🗑️ ${app.title} Uninstalled Successfully`);

    // Delay state update to allow toast to render
    setTimeout(() => {
      removeInstalledData(app.id);
      setInstalledApps((prev) => prev.filter((a) => a.id !== app.id));
    }, 50);
  };

  return (
    <div className="py-20 container mx-auto px-4 md:6 lg:8">
      {installedApps.length === 0 ? (
        <p className="font-semibold text-xl text-gray-400 flex justify-center py-6">
          No apps installed yet.
        </p>
      ) : (
        <>
          <div className="text-center mb-6 pt-10">
            <h1 className="font-bold text-4xl text-[#001931]">
              Your Installed Apps
            </h1>
            <p className="text-[#627382] mt-3">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="flex justify-between items-center my-8">
            <h2 className="font-semibold text-2xl">
              {installedApps.length} Apps Founds
            </h2>
            <label className="form-control max-w-xs">
              <select
                className="select select-bordered"
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value)}
              >
                <option disabled value="none">
                  Sort by size
                </option>
                <option value="asc">Low-&gt;High</option>
                <option value="desc">High-&gt;Low</option>
              </select>
            </label>
          </div>
          <div className="space-y-3">
            {sortItem.map(app => (
              <InstalledCard
                key={app.id}
                app={app}
                handleUninstallData={handleUninstallData}
              />
            ))}
          </div>
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
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

export default Installation;
