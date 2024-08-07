<template>
    <div class="content-header">
      <div class="container-fluid">
        <h1 class="m-0">Dashboard</h1>
      </div>
    </div>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Tanggal</h3>
              </div>
              <div class="card-body">
                <ul>
                  <li v-for="date in dates" :key="date">
                    <router-link :to="`/${date}/detail`">{{ date }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
    data() {
      return {
        dates: ['2-24', '2-25', '2-26', '2-27']
      }
    }
  }
  </script>