import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { Outlet, useNavigation } from 'react-router-dom';
import ScrollToTop from '../components/scrolltop/scrolltotop';
import MinDelayLoader from '../components/LoadingSpinner/MinDelayLoader';

const RootLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <MinDelayLoader loading={true} minMs={2000} />;
  }
  return (
    <div className="flex flex-col min-h-screen ">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 bg-[#f5f5f5]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
