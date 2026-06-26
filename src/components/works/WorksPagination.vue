<script setup>
defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
  setPage: { type: Function, required: true }
})
</script>

<template>
  <nav v-if="totalPages > 1" class="pagination">
    <button
      class="page-btn page-prev"
      :disabled="currentPage === 1"
      @click="setPage(currentPage - 1)"
      title="上一页"
    >←</button>

    <span class="page-info">
      <em>{{ currentPage }}</em> / {{ totalPages }}
    </span>

    <button
      class="page-btn page-next"
      :disabled="currentPage === totalPages"
      @click="setPage(currentPage + 1)"
      title="下一页"
    >→</button>
  </nav>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  margin-top: 4rem;
  padding: 2rem 0 1rem 0;
  border-top: 1px solid var(--ink);
}
.page-btn {
  background: none;
  border: 1px solid var(--ink);
  padding: 0.5rem 0.85rem;
  min-width: 2.4rem;
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;
  color: var(--ink);
  cursor: pointer;
  transition: all 0.2s;
}
.page-btn:hover:not(:disabled) {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.page-btn:disabled {
  opacity: 0.25;
  cursor: not-allowed;
}
.page-info {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  color: var(--muted);
  padding: 0 0.5rem;
  min-width: 4rem;
  text-align: center;
}
.page-info em {
  color: var(--accent);
  font-style: italic;
  font-size: 1.1rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .pagination { gap: 0.25rem; }
  .page-btn { padding: 0.4rem 0.6rem; min-width: 2rem; font-size: 0.8rem; }
}
</style>
