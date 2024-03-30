<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col space-y-5 bg-white px-5 py-7">
    <div class="flex justify-between items-center">
      <h1 class="font-medium text-text-primary">Daily Active Participants</h1>
      <img src="/more.svg" alt="more icon" class="cursor-pointer" />
    </div>
    <canvas ref="barChart" width="800" height="400" responsive></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
import { format, subDays } from "date-fns";

Chart.register(...registerables);

export default {
  mounted() {
    const ctx = this.$refs.barChart.getContext("2d");
    // console.log(ctx); // Check if ctx is defined
    const labels = Array.from({ length: 7 }, (_, i) =>
      format(subDays(new Date(), i), "dd MMMM yyyy")
    );
    const plugin = {
      id: "customCanvasBackgroundColor",
      beforeDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = options.color || "#99ffff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Sales Data",
          data: [1000, 2000, 500, 200, 300, 300, 900],
          type: "bar", // Bar chart type
          backgroundColor: "#0BA7E3",
          borderColor: "#0BA7E3",
          borderWidth: 2,
          borderRadius: Number.MAX_VALUE,
          barThickness: 10,
        },
        {
          label: "Line Data",
          data: [1100, 1500, 250, 100, 150, 150, 450],
          type: "line", // Line chart type
          fill: false,
          borderColor: "#0BA7E3",
          borderWidth: 2,
          pointRadius: 0,
          borderDash: [5, 5],
          cubicInterpolationMode: "monotone",
          tension: 0.4,
        },
        {
          label: "Half Sales Data 1",
          data: [500, 1000, 250, 100, 150, 150, 450],
          type: "bar",
          backgroundColor: "#7CD8FD",
          borderColor: "#7CD8FD",
          borderWidth: 2,
          borderRadius: Number.MAX_VALUE,
          barThickness: 10,
        },
        {
          label: "Half Sales Data 2",
          data: [250, 500, 125, 50, 75, 75, 225],
          type: "bar",
          backgroundColor: "#E0F3FE",
          borderColor: "#E0F3FE",
          borderWidth: 2,
          borderRadius: Number.MAX_VALUE,
          barThickness: 10,
        },
      ],
    };
    new Chart(ctx, {
      type: "bar", // Set the default type as bar
      data: data,
      options: {
        barShowStroke: false,
        scales: {
          x: {
            gridLines: {
              drawBorder: false,
            },
          },
          y: {
            gridLines: {
              drawBorder: false,
            },
          },
        },
        plugins: {
          customCanvasBackgroundColor: {
            color: "white",
          },
        },
      },
      plugins: [plugin],
    });
  },
};
</script>
