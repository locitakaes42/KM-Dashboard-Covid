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
                  <img src="/Clustering/dendokasusplus.png" alt="Dendrogram Kasus Meningkat" class="img-responsive" style="max-width: 100%; height: auto;">
                </div>
                <div class="clustering-result">
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 1:</strong><br>
                    gunung_rapi (6), jarak_luncur (6), awan_panas (5), awan (4), rapi (4), gugur (3), barat_daya (3), arah_barat (3), gunung (2), panas (2) , 
                  </p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 2:</strong><br>
                    tracing_kontak (4), kota_yogyakarta (4), positif (3), pemda_diy (3), kabupaten_sleman (3), kabupaten_bantul (3), tambah (3), periksa_mandiri (3), positif_covid (2), tambah_konfirmasi (2) , 
                  </p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 3:</strong><br>
                    korban (8), tinggal_dunia (4), temu (4), sepeda_motor (3), rumah_sakit (3), polisi (3), tni (3), kulonprogo (3), muhammadiyah (2), saksi (2) , 
                  </p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 4:</strong><br>
                    salah_satu (4), kota_yogyakarta (4), kabupaten_sleman (4), bantul (3), positif_covid (3), korban (3), salat (3), teman (3), rumah_sakit (3), gunungkidul (3) , 
                  </p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 5:</strong><br>
                    protokol_sehat (6), vaksinasi (6), vaksin (4), kota_yogyakarta (3), pandemi_covid (3), tinggal_dunia (3), harga (3), pasien_covid (2), wisata (2), gunungkidul (2) ,
                  </p>
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
                  <img src="/Clustering/dendokasusminus.png" alt="Dendrogram Kasus Menurun" class="img-responsive" style="max-width: 100%; height: auto;">
                </div>
                <div class="clustering-result">
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 1:</strong><br>
                    gunung_rapi (9), jarak_luncur (7), awan_panas (6), amplitudo_mm (5), arah_barat (5), gugur (5), rapi (4), barat_daya (4), panas (3), gugur_lava (3) , 
                  </p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 2:</strong><br>
                    kota_yogyakarta (7), bantul (6), vaksinasi (6), anak (5), protokol_sehat (5), orang_tua (4), pandemi_covid (4), vaksinasi_covid (4), gunungkidul (4), anak_anak (4) , 
                  </p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 3:</strong><br>
                    bantul (6), kabupaten_bantul (5), positif_covid (5), tambah (4), rumah_sakit (4), pasien (3), positif (3), joglo (2), kuliner (2), kepala (2) , 
                  </p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 4:</strong><br>
                    motor (5), sepeda (5), sepeda_motor (5), korban (4), curi (2), tangkap (2), polisi (2), imbau (1), asing (1), khawatir (1) , 
                  </p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 5:</strong><br>
                    kota_yogyakarta (6), kota (6), ppkm_level (4), capai_persen (4), persen (3), objek_wisata (3), ppkm (3), kabupaten_sleman (3), bantu (3), wisata (3) , 
                  </p>
                  <p><strong>Kata-kata kunci paling sering muncul di Cluster 6:</strong><br>
                    korban (11), hotel (6), luka (6), celaka (6), mobil (5), gunungkidul (5), tangkap (5), kopassus (5), kulonprogo (5), sangka (5) , 
                  </p>
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
  