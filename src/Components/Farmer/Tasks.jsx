import React from "react";
const Tasks = () => {
    return(
        <>
        <div id="alerts-tasks" className="mb-5">
            <h4 className="mb-3 fw-bold">Alerts & Tasks</h4>
            <ul className="list-group">
                <li className="list-group-item list-group-item-warning">Fertilizer delivery scheduled for tomorrow</li>
                <li className="list-group-item list-group-item-danger">Pest detected in maize field - immediate action required</li>
                <li className="list-group-item list-group-item-info">Monthly soil test due next week</li>
            </ul>
        </div>
        </>
    );
}
export default Tasks