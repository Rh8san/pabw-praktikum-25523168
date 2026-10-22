<script setup>
const props = defineProps({
  profil: { type: Object, required: true }
})
</script>

<template>
  <header class="navbar">
    <h1>{{ props.profil.nama }}</h1>
    <nav aria-label="Main navigation">
      <a href="https://lemansultimate.com/">Le Mans Ultimate</a>
      <a href="https://assettocorsa.gg/assetto-corsa-competizione/">Assetto Corsa Competizione</a>
      <a href="https://www.iracing.com/">iRacing</a>
    </nav>
  </header>
</template>