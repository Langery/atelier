<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getWork, idxOf, works } from '../data/works.js'
import WorkHero from '../components/work/WorkHero.vue'
import WorkArticle from '../components/work/WorkArticle.vue'
import WorkReading from '../components/work/WorkReading.vue'
import WorkPager from '../components/work/WorkPager.vue'

const route = useRoute()

const work = computed(() => getWork(route.params.num))
const idx = computed(() => idxOf(route.params.num))
const prev = computed(() => (idx.value > 0 ? works[idx.value - 1] : works[works.length - 1]))
const next = computed(() => (idx.value < works.length - 1 ? works[idx.value + 1] : works[0]))
</script>

<template>
  <section v-if="work">
    <p class="num">— 02 — 作品</p>
    <WorkHero :work="work" :idx="idx" />
    <WorkArticle :work="work" />
    <WorkReading :work="work" />
    <WorkPager :prev="prev" :next="next" />
  </section>
</template>
