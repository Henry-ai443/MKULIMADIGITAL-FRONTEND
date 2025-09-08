import React from "react";

const Overview = () => {
    return(
        <div id="overview" className="mb-5">
            <h4 className="mb-3">Overview </h4>
            <div className="row g-3">
                <div className="col-md-3">
                    <div className="card text-white bg-success h-100">
                        <div className="card-body">
                            <h5 className="card-title">Total Farm Area</h5>
                            <p className="card-text display-6">15 acres</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-white bg-info h-100">
                        <div className="card-body">
                            <h5 className="card-title">Current Crop</h5>
                            <p className="card-text display-6">Maize</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <h5 className="card-title">Expected Yield</h5>
                            <p className="card-text display-6">12 tons</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-white bg-danger h-100">
                        <div className="card-body">
                            <h5 className="card-title">Pending Tasks</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Overview