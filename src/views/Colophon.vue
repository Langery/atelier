<script setup>
import { useRoute } from 'vue-router'
import ColophonFacts from '../components/colophon/ColophonFacts.vue'
import ColophonPostscript from '../components/colophon/ColophonPostscript.vue'
import ColophonErrata from '../components/colophon/ColophonErrata.vue'

const route = useRoute()
</script>

<template>
  <section>
    <p class="num">— {{ route.meta.num }} — {{ route.meta.title }}</p>
    <h2>版权页</h2>

    <ColophonFacts />
    <ColophonPostscript />
    <ColophonErrata />

    <p class="fin">— 完 —</p>
  </section>
</template>

<style scoped>
.fin {
  text-align: center;
  margin-top: 5rem;
  font-style: italic;
  font-size: 1.2rem;
  color: var(--muted);
}
</style>
