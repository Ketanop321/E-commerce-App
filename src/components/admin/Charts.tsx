import React, { useRef, useEffect } from "react";
import * as Chart from "chart.js";

// Register Chart.js components including controllers
Chart.Chart.register(
  Chart.CategoryScale,
  Chart.LinearScale,
  Chart.BarElement,
  Chart.BarController,
  Chart.DoughnutController,
  Chart.PieController,
  Chart.LineController,
  Chart.Title,
  Chart.Tooltip,
  Chart.Legend,
  Chart.ArcElement,
  Chart.PointElement,
  Chart.LineElement,
  Chart.Filler
);

const months = ["January", "February", "March", "April", "May", "June", "July"];

interface BarChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}

export const BarChart = ({
  data_1 = [],
  data_2 = [],
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  horizontal = false,
  labels = months,
}: BarChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart.Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Destroy existing chart
    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    chartRef.current = new Chart.Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: title_1,
            data: data_1,
            backgroundColor: bgColor_1,
            barThickness: "flex",
            barPercentage: 1,
            categoryPercentage: 0.4,
          },
          {
            label: title_2,
            data: data_2,
            backgroundColor: bgColor_2,
            barThickness: "flex",
            barPercentage: 1,
            categoryPercentage: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        indexAxis: horizontal ? "y" : "x",
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [data_1, data_2, title_1, title_2, bgColor_1, bgColor_2, horizontal, labels]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: horizontal ? "200%" : "100%" }}
    />
  );
};

interface DoughnutChartProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
}

export const DoughnutChart = ({
  labels,
  data,
  backgroundColor,
  cutout,
  legends = true,
  offset,
}: DoughnutChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart.Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    chartRef.current = new Chart.Chart(ctx, {
      type: "doughnut",
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor,
            borderWidth: 0,
            offset,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: legends,
            position: "bottom",
            labels: {
              padding: 40,
            },
          },
        },
        cutout,
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [labels, data, backgroundColor, cutout, legends, offset]);

  return <canvas ref={canvasRef} />;
};

interface PieChartProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];
  offset?: number[];
}

export const PieChart = ({
  labels,
  data,
  backgroundColor,
  offset,
}: PieChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart.Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    chartRef.current = new Chart.Chart(ctx, {
      type: "pie",
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor,
            borderWidth: 1,
            offset,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [labels, data, backgroundColor, offset]);

  return <canvas ref={canvasRef} />;
};

interface LineChartProps {
  data: number[];
  label: string;
  backgroundColor: string;
  borderColor: string;
  labels?: string[];
}

export const LineChart = ({
  data,
  label,
  backgroundColor,
  borderColor,
  labels = months,
}: LineChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart.Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    chartRef.current = new Chart.Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            fill: true,
            label,
            data,
            backgroundColor,
            borderColor,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [data, label, backgroundColor, borderColor, labels]);

  return <canvas ref={canvasRef} />;
};

// Demo component to show the charts in action
const ChartDemo = () => {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold mb-6">Chart Components Demo</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Bar Chart</h3>
          <BarChart
            data_1={[65, 59, 80, 81, 56, 55, 40]}
            data_2={[28, 48, 40, 19, 86, 27, 90]}
            title_1="Dataset 1"
            title_2="Dataset 2"
            bgColor_1="rgba(54, 162, 235, 0.8)"
            bgColor_2="rgba(255, 99, 132, 0.8)"
          />
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Doughnut Chart</h3>
          <DoughnutChart
            labels={["Red", "Blue", "Yellow", "Green"]}
            data={[12, 19, 3, 5]}
            backgroundColor={["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]}
            cutout="50%"
          />
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Pie Chart</h3>
          <PieChart
            labels={["Red", "Blue", "Yellow", "Green"]}
            data={[12, 19, 3, 5]}
            backgroundColor={["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]}
          />
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Line Chart</h3>
          <LineChart
            data={[65, 59, 80, 81, 56, 55, 40]}
            label="Monthly Sales"
            backgroundColor="rgba(54, 162, 235, 0.2)"
            borderColor="rgba(54, 162, 235, 1)"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartDemo;