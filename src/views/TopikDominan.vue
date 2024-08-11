<template>
    <div class="content-header">
      <div class="container-fluid">
        <h1 class="m-0">Topik Dominan Berita</h1>
      </div>
    </div>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Topik Dominan Tabel</h3>
              </div>
              <div class="card-body">
                <table id="topikDominanTable" class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Tanggal</th>
                      <th>Kasus</th>
                      <th>%</th>
                      <th>Topik Dominan</th>
                      <th>Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, index) in topikDominanData" :key="index">
                      <td>{{ row.tanggal }}</td>
                      <td>{{ row.kasus }}</td>
                      <td>{{ row.persentase }}</td>
                      <td>{{ row.topikDominan }}</td>
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
  import { onMounted, ref } from "vue";
  import { useRouter } from 'vue-router';


  export default {
    name: "TopikDominan",
    setup() {
        const router = useRouter();
      const topikDominanData = ref([
        {
          id: "1-14",
          tanggal: "14-Jan-21",
          kasus: 3937,
          persentase: 0,
          metode: "LDA",
          topikDominan:
            "'vaksin', 'vaksin_covid', 'tenaga_sehat', 'sri_purnomo', 'vaksinasi', 'pesawat', 'tahap', 'hilang_kontak', 'pesawat_sriwijaya', 'terima'",
        },
        {
          id: "1-28",
          tanggal: "28-Jan-21",
          kasus: 4748,
          persentase: 20,
          metode: "LDA",
          topikDominan:
            "'listyo_sigit', 'kota_yogyakarta', 'ugm', 'rumah_sakit', 'darah', 'hajat', 'gunungkidul', 'indonesia', 'sigit', 'swab_antigen'",
        },
    {
        "id": "2-11",
        "tanggal": "11-Feb-21",
        "kasus": 3694,
        "persentase": -22,
        "metode": "LDA",
        "topikDominan": "'bantul', 'tenaga_sehat', 'rumah_sakit', 'protokol_sehat', 'kota_yogyakarta', 'isolasi_mandiri', 'tangan_covid', 'kulonprogo', 'konfirmasi_positif', 'pasien_covid'"
    },
    {
        "id": "2-25",
        "tanggal": "25-Feb-21",
        "kasus": 2717,
        "persentase": -26,
        "metode": "LDA",
        "topikDominan": "'bantul', 'tangan_covid', 'narkoba', 'anggota_polri', 'polri', 'usul', 'diy', 'ppkm_mikro', 'dagang', 'lantik'"
    },
    {
        "id": "3-11",
        "tanggal": "11-Mar-21",
        "kasus": 2385,
        "persentase": -12,
        "metode": "LDA",
        "topikDominan": "'korban', 'kota_yogyakarta', 'awan_panas', 'kulonprogo', 'vaksinasi', 'bantul', 'gunungkidul', 'temu', 'rumah_sakit', 'vaksinasi_covid'"
    },
    {
        "id": "3-25",
        "tanggal": "25-Mar-21",
        "kasus": 2676,
        "persentase": 12,
        "metode": "LDA",
        "topikDominan": "'protokol_sehat', 'sleman', 'orang_tua', 'pandemi_covid', 'vaksinasi', 'kota_yogyakarta', 'pasar', 'persen', 'harga_cabai', 'harga'"
    },
    {
        "id": "4-8",
        "tanggal": "8-Apr-21",
        "kasus": 2691,
        "persentase": 0,
        "metode": "LDA",
        "topikDominan": "'tambah', 'kabupaten_sleman', 'positif_covid', 'konfirmasi_positif', 'tracing_kontak', 'positif', 'periksa_mandiri', 'kota_yogyakarta', 'kabupaten_bantul', 'juru_bicara'"
    },
    {
        "id": "4-22",
        "tanggal": "22-Apr-21",
        "kasus": 2843,
        "persentase": 5,
        "metode": "LDA",
        "topikDominan": "'korban', 'kulonprogo', 'tinggal_dunia', 'masjid', 'anak', 'rumah_sakit', 'gunungkidul', 'polisi', 'anak_anak', 'temu'"
    },
    {
        "id": "5-6",
        "tanggal": "6-May-21",
        "kasus": 2755,
        "persentase": -3,
        "metode": "LDA",
        "topikDominan": "'sepeda_motor', 'kabupaten_sleman', 'sepeda', 'korban', 'isolasi_mandiri', 'motor', 'gunungkidul', 'new_delhi', 'kabupaten_gunungkidul', 'india'"
    },
    {
        "id": "5-20",
        "tanggal": "20-May-21",
        "kasus": 2192,
        "persentase": -20,
        "metode": "LDA",
        "topikDominan": "'larang_mudik', 'protokol_sehat', 'buka_puasa', 'terap_protokol', 'salat_idul', 'mudik', 'kerja', 'laksana', 'zona_merah', 'sebar_covid'"
    },
    {
        "id": "6-3",
        "tanggal": "3-Jun-21",
        "kasus": 2646,
        "persentase": 20,
        "metode": "LDA",
        "topikDominan": "'korban', 'air', 'parkir', 'haji', 'papua', 'jemaah_haji', 'harga', 'tarif_parkir', 'kawasan_malioboro', 'gunungkidul'"
    },
    {
        "id": "6-17",
        "tanggal": "17-Jun-21",
        "kasus": 5307,
        "persentase": 100,
        "metode": "LDA",
        "topikDominan": "'ugm', 'zona', 'fakultas', 'layan', 'teknik', 'tetap', 'lingkung', 'tingkat', 'terang_tulis', 'salah_satu'"
    },
    {
        "id": "7-1",
        "tanggal": "1-Jul-21",
        "kasus": 10609,
        "persentase": 99,
        "metode": "LDA",
        "topikDominan": "'rumah_sakit', 'positif_covid', 'polda_diy', 'kabupaten_sleman', 'tinggal_dunia', 'korban', 'pasien', 'pasien_covid', 'pandemi_covid', 'protokol_sehat'"
    },
    {
        "id": "7-15",
        "tanggal": "15-Jul-21",
        "kasus": 24427,
        "persentase": 130,
        "metode": "LDA",
        "topikDominan": "'mobilitas_masyarakat', 'jam_wib', 'korban', 'mobilitas', 'bersih', 'varian_delta', 'kulonprogo', 'papua', 'perempuan', 'restoran'"
    },
    {
        "id": "7-29",
        "tanggal": "29-Jul-21",
        "kasus": 28597,
        "persentase": 17,
        "metode": "LDA",
        "topikDominan": "'tinggal_dunia', 'kota_yogyakarta', 'warga_dampak', 'salah_satu', 'isolasi_mandiri', 'kota', 'angka_mati', 'mati', 'kamis', 'positif_covid'"
    },
    {
        "id": "8-12",
        "tanggal": "12-Aug-21",
        "kasus": 20115,
        "persentase": -29,
        "metode": "LDA",
        "topikDominan": "'kota_yogyakarta', 'vaksinasi', 'ppkm_level', 'vaksin', 'merah', 'kota', 'harga', 'pesawat', 'pariwisata', 'laksana'"
    },
    {
        "id": "8-26",
        "tanggal": "26-Aug-21",
        "kasus": 13037,
        "persentase": -35,
        "metode": "LDA",
        "topikDominan": "'rumah_sakit', 'bantul', 'diy', 'pandemi_covid', 'kota_yogyakarta', 'lurah', 'tim', 'kabupaten_bantul', 'vaksinasi', 'bantu'"
    },
    {
        "id": "9-9",
        "tanggal": "9-Sep-21",
        "kasus": 4979,
        "persentase": -61,
        "metode": "LDA",
        "topikDominan": "'bantul', 'rumah_sakit', 'objek_wisata', 'tinggal_dunia', 'kabupaten_bantul', 'dinas_sehat', 'gunungkidul', 'pasien', 'sabtu', 'serta'"
    },
    {
        "id": "9-23",
        "tanggal": "23-Sep-21",
        "kasus": 1804,
        "persentase": -63,
        "metode": "LDA",
        "topikDominan": "'korban', 'saksi', 'kulonprogo', 'muncul', 'rumah', 'sekolah', 'ikan', 'kabupaten_gunungkidul', 'lbh_yogyakarta', 'presiden_joko'"
    },
    {
        "id": "10-7",
        "tanggal": "7-Oct-21",
        "kasus": 861,
        "persentase": -52,
        "metode": "LDA",
        "topikDominan": "'jogja', 'korban', 'rumah_sakit', 'makan', 'keluarga', 'kota', 'kunjung', 'sepeda_motor', 'wisata', 'bangun'"
    },
    {
        "id": "10-21",
        "tanggal": "21-Oct-21",
        "kasus": 401,
        "persentase": -53,
        "metode": "LDA",
        "topikDominan": "'kota_yogyakarta', 'wisata', 'gunungkidul', 'uji_coba', 'kulonprogo', 'sepeda_motor', 'pandemi_covid', 'korban', 'temu', 'protokol_sehat'"
    },
    {
        "id": "11-4",
        "tanggal": "4-Nov-21",
        "kasus": 452,
        "persentase": 12,
        "metode": "LDA",
        "topikDominan": "'warga_bina', 'kota_yogyakarta', 'bantul', 'positif_covid', 'lapas_narkotika', 'diy', 'pasu', 'rusia', 'jakarta', 'lapor'"
    },
    {
        "id": "11-18",
        "tanggal": "18-Nov-21",
        "kasus": 400,
        "persentase": -11,
        "metode": "LDA",
        "topikDominan": "'protokol_sehat', 'gunungkidul', 'kulonprogo', 'sleman', 'pandemi_covid', 'salah_satu', 'media_sosial', 'anak_anak', 'amerika_serikat', 'rabu'"
    },
    {
        "id": "12-2",
        "tanggal": "2-Dec-21",
        "kasus": 341,
        "persentase": -14,
        "metode": "LDA",
        "topikDominan": "'desa', 'negara', 'indonesia', 'tangan_covid', 'gunungkidul', 'tni', 'jakarta', 'tni_polri', 'masuk', 'atur'"
    },
    {
        "id": "12-16",
        "tanggal": "16-Dec-21",
        "kasus": 174,
        "persentase": -48,
        "metode": "LDA",
        "topikDominan": "'anak', 'bantul', 'gunungkidul', 'sleman', 'anak_anak', 'rumah', 'sepeda_motor', 'temu', 'orang_tua', 'diy'"
    },
    {
        "id": "12-30",
        "tanggal": "30-Dec-21",
        "kasus": 48,
        "persentase": -72,
        "metode": "LDA",
        "topikDominan": "'tutup', 'cari', 'satpol_pp', 'anggota', 'malam', 'lintas', 'kendara', 'gunungkidul', 'varian_omicron', 'batas'"
    }
      ]);

      const goToDetail = (id) => {
      router.push({ path: `/${id}/Detail` });
    };
  
      onMounted(async() => {
        // Initialize DataTable after data is loaded
        $(document).ready(function () {
          $("#topikDominanTable").DataTable({
            responsive: true,
            lengthChange: false,
            autoWidth: false,
            paging: true,
            searching: true,
            ordering: true,
            info: true,
            order: [[0, "asc"]],
          });
        });
      });
  
      return {
        topikDominanData,
        goToDetail,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styling here if needed */
  </style>
  