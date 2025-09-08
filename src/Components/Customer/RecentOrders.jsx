import React from "react";

const RecentOrders = () => {
    const orders = [
        {id:'#1001', product:'Maize (50kg) ', date:'2025-08-28', amount:'KES 3, 000',status:"Completed"},
        {id:'#1002', product:'Tomatoes(crate)', date:'2025-08-29', amount:'KES 1,200', status:'Pending'},
        {id:'#1003',product:'Milk (20l)', date:'2025-08-30', amount:'KES 800', status:'Cancelled'},
        {id:'#1004', product:'Wheat (90kg)', date:'2025-08-31', amount:'KES 4,500', status:'Completed'}
    ]
    const statusColor = {
        Completed:'success',
        Pending:'warning',
        Cancelled:'danger',
    };

    return(
        <div className="card shadow-sm mt-4">
            <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Recent Orders</h5>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Order ID</th>
                                    <th>Product</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, i) => (
                                    <tr key={i}>
                                        <td>{order.id}</td>
                                        <td>{order.product}</td>
                                        <td>{order.date}</td>
                                        <td>{order.amount}</td>
                                        <td>
                                            <span className={`badge bg-${statusColor[order.status]}`}>{order.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecentOrders