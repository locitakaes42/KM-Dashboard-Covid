<template>

      <!-- Page Header -->
      <section class="content-header">
        <h1>
          Clustering Visualization
          <small>Kasus Positif Covid Naik</small>
        </h1>
      </section>
  
      <!-- Main Content Section -->
      <section class="content">
        <div class="row justify-content-center">
          <!-- Image and Clustering Visualization -->
          <div class="col-md-10 mb-4">
            <div class="card">
              <div class="card-header text-center">
                <h3 class="card-title">Clustering Visualization for Kasus Positif Covid Naik</h3>
              </div>
              <div class="card-body text-center">
                <img :src="imageUrl" alt="Clustering Visualization" class="img-responsive" style="max-width: 100%; height: auto;">
              </div>
            </div>
          </div>
  
          <!-- CSV Data Table -->
          <div class="col-md-12 mb-4">
            <div class="card">
              <div class="card-header text-center">
                <h3 class="card-title">Cluster Data from CSV</h3>
              </div>
              <div class="card-body">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, index) in csvData" :key="index">
                      <td v-for="(value, key) in row" :key="key">{{ value }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  </template>
  
  <script>
  import Papa from 'papaparse';
  
  export default {
    name: "ClusteringKasusPositifNaik",
    data() {
      return {
        imageUrl: '', // Image URL
        csvData: [], // Parsed CSV data
        headers: [], // CSV Headers
      };
    },
    methods: {
      fetchImage() {
        // Assuming the image is in the public directory or statically served
        this.imageUrl = '/Clustering/visualkasusplus.png';
      },
      fetchCsvData() {
        fetch('/Clustering/clustercovidplus.csv')
          .then(response => response.text())
          .then(csvText => {
            Papa.parse(csvText, {
              header: true,
              dynamicTyping: true,
              complete: (results) => {
                this.csvData = results.data;
                if (results.meta.fields) {
                  this.headers = results.meta.fields;
                }
              },
            });
          })
          .catch(error => {
            console.error("Error loading CSV file:", error);
          });
      }
    },
    mounted() {
      this.fetchImage(); // Load the image when component is mounted
      this.fetchCsvData(); // Load the CSV data when component is mounted
    }
  };
  </script>
  
  <style scoped>
  .content-wrapper {

  }
  
  .card {
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .card-header {
    background-color: #f5f5f5;
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
  }
  
  .card-title {
    margin: 0;
    font-size: 1.5rem;
  }
  
  .card-body {
    padding: 20px;
  }
  
  .table {
    margin-bottom: 0;
  }
  </style>
  