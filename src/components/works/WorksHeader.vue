<script setup>
defineProps({
  worksCount: { type: Number, required: true }
})
</script>

<template>
  <header class="works-head">
    <div class="works-head-l">
      <h2>作品</h2>
      <p class="works-sub">第 02 卷 · 收录 {{ worksCount }} 篇 · 配图 {{ worksCount }} 张</p>
    </div>
    <div class="works-head-r">
      <p class="works-rule"></p>
      <p class="works-liner">
        按现场观察的时间顺序排列，不按重要程度。
        先按 <em>编号</em> 翻，或按下方 <em>分类</em> 筛。
      </p>
    </div>
  </header>
</template>

<style scoped>
.works-head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: end;
  margin: 1rem 0 2.5rem 0;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--ink);
}
.works-head h2 { margin: 0 0 0.5rem 0; }
.works-sub {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
  letter-spacing: 0.1em;
  margin: 0;
  font-style: italic;
}
.works-head-r { padding-bottom: 0.3rem; }
.works-rule {
  height: 2px;
  background: var(--accent);
  width: 3rem;
  margin: 0 0 0.9rem 0;
}
.works-liner {
  font-size: 0.95rem;
  font-style: italic;
  line-height: 1.65;
  color: var(--ink);
  margin: 0;
  max-width: 36ch;
}
.works-liner em {
  font-style: normal;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.85em;
  letter-spacing: 0.05em;
}
</style>
