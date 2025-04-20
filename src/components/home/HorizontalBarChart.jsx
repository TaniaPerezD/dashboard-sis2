import React from 'react';
import { BarChart, Bar, XAxis, YAxis, LabelList, ResponsiveContainer } from 'recharts';
import styles from './HorizontalBarChart.module.css';

const HorizontalBarChart = ({ chartData }) => {
    const { title, data } = chartData;
    
    return (
        <div className={styles.chartContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.chartWrapper}>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{ top: 8, right: 16, left: 75, bottom: 32 }}
                        barGap={8}
                    >
                        <XAxis
                            type="number"
                            tick={{ fill: 'var(--BlueTeal-Dark)', fontSize: 12, fontFamily: 'Roboto', fontWeight: 300 }}
                            axisLine={true}
                            tickLine={true}
                        />
                        <YAxis
                            type="category"
                            dataKey="name"
                            tick={{ fill: 'var(--BluePurple--Dark-)', fontSize: 12, fontFamily: 'Roboto', fontWeight: 300 }}
                            axisLine={true}
                            tickLine={true}
                            width={100}
                        />
                        <Bar
                            dataKey="value"
                            fill="var(--RedCarmen-dark)"
                            radius={2}
                            barSize={24}
                        >
                            <LabelList
                                dataKey="value"
                                position="right"
                                fill="var(--BluePurple--Dark-)"
                                fontSize={10}
                                fontFamily="Roboto"
                                fontWeight={300}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}; 

export default HorizontalBarChart;