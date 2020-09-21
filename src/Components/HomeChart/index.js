import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const options = {
  scales: {
      xAxes: [{
          gridLines: {
              display:false
          },
          ticks: {
            display: false
          }
      }],
      yAxes: [{
          gridLines: {
              display:false
          },
          ticks: {
            display: false
          }  
      }]
  }
};

const legend = {
  display: false
};

const data = (canvas) => {
  const ctx = canvas.getContext("2d")
  const gradient = ctx.createLinearGradient(0,0,100,0);
  
  return {
    backgroundColor: gradient,
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      }
    ]
  }
}

// const data = {
// };

class HomeChart extends Component {
  state = {  }
  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line data={data} options={options} legend={legend}/>
      </div>
    );
  }
}
 
export default HomeChart;