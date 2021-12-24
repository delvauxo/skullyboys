const LABELS = ["Data1", "Data2", "Data3", "Data4", "Data5"];
const VALUES = [117, 275, 198, 300, 450];
const DATA_COUNT = VALUES.length;
const NUMBER_CFG = {
  count: DATA_COUNT,
  values: VALUES,
  decimals: 2,
  percent: true,
};

const data = {
  labels: LABELS,
  datasets: [
    {
      label: "Dataset 1",
      data: Samples.utils.numbers(NUMBER_CFG),
      backgroundColor: [
        Samples.utils.transparentize(23, 0, 19, 1),
        Samples.utils.transparentize(43, 0, 34, 1),
        Samples.utils.transparentize(128, 0, 102, 1),
        Samples.utils.transparentize(213, 0, 170, 1),
        Samples.utils.transparentize(255, 0, 204, 1),
      ],
      borderColor: "rgba(0, 0, 0, .5)",
    },
  ],
};

// Tooltip display percentage.
const footer = (tooltipItems) => {
  let value = 0;
  tooltipItems.forEach(function (tooltipItem) {
    value = tooltipItem.parsed;
  });
  return "Percent: " + value + "%";
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        text: "Chart.js Doughnut Chart",
      },
      // Tooltip display percentage function call.
      tooltip: {
        callbacks: {
          footer: footer,
        },
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
