import React from "react";

const MarketPricing = () => {
    return(
        <div id="market-pricing" className="mb-5">
            <h4 className="mb-3">Market Pricing Analytics</h4>
            {/* Mock Tables for prices */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Crop</th>
                        <th>Current Price (Ksh / kg)</th>
                        <th>Price Change (7d)</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Maize</td>
                        <td>100</td>
                        <td className="text-success">+5%</td>
                    </tr>

                    <tr>
                        <td>Wheat</td>
                        <td>120</td>
                        <td className="text-success">-2%</td>
                    </tr>

                     <tr>
                        <td>Sorghum</td>
                        <td>80</td>
                        <td className="text-success">-2%</td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-4" style={{
                height:'250px',
                backgroundColor: '#f8f9fa',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <em>Chart Placeholder</em>
            </div>
        </div>
    );
}
export default MarketPricing