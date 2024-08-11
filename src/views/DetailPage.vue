<template>
  <div class="content-header">
    <div class="container-fluid">
      <h1 class="m-0">Topik Berita Tanggal {{ id }}</h1>
      <h6>Berikut Merupakan Topik Dari Berita</h6>
    </div>
  </div>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!-- Word Cloud Card -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Word Cloud</h3>
            </div>
            <div class="card-body">
              <div id="wordCloudChart" style="width: 100%; height: 500px;"></div>
            </div>
          </div>

          <!-- Data Table Card -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Topik Data</h3>
            </div>
            <div class="card-body">
              <table id="detailDataTable" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Topik</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in tableData" :key="index">
                    <td>{{ row.No }}</td>
                    <td>{{ row.Topik }}</td>
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
import Papa from 'papaparse';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default {
  name: 'Detail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const tableData = ref([]);

    const loadCSVData = async (filePath) => {
      const response = await fetch(filePath);
      if (!response.ok) {
        console.error('Failed to fetch CSV file:', response.statusText);
        return [];
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

    const renderWordCloud = async () => {
      const wordCloudData = await loadCSVData(`/hasil/${props.id}/top_words.csv`);
      
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("wordCloudChart", am4plugins_wordCloud.WordCloud);
      let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

      series.data = wordCloudData.map(item => ({
        word: item.Word,
        frequency: parseFloat(item.P)
      }));
      
      series.dataFields.word = "word";
      series.dataFields.value = "frequency";
      
      series.labels.template.url = "https://www.inews.id/find?q={word}";
      series.labels.template.urlTarget = "_blank";
    };

    onMounted(async () => {
      tableData.value = await loadCSVData(`/hasil/${props.id}/topik.csv`);
      renderWordCloud();

      // Initialize DataTable after the data is loaded
      $(document).ready(function () {
        $('#detailDataTable').DataTable({
          "responsive": true,
          "lengthChange": false,
          "autoWidth": false,
          "paging": true,
          "searching": true,
          "ordering": true,
          "info": true,
          "order": [[0, 'asc']]  // Default sorting order
        });
      });
    });

    return {
      tableData,
    };
  },
};
</script>

<style scoped>
/* Add any custom styling here if needed */
</style>
