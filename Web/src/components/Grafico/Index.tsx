import { useState } from "react";
import Chart from "react-apexcharts";

interface GraficoProps {
  titulo: string;
  categories: Array<string>;
  dataNameOne: string;
  dataOne: Array<number>;
  dataNameTwo: string;
  dataTwo: Array<number>;
  dataNameThree: string;
  dataThree: Array<number>; // Adicionando um terceiro conjunto de dados para a linha
  pilha: boolean;
  grid: boolean;
  valores: boolean;
}

export function Grafico({
  categories,
  dataNameOne,
  dataOne,
  dataNameTwo,
  dataTwo,
  pilha,
  grid,
  valores,
  titulo,
}: GraficoProps) {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "stacked-bar",
        width: "100%",
        toolbar: {
          show: false,
        },
        stacked: pilha,
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
      },
      title: {
        text: titulo,
        align: "left",
        position: "top",
        margin: 0,
        offsetY: 30,
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          color: "#FFFFFF",
        },
      },
      xaxis: {
        categories: categories,
      },
      dataLabels: {
        enabled: false,
      },
      labels: {
        rotate: -45,
      },
      grid: {
        show: grid,
        borderColor: "#292c35", // Cor da borda da grade
        strokeDashArray: 6, // Tamanho do traço
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        fontSize: "14px",
        offsetX: 120,
        offsetY: -10,
        itemMargin: {
          horizontal: 5,
        },
        markers: {
          radius: 12, // Raio dos marcadores (ajuste conforme necessário)
        },
        text: {
          color: "#fff",
        },
      },
      colors: ["#4CAF50","#FF5733", "#FEB019"], // Adicionando uma nova cor para a linha
      yaxis: [
        {
          labels: {
            show: valores,
            color: "#FFFFF",
            formatter: function (value: number) {
              return "R$ " + value.toFixed(2);
            },
          },
        },
        {
          show: valores,
          opposite: true,
          labels: {
            formatter: function (value: number) {
              return "R$ " + value.toFixed(2);
            },
          },
        },
      ],
    },
    series: [
      {
        name: dataNameOne,
        data: dataOne,
        type: "bar",
      },
      {
        name: dataNameTwo,
        data: dataTwo,
        type: "bar",
      },
      {
        name: 'Orçamento',
        data: dataThree, // Adicionando os dados para a nova série (linha)
        type: "line", // Especificando o tipo de gráfico como linha
      },
    ],
  });

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="line"
      width="100%"
      height="100%"
    />
  );
}

export default Grafico;
