import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import useApps from '../Hooks/Apps';
import SkeletonLoading from '../components/SkeletonLoading/SkeletonLoading';
import AppsCard from '../components/apscard/apscard';
import ErrorAppsNotFound from './ErrorAppsNotFound';

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter(app => app.title.toLowerCase().includes(term))
    : apps;

  const handleSearch = e => {
    const value = e.target.value;
    setSearch(value);
    setSearchLoading(true);

    setTimeout(() => {
      setSearchLoading(false);
    }, 300);
  };

  return (
    <div className="py-20 container mx-auto px-4 md:px-6 lg:px-8">
      <div className="text-center mb-6 pt-10">
        <h1 className="font-bold text-4xl text-[#001931]">
          Our All Applications
        </h1>
        <p className="text-[#627382] mt-3">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      /* Search bar */
      <div className="flex justify-between items-center my-8 flex-col md:flex-row gap-4">
        <h2 className="font-semibold text-2xl text-gray-700">
          ({searchedApps.length}) Apps Found
        </h2>
        <label className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded w-full sm:w-[400px] focus-within:border-brand-purple focus-within:ring-1 focus-within:ring-brand-purple transition-all">
          <img
            src="https://c.animaapp.com/mggrmrf05QUAL7/img/fi-54481.svg"
            alt=""
            className="w-5 h-5"
            aria-hidden="true"
          />
          <input
            type="search"
            id="search-apps"
            placeholder="Search Apps"
            className="flex-1 outline-none text-base text-gray-700 placeholder:text-gray-400 bg-transparent"
            aria-label="Search Applications"
            value={search}
            onChange={handleSearch}
          />
        </label>
      </div>
      /* Content section */
      <div>
        {loading || searchLoading ? (
          <SkeletonLoading count={30} />
        ) : searchedApps.length === 0 ? (
          <ErrorAppsNotFound />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchedApps.map(app => (
              <AppsCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
