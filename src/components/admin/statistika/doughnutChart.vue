<template>
  <canvas ref="doughnutChart"></canvas>
</template>

<script>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

export default {
  name: "DoughnutChartExample",
  setup() {
    const doughnutChart = ref(null);

    const chartData = [30, 50, 20, 40]; // Example data
    // const chartLabels = ["Label 1", "Label 2", "Label 3", "Label 4"]; // Example labels

    onMounted(() => {
      const ctx = doughnutChart.value.getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          // labels: chartLabels,
          datasets: [
            {
              data: chartData,
              backgroundColor: ["#0BA7E3", "#7CD8FD", "#6EBEEB", "#DFD6F9"],
            },
          ],
        },
      });
    });

    return {
      doughnutChart,
    };
  },
};
</script>
