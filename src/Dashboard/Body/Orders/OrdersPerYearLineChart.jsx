import LineChart from '../DefaultCharts/LineChart.jsx';

const OrdersPerYearLineChart = () => {
    const data = {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [
        {
            label: 'Total number of orders',
            data: [100000, 167000, 150000, 120000, 200000],
            pointRadius:5,
            pointHoverRadius:9,
            pointBackgroundColor:["#61DEF5","#67F0AE","#65A8E5","#87FAEB","#596DD2"],
            borderColor:"gray",
        },
        ],
    };

    const options = {
        responsive: true,
        scales:{
            y:{
                title:{
                    display:true,
                    text:"No. of orders"
                }
            },
            x:{
                title:{
                    display:true,
                    text:"Year"
                }
            }
        },
        legend: {
            display: true,
            position: 'top',
            },
        };

    return (
    <div className="OrdersPerYearLineChart">
        <LineChart data={data} options={options} />
    </div>
    );
};

export default OrdersPerYearLineChart;
