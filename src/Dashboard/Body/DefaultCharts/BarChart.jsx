import {Bar} from "react-chartjs-2"
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);

export const BarChart = ({ data, options }) => {
    return <Bar data={data} options={options} />;
  };
  