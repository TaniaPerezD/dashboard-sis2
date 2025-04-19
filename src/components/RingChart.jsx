import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const RingChart = ({ data }) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Colores de ejemplo

    return (
        <ResponsiveContainer width="100%" height={170}>
            <PieChart>
                <Pie
                    data={data}
                    innerRadius={40}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    cornerRadius={5} 
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default RingChart;