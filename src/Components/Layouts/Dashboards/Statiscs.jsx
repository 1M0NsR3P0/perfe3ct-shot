import React, { useState } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';


const myMarks = [
    {
        "sub": "total",
        "mark": 124000
    },
    {
        "sub": "students",
        "mark": 12151
    },
    {
        "sub": "courses",
        "mark": 2000
    },
    {
        "sub": "instructors",
        "mark": 125
    },
    

]


// console.log(Avg)

const Statiscs = () => {
    let count = 0;
    let i = 0;
    myMarks.map(avg => {
        count = count + parseFloat(avg.mark);
        i++;
        return (count,i)
    })
    
    let Avg = (count/i).toFixed(2);
    return (
        <div className='flex justify-center p-28 bg-slate-300 h-[600px] w-full'>
            <ResponsiveContainer>
            <ComposedChart
                height={450}
                width={900}
                data={myMarks}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="sub" scale="band" />
                <YAxis dataKey="mark" />
                <Tooltip />
                <Legend dataKey="mark" />
                <Area type="monotone" dataKey="mark" fill="gray" stroke="#8884d8" />
                <Bar dataKey="mark" barSize={40} fill="white" />
                <Line type="linear" dataKey={`Average: ${Avg}`} stroke="green" />
                <Line type="linear" dataKey={`TotalMarks : ${count}`} stroke="green" />
            </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statiscs;