import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
}from 'recharts';

const SpendingAnalytics = () => {
    const data = [
        {month: 'Jan', spent: 1500},
        {month: 'Feb', spent: 2200},
        {month: 'Mar', spent:1800},
        {month: 'Apr', spent:2500},
        {month: 'May', spent: 2100},
        {month: 'Jun', spent: 3000}
    ];

    return(
        <div className='card shadow-sm mb-4'>
            <div className='card-header bg-primary text-white'>
                <h5 className='mb-0 text-center' >Spending Analytics</h5>
            </div>
            <div className='card-body'>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="33"></CartesianGrid>
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Bar dataKey="spent" fill='#38A742'></Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default SpendingAnalytics