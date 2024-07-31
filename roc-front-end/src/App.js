import React from "react";

import { Routes, Route, HashRouter } from "react-router-dom";

import ModelPage from "./pages/Model";
import FAQPage from "./pages/FAQ";
import StakingPage from "./pages/Staking";
import OraclesPage from "./pages/Oracles";
import PartnersPage from "./pages/Partners";
import DashboardPage from "./pages/Portfolio";
import AuctionPage from "./pages/Auction";
import MarketPlacePage from "./pages/MarketPlace";
import VerificationPage from "./pages/Verification";
import MarketPlaceDetailPage from "./pages/MarketPlaceDetail";
import HomeLayout from "components/HomeLayout";
import PrivacyPolicy from "pages/PrivacyPolicy";
import TermsOfService from "pages/TermsAndService";

import "wallet-connect-config";

const App = () => {
  return (
    <HashRouter>
      <HomeLayout>
        <Routes>
          <Route path="/" element={<MarketPlacePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/staking" element={<StakingPage />} />
          <Route path="/oracles" element={<OraclesPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/model" element={<ModelPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/auction" element={<AuctionPage />} />
          <Route path="/property/:id" element={<MarketPlaceDetailPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </HomeLayout>
    </HashRouter>
  );
};

export default App;
