<template>
    <div class="content-wrapper">
      <!-- Page Header -->
      <section class="content-header">
        <h1>
          Clustering Topik Modeling
        </h1>
      </section>
  
      <!-- Main Content Section -->
      <section class="content">
        <div class="row">
          <!-- Card for Increasing Cases -->
          <div class="col-md-10 mb-4">
            <div class="card">
              <div class="card-header text-center">
                <h3 class="card-title">Pertumbuhan Kasus Covid Meningkat</h3>
              </div>
              <div class="card-body">
                <div class="text-center mb-4">
                  <img src="/kasus/denkasusplus.png" alt="Dendrogram Kasus Meningkat" class="img-responsive" style="max-width: 100%; height: auto;">
                </div>
                <div class="clustering-result">
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 1:</strong><br>
                  gunung_rapi (6), jarak_luncur (6), awan_panas (5), awan (4), rapi (4), gugur (3), barat_daya (3), arah_barat (3), gunung (2), panas (2)</p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 2:</strong><br>
                  kabupaten_sleman (3), kabupaten_bantul (3), tracing_kontak (3), tambah (3), periksa_mandiri (2), kota_yogyakarta (2), konfirmasi_positif (2), juru_bicara (2), positif (2), kabupaten_gunungkidul (1)</p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 3:</strong><br>
                  korban (8), tinggal_dunia (4), temu (4), sepeda_motor (3), rumah_sakit (3), polisi (3), tni (3), kulonprogo (3), muhammadiyah (2), saksi (2)</p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 4:</strong><br>
                  kota_yogyakarta (9), vaksinasi (7), positif_covid (6), protokol_sehat (5), rumah_sakit (5), gunungkidul (5), kabupaten_sleman (5), pandemi_covid (5), bantul (5), harga (5)</p>
                </div>
                <div class="text-center mt-4">
                  <router-link to="/PositifNaik" class="btn btn-primary">Detail</router-link>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Card for Decreasing Cases -->
          <div class="col-md-10 mb-4">
            <div class="card">
              <div class="card-header text-center">
                <h3 class="card-title">Pertumbuhan Kasus Covid Menurun</h3>
              </div>
              <div class="card-body">
                <div class="text-center mb-4">
                  <img src="/kasus/denkasusminus.png" alt="Dendrogram Kasus Menurun" class="img-responsive" style="max-width: 100%; height: auto;">
                </div>
                <div class="clustering-result">
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 1:</strong><br>
                  gunung_rapi (8), jarak_luncur (7), awan_panas (6), amplitudo_mm (5), arah_barat (4), barat_daya (4), gugur (4), rapi (3), gugur_lava (3), lava (3)</p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 2:</strong><br>
                  bantul (6), rumah_sakit (5), positif_covid (5), pasien (4), tambah (4), kabupaten_bantul (4), positif (3), pasien_covid (3), tangan_covid (2), objek_wisata (2)</p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 3:</strong><br>
                  kota_yogyakarta (6), vaksinasi (5), korban (4), anak_anak (4), bantul (4), gunungkidul (4), anak (4), rumah_sakit (4), vaksinasi_covid (4), orang_tua (4)</p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 4:</strong><br>
                  korban (12), polisi (5), tangkap (4), sepeda_motor (4), sangka (4), polres (4), sepeda (4), curi (4), motor (4), jeffry (3)</p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 5:</strong><br>
                  ppkm_level (4), ppkm (3), objek_wisata (2), protokol_sehat (2), muhammadiyah (2), wisata (2), destinasi_wisata (2), level (2), wisatawan (2), maju (1)</p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 6:</strong><br>
                  pandemi_covid (8), hotel (6), gunungkidul (6), kota_yogyakarta (6), kota (5), bantul (5), persen (5), kopassus (5), capai_persen (5), as (5)</p>
                </div>
                <div class="text-center mt-4">
                  <router-link to="/PositifTurun" class="btn btn-primary">Detail</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from "vue";
  import { useRouter } from 'vue-router';
  
  export default {

      name: "Klaster",
    setup() {
        // const router = useRouter();
         onMounted(async() => {
        // Initialize DataTable after data is loaded
        
      });}
  
  }


  </script>
  
  <style scoped>
  .content-wrapper {
    padding: 20px;
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
  
  .clustering-result {
    padding: 20px;
    background-color: #fafafa;
    border-radius: 5px;
  }
  
  .img-responsive {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    max-width: 100%;
    height: auto;
  }
  
  .btn {
    font-size: 1rem;
    padding: 10px 20px;
    border-radius: 5px;
  }
  </style>
  