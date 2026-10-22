<script setup>
import { onMounted } from 'vue'
import { profil } from './data.js'
import { muat } from './app.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(() => {
  muat()
})
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main class="content">
      <aside class="side">
        <h2>Navigasi Halaman</h2>
        <ul>
          <li><a href="#recommended-sim-racer">Sim Racer</a></li>
          <li><a href="#recommended-casual">Casual Player</a></li>
        </ul>
      </aside>

      <section class="main">
        <TombolFilter />
        <DaftarProyek />
        <FormKontak />
      </section>
    </main>

    <footer>
      <p>Rafi Amar Rhosan</p>
    </footer>
  </div>
</template>