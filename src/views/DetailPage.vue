<template>
    <div class="content-header">
      <div class="container-fluid">
        <h1 class="m-0">Detail Page</h1>
      </div>
    </div>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Detail for {{ date }}</h3>
              </div>
              <div class="card-body">
                <p>This is the detail page for {{ date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'DetailPage',
    props: ['date']
  }
  </script>