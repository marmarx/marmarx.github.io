<!-- Use this component to adjust CSS --darken and --lighten variables -->

<script setup>
import { ref, watch } from 'vue'

const lighten = ref(1.15)
const darken  = ref(0.95)

const updateCSS = (prop, val) => document.documentElement.style.setProperty(`--${prop}`, val)

watch(lighten, (v) => updateCSS('lighten', v))
watch(darken,  (v) => updateCSS('darken', v))
</script>

<template>
<div class="fixed">
  <label>
    Darken
    <input type="number" min="0" max="2" step="0.01" v-model.number="darken"  />
  </label>

  <label>
    Lighten
    <input type="number" min="0" max="2" step="0.01" v-model.number="lighten" />
  </label>
</div>
</template>

<style scoped>
.fixed {
  position: fixed; inset: auto auto 0 0;
  display: flex; flex-direction: column;
  padding: 1em; gap: 1em;
  background-color: rgba(0, 0, 0, 0.25);
  & input { text-align: center }
  & label { display: flex; gap: 1em; align-items: center }
}
</style>