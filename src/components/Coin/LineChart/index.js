import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
// import CoinPage from '../../../pages/CoinPage'
import { convertNumbers } from '../../../functions/convertNumbers';

function LineChart({ chartData, priceType, multiAxis }) {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            }
        },
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            crypto1: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    callback: function (value, index, ticks) {
                        if (priceType == "total_volumes") {
                            return convertNumbers(value);
                        } else if (priceType == "market_caps") {
                            return "$" + convertNumbers(value);
                        } else {
                            return "$" + value.toLocaleString();
                        }
                    },
                },
            },
            crypto2: {
                type: 'linear',
                display: true,
                position: 'right',
                ticks: {
                    callback: function (value, index, ticks) {
                        if (priceType == "total_volumes") {
                            return convertNumbers(value);
                        } else if (priceType == "market_caps") {
                            return "$" + convertNumbers(value);
                        } else {
                            return "$" + value.toLocaleString();
                        }
                    },
                },
            },
        },
    };
    return (
        <Line data={chartData} options={options} />
    )
}

export default LineChart
