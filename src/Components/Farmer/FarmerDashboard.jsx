import React from "react";
import {
  FaTachometerAlt,
  FaChartLine,
  FaRobot,
  FaComments,
  FaTasks,
  FaUserTie,
  FaBars,
} from "react-icons/fa";

import Overview from "./Overview";
import MarketPricing from "./MarketPricing";
import AiRecommendations from "./AiRecommendations";
import ChatBot from "./chatbot";
import Tasks from "./Tasks";
import Expert from "./Expert";

const FarmerDashboard = () => {
  return (
    <div className="d-flex flex-column flex-md-row" style={{ minHeight: "100vh" }}>
      {/* Sidebar for large screens */}
      <nav className="bg-light border-end d-none d-md-block" style={{ width: "250px" }}>
        <div className="p-3">
          <h3 className="text-primary">Mkulima Digital</h3>
          <ul className="nav flex-column mt-4">
            <li className="nav-item mb-2">
              <a href="#overview" className="nav-link text-dark fs-5 d-flex align-items-center gap-2">
                <FaTachometerAlt /> Overview
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#market-pricing" className="nav-link text-dark fs-5 d-flex align-items-center gap-2">
                <FaChartLine /> Market Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#ai-recommendations" className="nav-link text-dark fs-5 d-flex align-items-center gap-2">
                <FaRobot /> AI Recommendations
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#chatbot" className="nav-link text-dark fs-5 d-flex align-items-center gap-2">
                <FaComments /> Chatbot
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#alerts-tasks" className="nav-link text-dark fs-5 d-flex align-items-center gap-2">
                <FaTasks /> Alerts & Tasks
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#expert-support" className="nav-link text-dark fs-5 d-flex align-items-center gap-2">
                <FaUserTie /> Expert Support
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Offcanvas Sidebar for small screens */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileSidebar"
        aria-labelledby="mobileSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-primary" id="mobileSidebarLabel">
            Mkulima Digital
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#overview" className="nav-link text-dark fs-5 d-flex align-items-center gap-2" data-bs-dismiss="offcanvas">
                <FaTachometerAlt /> Overview
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#market-pricing" className="nav-link text-dark fs-5 d-flex align-items-center gap-2" data-bs-dismiss="offcanvas">
                <FaChartLine /> Market Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#ai-recommendations" className="nav-link text-dark fs-5 d-flex align-items-center gap-2" data-bs-dismiss="offcanvas">
                <FaRobot /> AI Recommendations
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#chatbot" className="nav-link text-dark fs-5 d-flex align-items-center gap-2" data-bs-dismiss="offcanvas">
                <FaComments /> Chatbot
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#alerts-tasks" className="nav-link text-dark fs-5 d-flex align-items-center gap-2" data-bs-dismiss="offcanvas">
                <FaTasks /> Alerts & Tasks
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#expert-support" className="nav-link text-dark fs-5 d-flex align-items-center gap-2" data-bs-dismiss="offcanvas">
                <FaUserTie /> Expert Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 bg-white">
        <header className="mb-4 border-bottom pb-3 d-flex justify-content-between align-items-center">
          <div>
            <h2>Farmer Dashboard</h2>
            <p className="text-secondary">Welcome, Farmer Henry Maina</p>
          </div>

          {/* Mobile menu button */}
          <button
            className="btn btn-outline-primary d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
            aria-controls="mobileSidebar"
          >
            <FaBars size={20} />
          </button>
        </header>

        {/* Dashboard sections */}
        <Overview />
        <MarketPricing />
        <AiRecommendations />
        <ChatBot />
        <Tasks />
        <Expert />
      </div>
    </div>
  );
};

export default FarmerDashboard;
