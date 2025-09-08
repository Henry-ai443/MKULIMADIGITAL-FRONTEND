import React from "react";
import Overview from "./Overview";
import MarketPricing from "./MarketPricing";
import AiRecommendations from "./AiRecommendations";
import ChatBot from "./chatbot";
import Tasks from "./Tasks";
import Expert from "./Expert";
const FarmerDashboard = () => {
    return(
        <div className="d-flex" 
        style={{minHeight: '100vh'}}
        >
        {/* Sidebar content */}
            <nav className="bg-light border-end" style={{width: '250px'}}>
                <div className="p-3">
                    <h3 className="text-primary">Mkulima Digital</h3>
                    <ul className="nav flex-column mt-4">
                        <li className="nav-item mb-2 ">
                            <a href="#overview" className="nav-link text-dark fs-5">Overview</a>
                        </li>

                        <li className="nav-item mb-2 ">
                            <a href="#market-pricing" className="nav-link text-dark fs-5">Market Pricing</a>
                        </li>

                        <li className="nav-item mb-2 ">
                            <a href="#ai-recommendations" className="nav-link text-dark fs-5">AI Recommendations</a>
                        </li>

                        <li className="nav-item mb-2 ">
                            <a href="#chatbot" className="nav-link text-dark fs-5">Chatbot</a>
                        </li>

                        <li className="nav-item mb-2 ">
                            <a href="#alerts-tasks" className="nav-link text-dark fs-5">Alerts & Tasks</a>
                        </li>

                        <li className="nav-item mb-2 ">
                            <a href="#expert-support" className="nav-link text-dark fs-5">Expert Support</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="flex-grow-1 p-4 bg-white">
                <header className="mb-4 border-bottom pb-3">
                    <h2>Farmer Dashboard</h2>
                    <p className="text-secondary">Welcome, Farmer Henry Maina</p>
                </header>
                <Overview/>
                <MarketPricing/>
                <AiRecommendations/>
                <ChatBot/>
                <Tasks/>
                <Expert/>
            </div>
        </div>
    );
}

export default FarmerDashboard