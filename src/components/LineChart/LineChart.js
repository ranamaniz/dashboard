import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// <block:plugin:0>
// const getOrCreateLegendList = (chart, id) => {
//   const legendContainer = document.getElementById(id);
//   let listContainer = legendContainer.querySelector('ul');

//   if (!listContainer) {
//     listContainer = document.createElement('ul');
//     listContainer.style.display = 'flex';
//     listContainer.style.flexDirection = 'row';
//     listContainer.style.margin = 0;
//     listContainer.style.padding = 0;

//     legendContainer.appendChild(listContainer);
//   }

//   return listContainer;
// };

// const htmlLegendPlugin = {
//   id: 'htmlLegend',
//   afterUpdate(chart, args, options) {
//     const ul = getOrCreateLegendList(chart, options.containerID);

//     // Remove old legend items
//     while (ul.firstChild) {
//       ul.firstChild.remove();
//     }

//     // Reuse the built-in legendItems generator
//     const items = chart.options.plugins.legend.labels.generateLabels(chart);

//     items.forEach(item => {
//       const li = document.createElement('li');
//       li.style.alignItems = 'center';
//       li.style.cursor = 'pointer';
//       li.style.display = 'flex';
//       li.style.flexDirection = 'row';
//       li.style.marginLeft = '10px';

//       li.onclick = () => {
//         const { type } = chart.config;
//         if (type === 'pie' || type === 'doughnut') {
//           // Pie and doughnut charts only have a single dataset and visibility is per item
//           chart.toggleDataVisibility(item.index);
//         } else {
//           chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
//         }
//         chart.update();
//       };

//       // Color box
//       const boxSpan = document.createElement('span');
//       boxSpan.style.background = item.fillStyle;
//       boxSpan.style.borderColor = item.strokeStyle;
//       boxSpan.style.borderWidth = item.lineWidth + 'px';
//       boxSpan.style.display = 'inline-block';
//       boxSpan.style.height = '20px';
//       boxSpan.style.marginRight = '10px';
//       boxSpan.style.width = '20px';

//       // Text
//       const textContainer = document.createElement('p');
//       textContainer.style.color = item.fontColor;
//       textContainer.style.margin = 0;
//       textContainer.style.padding = 0;
//       textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

//       const text = document.createTextNode(item.text);
//       textContainer.appendChild(text);

//       li.appendChild(boxSpan);
//       li.appendChild(textContainer);
//       ul.appendChild(li);
//     });
//   }
// };
// // </block:plugin>

// // <block:data:1>
// const NUM_DATA = 7;
// const NUM_CFG = { count: NUM_DATA, min: 0, max: 100 };
// const data = {
//   labels: Utils.months({ count: NUM_DATA }),
//   datasets: [
//     {
//       label: 'Dataset: 1',
//       data: Utils.numbers(NUM_CFG),
//       borderColor: Utils.CHART_COLORS.red,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//       fill: false,
//     },
//     {
//       label: 'Dataset: 1',
//       data: Utils.numbers(NUM_CFG),
//       borderColor: Utils.CHART_COLORS.blue,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
//       fill: false,
//     },
//   ],
// };
// </block:data>

// // <block:setup:2>
// const config = {
//   type: 'line',
//   data: data,
//   options: {
//     plugins: {
//       htmlLegend: {
//         // ID of the container to put the legend in
//         containerID: 'legend-container',
//       },
//       legend: {
//         display: false,
//       }
//     }
//   },
//   plugins: [htmlLegendPlugin],
// };
// // </block:setup>

// module.exports = {
//   actions: [],
//   config: config,
// };

const LineChart = ({ chartDataOne, chartDataTwo, firstLabel, secondLabel, labels }) => {


  const chartData = {
    labels: labels,
    datasets: [
      {
        label: `${firstLabel}`,
        data: chartDataOne,
        borderColor: '#4285F4',
        backgroundColor: '#4285F4',
        // pointStyle: 'circle',

      },
      {
        label: `${secondLabel}`,
        data: chartDataTwo,
        borderColor: '#FF504D',
        backgroundColor: '#FF504D',
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxis: {
        // display: false,
        ticks: {
          display: true
        },
        grid: {
          display: false,
          drawTicks: false,
          // borderWidth: 0
        }
      },
      yAxis: {
        ticks: {
          display: true
        },
        grid: {
          // display: true,
          drawTicks: false,
          borderWidth: 0
        }

      }
    },
    plugins: {
      legend: {
        // onClick: (event, legentItem, legend) => {
        //   console.log("event, legentItem, legend", event, legentItem, legend)
        // },
        position: 'bottom',
        usePointStyle: true,
        labels: {
          pointStyle: 'circle',
          usePointStyle: true,
          color: '#3C3C3C',
          boxHeight: 4,
          boxWidth: 4,
          padding: 30,
          font: {
            size: 16,
            weight: '500',
            family: 'Roboto'
          },
          // padding: "1",
          // generateLabels: function (chart) {
          //   let data = chart.data;
          //   let chartMeta = chart.getDatasetMeta(0);
          //   console.log("chart data", data)
          //   console.log("chartMeta", chartMeta)
          // return {
          //   borderRadius: '10'
          // }
          // }
        }
      },
    },
  }

  return (
    <Line
      options={chartOptions}
      data={chartData}
      id="chartContainer"
    />
  )
}

export default LineChart;