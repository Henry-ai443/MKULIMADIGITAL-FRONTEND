import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

const OrderCategories = () => {
    const data = [
        {name: 'Fruits', value: 35},
        {name: 'Vegetables', value: 25},
        {name: 'Grains', value: 20},
        {name: 'Dairy', value: 10},
        {name: 'Other', value: 10},
    ];

    const COLORS = ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#6c757d'];

    return(
        <div className="card shadow-sm mb-4">
            <div className="card-header bg-success text-white">
                <h5 className="mb-0 text-center">Order Categories</h5>
            </div>
            <div className="card-body" style={{height: '300px'}}>
                <ResponsiveContainer width='100%' height="100%">
                    <PieChart>
                        <Pie data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={90}
                        dataKey="value"
                        label
                        >
                        {data.map((entry, index) => (
                            <Cell/>
                        ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
export default OrderCategories