<template>
  <div class="content-header">
    <div class="container-fluid">
      <h1 class="m-0">Knowledge Management COVID-19 Dashboard</h1>
    </div>
  </div>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- COVID-19 Chart Card -->
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">COVID-19 Cases, Deaths, and Recoveries Over Time</h3>
            </div>
            <div class="card-body">
              <canvas id="covidChart"></canvas>
            </div>
          </div>
        </div>

        <!-- COVID-19 Data Table Card -->
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Pertumbuhan COVID-19</h3>
            </div>
            <div class="card-body">
              <table id="covidDataTable" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>Kasus</th>
                    <th>%</th>
                    <th>Meninggal</th>
                    <th>%</th>
                    <th>Sembuh</th>
                    <th>%</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in Data14D" :key="index">
                    <td>{{ row.date }}</td>
                    <td>{{ row.cases }}</td>
                    <td>{{ row.casesGrowth }}%</td>
                    <td>{{ row.deaths }}</td>
                    <td>{{ row.deathsGrowth }}%</td>
                    <td>{{ row.recovered }}</td>
                    <td>{{ row.recoveredGrowth }}%</td>
                    <td>
                      <button @click="goToDetail(row.id)" class="btn btn-primary btn-sm">
                        Detail
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue';
import { Chart } from 'chart.js/auto';
import Papa from 'papaparse';
import { useRouter } from 'vue-router';

export default {
  name: 'CovidDashboard',
  setup() {
    const chartInstance = ref(null);
    const router = useRouter();

    const Data14D = [
  { id: '1-14', date: '2021-01-14', cases: 3937, casesGrowth: 0, deaths: 90, deathsGrowth: 0, recovered: 2372, recoveredGrowth: 0 },
  { id: '1-28', date: '2021-01-28', cases: 4748, casesGrowth: 20, deaths: 135, deathsGrowth: 50, recovered: 3670, recoveredGrowth: 54 },
  { id: '2-11', date: '2021-02-11', cases: 3694, casesGrowth: -22, deaths: 83, deathsGrowth: -38, recovered: 3697, recoveredGrowth: 0 },
  { id: '2-25', date: '2021-02-25', cases: 2717, casesGrowth: -26, deaths: 96, deathsGrowth: 15, recovered: 3160, recoveredGrowth: -14 },
  { id: '3-11', date: '2021-03-11', cases: 2385, casesGrowth: -12, deaths: 59, deathsGrowth: -38, recovered: 2916, recoveredGrowth: -7 },
  { id: '3-25', date: '2021-03-25', cases: 2676, casesGrowth: 12, deaths: 47, deathsGrowth: -20, recovered: 2353, recoveredGrowth: -19 },
  { id: '4-08', date: '2021-04-08', cases: 2691, casesGrowth: 0, deaths: 71, deathsGrowth: 51, recovered: 2863, recoveredGrowth: 21 },
  { id: '4-22', date: '2021-04-22', cases: 2843, casesGrowth: 5, deaths: 87, deathsGrowth: 22, recovered: 3218, recoveredGrowth: 12 },
  { id: '5-06', date: '2021-05-06', cases: 2755, casesGrowth: -3, deaths: 65, deathsGrowth: -25, recovered: 3784, recoveredGrowth: 17 },
  { id: '5-20', date: '2021-05-20', cases: 2192, casesGrowth: -20, deaths: 107, deathsGrowth: 64, recovered: 3114, recoveredGrowth: -17 },
  { id: '6-03', date: '2021-06-03', cases: 2646, casesGrowth: 20, deaths: 104, deathsGrowth: -2, recovered: 2570, recoveredGrowth: -17 },
  { id: '6-17', date: '2021-06-17', cases: 5307, casesGrowth: 100, deaths: 127, deathsGrowth: 22, recovered: 2949, recoveredGrowth: 14 },
  { id: '7-01', date: '2021-07-01', cases: 10609, casesGrowth: 99, deaths: 266, deathsGrowth: 109, recovered: 4055, recoveredGrowth: 37 },
  { id: '7-15', date: '2021-07-15', cases: 24427, casesGrowth: 130, deaths: 593, deathsGrowth: 122, recovered: 10444, recoveredGrowth: 157 },
  { id: '7-29', date: '2021-07-29', cases: 28597, casesGrowth: 17, deaths: 1044, deathsGrowth: 76, recovered: 15316, recoveredGrowth: 46 },
  { id: '8-12', date: '2021-08-12', cases: 20115, casesGrowth: -29, deaths: 870, deathsGrowth: -16, recovered: 27077, recoveredGrowth: 76 },
  { id: '8-26', date: '2021-08-26', cases: 13037, casesGrowth: -35, deaths: 605, deathsGrowth: -30, recovered: 26028, recoveredGrowth: -3 },
  { id: '9-09', date: '2021-09-09', cases: 4979, casesGrowth: -61, deaths: 316, deathsGrowth: -47, recovered: 13084, recoveredGrowth: -49 },
  { id: '9-23', date: '2021-09-23', cases: 1804, casesGrowth: -63, deaths: 135, deathsGrowth: -57, recovered: 6060, recoveredGrowth: -53 },
  { id: '10-07', date: '2021-10-07', cases: 861, casesGrowth: -52, deaths: 54, deathsGrowth: -60, recovered: 1992, recoveredGrowth: -67 },
  { id: '10-21', date: '2021-10-21', cases: 401, casesGrowth: -53, deaths: 23, deathsGrowth: -57, recovered: 975, recoveredGrowth: -51 },
  { id: '11-04', date: '2021-11-04', cases: 452, casesGrowth: 12, deaths: 15, deathsGrowth: -34, recovered: 438, recoveredGrowth: -55 },
  { id: '11-18', date: '2021-11-18', cases: 400, casesGrowth: -11, deaths: 12, deathsGrowth: -19, recovered: 415, recoveredGrowth: -5 },
  { id: '12-02', date: '2021-12-02', cases: 341, casesGrowth: -14, deaths: 0, deathsGrowth: -100, recovered: 270, recoveredGrowth: -34 },
  { id: '12-16', date: '2021-12-16', cases: 174, casesGrowth: -48, deaths: 3, deathsGrowth: 0, recovered: 385, recoveredGrowth: 42 },
  { id: '12-30', date: '2021-12-30', cases: 48, casesGrowth: -72, deaths: 3, deathsGrowth: 0, recovered: 232, recoveredGrowth: -39 }
    ];

    const loadCSVData = async () => {
      const response = await fetch('/covid3.csv');
      if (!response.ok) {
        console.error('Failed to fetch CSV file:', response.statusText);
        return;
      }
      const csvText = await response.text();

      return new Promise((resolve) => {
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            console.log('Parsed Data:', results.data);
            resolve(results.data);
          },
        });
      });
    };

    const renderChart = (covidData) => {
      const ctx = document.getElementById('covidChart').getContext('2d');
      chartInstance.value = new Chart(ctx, {
        type: 'line',
        data: {
          labels: covidData.map(data => data.Date),
          datasets: [
            { label: 'Cases',
              data: covidData.map(data => data.Cases),
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
              fill: false,},
            { label: 'Deaths',
              data: covidData.map(data => data.Deaths),
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 2,
              fill: false,},
            { label: 'Recovered',
              data: covidData.map(data => data.Recovered),
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 2,
              fill: false, }], },
        options: {
          responsive: true,
          scales: {
          x: {beginAtZero: true,},y: {beginAtZero: true,},
          },},});};

    const goToDetail = (id) => {
      router.push({ path: `/${id}/Detail` });
    };

    onMounted(async () => {
      const covidData = await loadCSVData();
      if (covidData) {
        renderChart(covidData);
      }

      // Initialize DataTable
      $(document).ready(function() {
        $('#covidDataTable').DataTable({
          "responsive": true,
          "lengthChange": false,
          "autoWidth": false,
          "paging": true,
          "searching": true,
          "ordering": true,  
          "info": true,
          "buttons": ["copy", "csv", "excel", "pdf", "print"],
          "order": [[0, 'asc']]  // Optionally set default sorting order (e.g., by date)
        }).buttons().container().appendTo('#covidDataTable_wrapper .col-md-6:eq(0)');
      });
    });

    return {
      Data14D,
      goToDetail,
    };
  },
};
</script>

<style scoped>
/* Add any custom styling here if needed */
</style>
