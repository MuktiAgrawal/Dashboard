import { Line } from 'react-chartjs-2';
// import { CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
// ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend);
import React from 'react';
import {Chart as ChartJS} from "chart.js/auto"


const LineChart = ({ data, options }) => {
    return (
        <div className="LineChart">
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
