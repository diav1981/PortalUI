<script>
function getChartColorsArray(colors) {
  colors = JSON.parse(colors);
  return colors.map(function (value) {
    var newValue = value.replace(" ", "");
    if (newValue.indexOf(",") === -1) {
      var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
      if (color) {
        color = color.replace(" ", "");
        return color;
      } else return newValue;
    } else {
      var val = value.split(',');
      if (val.length == 2) {
        var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
        rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
        return rgbaColor;
      } else {
        return newValue;
      }
    }
  });
}
export default {
  data() {
    return {
      series: [125, 42, 58, 89],
      chartOptions: {
        labels: ["Completed", "In Progress", "Yet to Start", "Cancelled"],
        chart: {
          type: "donut",
          height: 230,
        },
        plotOptions: {
          pie: {
            size: 100,
            offsetX: 0,
            offsetY: 0,
            donut: {
              size: "90%",
              labels: {
                show: false,
              },
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        stroke: {
          lineCap: "round",
          width: 0,
        },
        colors: getChartColorsArray('["--vz-success", "--vz-primary", "--vz-warning", "--vz-secondary"]'),
      },
    };
  },
};
</script>

<template>
  <b-card no-body class="b-card card-height-100">
    <b-card-header class="align-items-center d-flex">
      <b-card-title class="mb-0 flex-grow-1">Projects Status</b-card-title>
      <div class="flex-shrink-0">
        <div class="dropdown card-header-dropdown">
          <b-link class="dropdown-btn text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            All Time <i class="mdi mdi-chevron-down ms-1"></i>
          </b-link>
          <div class="dropdown-menu dropdown-menu-end">
            <b-link class="dropdown-item" href="#">All Time</b-link>
            <b-link class="dropdown-item" href="#">Last 7 Days</b-link>
            <b-link class="dropdown-item" href="#">Last 30 Days</b-link>
            <b-link class="dropdown-item" href="#">Last 90 Days</b-link>
          </div>
        </div>
      </div>
    </b-card-header>

    <b-card-body>
      <apexchart class="apex-charts" dir="ltr" height="230" :series="series" :options="chartOptions"></apexchart>
      <div class="mt-3">
        <div class="d-flex justify-content-center align-items-center mb-4">
          <h2 class="me-3 ff-secondary mb-0">258</h2>
          <div>
            <p class="text-muted mb-0">Total Projects</p>
            <p class="text-success fw-medium mb-0">
              <b-badge variant="soft-success" pill class="badge-soft-success p-1"><i class="ri-arrow-right-up-line"></i></b-badge>
              +3 New
            </p>
          </div>
        </div>

        <div class="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
          <p class="fw-medium mb-0">
            <i class="ri-checkbox-blank-circle-fill text-success align-middle me-2"></i>
            Completed
          </p>
          <div>
            <span class="text-muted pe-5">125 Projects</span>
            <span class="text-success fw-medium fs-12">15870hrs</span>
          </div>
        </div>
        <div class="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
          <p class="fw-medium mb-0">
            <i class="ri-checkbox-blank-circle-fill text-primary align-middle me-2"></i>
            In Progress
          </p>
          <div>
            <span class="text-muted pe-5">42 Projects</span>
            <span class="text-success fw-medium fs-12">243hrs</span>
          </div>
        </div>
        <div class="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
          <p class="fw-medium mb-0">
            <i class="ri-checkbox-blank-circle-fill text-warning align-middle me-2"></i>
            Yet to Start
          </p>
          <div>
            <span class="text-muted pe-5">58 Projects</span>
            <span class="text-success fw-medium fs-12">~2050hrs</span>
          </div>
        </div>
        <div class="d-flex justify-content-between py-2">
          <p class="fw-medium mb-0">
            <i class="ri-checkbox-blank-circle-fill text-secondary align-middle me-2"></i>
            Cancelled
          </p>
          <div>
            <span class="text-muted pe-5">89 Projects</span>
            <span class="text-success fw-medium fs-12">~900hrs</span>
          </div>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>