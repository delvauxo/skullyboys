const LABELS = ["Data1", "Data2", "Data3", "Data4", "Data5"];
const VALUES = [117, 275, 198, 300, 450];
const DATA_COUNT = VALUES.length;
const NUMBER_CFG = {
  count: DATA_COUNT,
  values: VALUES,
  decimals: 1,
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
        Samples.utils.transparentize(185, 0, 148, 1),
        Samples.utils.transparentize(255, 0, 204, 1),
      ],
      borderColor: "rgba(0, 0, 0, .5)",
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    responsive: true,
    plugins: {
      // Display legend at bottom of the chart.
      legend: {
        position: "bottom",
        reverse: true
      },
      // Tooltip display percentage function call.
      tooltip: {
        callbacks: {
          label: function(context) {
            var label = '';
            if (NUMBER_CFG.percent) {
              if (context.parsed !== null) {
                label += context.label + ' : ' + context.formattedValue + '%';
              }
            } else {
              label += context.label + ' : ' + context.formattedValue
            }
            return label;
          }
        }
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
