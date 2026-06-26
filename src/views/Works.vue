<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { works } from '../data/works.js'
import WorksHeader from '../components/works/WorksHeader.vue'
import WorksFilter from '../components/works/WorksFilter.vue'
import WorkRow from '../components/works/WorkRow.vue'
import WorksPagination from '../components/works/WorksPagination.vue'

const route = useRoute()

const activeKind = ref('全部')
const pageSize = 8
const currentPage = ref(1)

const kinds = computed(() => ['全部', ...new Set(works.map(w => w.kind))])

const kindCounts = computed(() => {
  const counts = { 全部: works.length }
  for (const w of works) counts[w.kind] = (counts[w.kind] || 0) + 1
  return counts
})

const filtered = computed(() => {
  if (activeKind.value === '全部') return works
  return works.filter(w => w.kind === activeKind.value)
})

const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / pageSize)))

const paged = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filtered.value.slice(start, start + pageSize)
})

const setPage = (p) => {
  if (p < 1 || p > totalPages.value) return
  currentPage.value = p
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const setKind = (k) => {
  activeKind.value = k
  currentPage.value = 1
}

watch(() => route.query.page, (q) => {
  const p = parseInt(q, 10)
  if (!isNaN(p) && p >= 1 && p <= totalPages.value) {
    currentPage.value = p
  } else {
    currentPage.value = 1
  }
}, { immediate: true })
</script>

<template>
  <section>
    <p class="num">— {{ route.meta.num }} — {{ route.meta.title }}</p>

    <WorksHeader :works-count="works.length" />
    <WorksFilter
      :kinds="kinds"
      :active-kind="activeKind"
      :kind-counts="kindCounts"
      :current-page="currentPage"
      :page-size="pageSize"
      :filtered-count="filtered.length"
      :set-kind="setKind"
    />

    <div class="works-list">
      <WorkRow v-for="w in paged" :key="w.num" :work="w" />
      <p v-if="!paged.length" class="empty">这一类暂无收录。</p>
    </div>

    <WorksPagination
      :current-page="currentPage"
      :total-pages="totalPages"
      :set-page="setPage"
    />
  </section>
</template>

<style scoped>
.works-list { margin-top: 1rem; }
.empty {
  padding: 4rem 0;
  text-align: center;
  color: var(--muted);
  font-style: italic;
}
</style>
