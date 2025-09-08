import React from "react";

const QuickStats = () => {
    const stats = [
        {label : "Total Orders", value: 12, color: "primary"},
        {label: "Pending Deliveries", value: 2, color: 'warning'},
        {label: "Saved Items", value: 5, color: 'danger'},
        {label: "Wallet Balance", value: "KES 2, 500", color: 'success'}
    ];
    return(
        <div className="row">
            {stats.map((item, i) => (
                <div key={i} className="col-md-3 col-6 mb-3">
                    <div className={`card text-white bg-${item.color} h-100`}>
                        <div className="card-body text-center">
                            <h5 className="card-title">{item.label}</h5>
                            <h4 className="card-text">{item.value}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default QuickStats;