<script setup>
defineProps({
  kinds: { type: Array, required: true },
  activeKind: { type: String, required: true },
  kindCounts: { type: Object, required: true },
  currentPage: { type: Number, required: true },
  pageSize: { type: Number, required: true },
  filteredCount: { type: Number, required: true },
  setKind: { type: Function, required: true }
})
</script>

<template>
  <div class="filter-bar">
    <span class="filter-label">分类</span>
    <button
      v-for="k in kinds"
      :key="k"
      :class="['filter-chip', { active: activeKind === k, 'is-all': k === '全部' }]"
      @click="setKind(k)"
    >
      {{ k }}
      <span class="filter-count">{{ kindCounts[k] || 0 }}</span>
    </button>
  </div>

  <div class="pager-info">
    <span class="pager-range">
      第 {{ (currentPage - 1) * pageSize + 1 }}–{{ Math.min(currentPage * pageSize, filteredCount) }} 篇 / 共 {{ filteredCount }} 篇
    </span>
    <span v-if="activeKind !== '全部'" class="pager-filter">· 分类：{{ activeKind }}</span>
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 3rem 0 0 0;
  padding: 1rem 0;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
}
.filter-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--muted);
  font-family: 'Courier New', monospace;
  margin-right: 0.5rem;
}
.filter-chip {
  background: none;
  border: 1px solid var(--ink);
  padding: 0.3rem 0.8rem;
  font-size: 0.85rem;
  font-family: inherit;
  font-style: italic;
  color: var(--ink);
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.filter-chip:hover { background: var(--paper-deep); }
.filter-chip.active {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.filter-chip.active.is-all {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--paper);
}
.filter-count {
  font-family: 'Courier New', monospace;
  font-style: normal;
  font-size: 0.7rem;
  opacity: 0.6;
}
.filter-chip.active .filter-count { opacity: 0.9; }

.pager-info {
  margin: 2.5rem 0 1rem 0;
  padding-top: 1.2rem;
  border-top: 1px solid var(--ink);
  font-size: 0.78rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-family: 'Courier New', monospace;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.pager-filter { color: var(--accent); font-style: italic; text-transform: none; letter-spacing: 0; }
</style>
