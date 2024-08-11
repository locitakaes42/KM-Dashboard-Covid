<template>
  <div class="wrapper" :class="{ 'sidebar-collapse': isSidebarCollapsed, 'sidebar-mini': true }">
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" @click="toggleSidebar" href="#" role="button">
            <i class="fas fa-bars"></i>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="/Dashboard" class="brand-link">
        <span class="brand-text font-weight-light">Knowledge Dashboard</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
              <a class="nav-link" @click="navigateTo('/Dashboard')">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="navigateTo('/TopikDominan')">
                <i class="nav-icon fas fa-th"></i>
                <p>Topik Dominan</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="navigateTo('/Klaster')">
                <i class="nav-icon fas fa-th"></i>
                <p>Klastering</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <router-view></router-view>
    </div>

    <!-- Main Footer -->
    <footer class="main-footer">
      <strong>Copyright &copy; 2024 <a href="/Dashboard">Knowledge Dashboard Covid-19</a>.</strong>
      All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isSidebarCollapsed: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
      document.body.classList.toggle('sidebar-collapse');
    },
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  mounted() {
    // Pastikan AdminLTE diinisialisasi dengan benar
    if (window.$ && $.AdminLTE) {
      $.AdminLTE.init();
    }
  }
}
</script>
