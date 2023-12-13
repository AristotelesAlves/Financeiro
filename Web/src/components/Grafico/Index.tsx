  import React, { useState, useEffect } from "react";
  import Chart from "react-apexcharts";

  const Grafico = () => {
    const [chartData, setChartData] = useState({
      options: {
        chart: {
          id: "stacked-bar", 
          width: '100%',
        },
        xaxis: {
          categories: ["01/2023", "02/2024", "03/2024", "04/2024", "05/2024", "06/2024", "07/2024", "08/2024","09/2024","10/2024","11/2024","12/2024"],
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        colors: ['#FF5733', '#4CAF50'], // Cor para Despesas e Receitas, respectivamente
        yaxis: {
          labels: {
            formatter: function (value : number) {
              return 'R$ ' + value;
            }
          }
        },
      },
      series: [
        {
          name: "Receitas",
          data: [1000.00, 2000, 2500, 3000, 3500, 4000, 4500, 5000],
        },
        {
          name: "Despesas",
          data: [3000, 4000, 4500, 5000, 4900, 6000, 7000, 5000],
        },
        
      ],
    });

    return (
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              width="100%"
              height="100%"
            />
    );
  };

  export default Grafico;
