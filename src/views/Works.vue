<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { works } from '../data/works.js'

const route = useRoute()
const router = useRouter()
const BASE_URL = import.meta.env.BASE_URL

const activeKind = ref('全部')
const pageSize = 8
const currentPage = ref(1)

const kinds = computed(() => ['全部', ...new Set(works.map(w => w.kind))])

// 各 kind 的作品数 (含 '全部' = works.length) — 避免模板内联 filter
const kindCounts = computed(() => {
  const counts = new Map([['全部', works.length]])
  for (const w of works) counts.set(w.kind, (counts.get(w.kind) || 0) + 1)
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
  // 翻页时滚到列表顶部
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const setKind = (k) => {
  activeKind.value = k
  currentPage.value = 1
}

// 直接访问 /works?page=3 时同步
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

    <header class="works-head">
      <div class="works-head-l">
        <h2>作品</h2>
        <p class="works-sub">第 02 卷 · 收录 {{ works.length }} 篇 · 配图 {{ works.length }} 张</p>
      </div>
      <div class="works-head-r">
        <p class="works-rule"></p>
        <p class="works-liner">
          按现场观察的时间顺序排列，不按重要程度。
          先按 <em>编号</em> 翻，或按下方 <em>分类</em> 筛。
        </p>
      </div>
    </header>

    <div class="filter-bar">
      <span class="filter-label">分类</span>
      <button
        v-for="k in kinds"
        :key="k"
        :class="['filter-chip', { active: activeKind === k, 'is-all': k === '全部' }]"
        @click="setKind(k)"
      >
        {{ k }}
        <span class="filter-count">{{ kindCounts.get(k) || 0 }}</span>
      </button>
    </div>

    <div class="pager-info">
      <span class="pager-range">
        第 {{ (currentPage - 1) * pageSize + 1 }}–{{ Math.min(currentPage * pageSize, filtered.length) }} 篇 / 共 {{ filtered.length }} 篇
      </span>
      <span v-if="activeKind !== '全部'" class="pager-filter">· 分类：{{ activeKind }}</span>
    </div>

    <div class="works-list">
      <router-link
        v-for="w in paged"
        :key="w.num"
        :to="{ name: 'work', params: { num: w.num } }"
        class="work-row"
      >
        <div class="work-num">{{ w.num }}</div>
        <figure class="work-thumb">
          <img :src="`${BASE_URL}works/${w.cover}`" :alt="w.title" loading="lazy" />
        </figure>
        <div class="work-body">
          <h3 class="work-title">{{ w.title }}</h3>
          <p class="work-meta">{{ w.kind }}<span class="meta-sep"></span>{{ w.year }}<span class="meta-sep"></span>{{ w.location }}</p>
          <p class="work-desc">{{ w.desc }}</p>
        </div>
        <div class="work-arrow">→</div>
      </router-link>

      <p v-if="!paged.length" class="empty">这一类暂无收录。</p>
    </div>

    <nav v-if="totalPages > 1" class="pagination">
      <button
        class="page-btn page-prev"
        :disabled="currentPage === 1"
        @click="setPage(currentPage - 1)"
        :title="'上一页'"
      >←</button>

      <span class="page-info">
        <em>{{ currentPage }}</em> / {{ totalPages }}
      </span>

      <button
        class="page-btn page-next"
        :disabled="currentPage === totalPages"
        @click="setPage(currentPage + 1)"
        :title="'下一页'"
      >→</button>
    </nav>
  </section>
</template>

<style scoped>
/* Works 顶部卷期头 */
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
/* "全部" chip 单独强调: 赭红底 */
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

.works-list { margin-top: 1rem; }
.work-row {
  display: grid;
  grid-template-columns: 80px 180px 1fr 30px;
  gap: 2rem;
  align-items: center;
  padding: 1.4rem 1rem;
  border-bottom: 1px solid var(--ink);
  text-decoration: none;
  color: inherit;
  position: relative;
  transition: background 0.25s, transform 0.25s;
  /* 行宽由 padding 给定, hover 用 transform 不改变行宽 */
}
.work-row::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  background: var(--accent);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.work-row:hover {
  background: var(--paper-deep);
}
.work-row:hover::before { width: 4px; }
.work-row:hover .work-arrow {
  color: var(--accent);
  transform: translateX(6px);
}
.work-num {
  font-family: 'Courier New', monospace;
  font-size: 1.6rem;
  color: var(--accent);
  font-style: italic;
  align-self: start;
  padding-top: 0.2rem;
  line-height: 1;
}
.work-thumb {
  margin: 0;
  overflow: hidden;
  aspect-ratio: 4/3;
  width: 90%;
}
.work-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.work-row:hover .work-thumb img {
  transform: scale(1.04);
}
.work-title {
  font-size: 1.45rem;
  font-style: italic;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  margin-bottom: 0.25rem;
  line-height: 1.2;
}
.work-meta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.55rem;
  font-family: var(--font-mono);
}
.meta-sep {
  display: inline-block;
  width: 1px;
  height: 0.7rem;
  background: var(--muted);
  opacity: 0.4;
}
.work-desc {
  max-width: 50ch;
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--ink);
}
.work-arrow {
  color: var(--muted);
  font-size: 1.2rem;
  align-self: center;
  transition: color 0.2s, transform 0.2s;
}
.work-row:hover .work-arrow {
  color: var(--accent);
  transform: translateX(4px);
}
.empty {
  padding: 4rem 0;
  text-align: center;
  color: var(--muted);
  font-style: italic;
}

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
  .work-row { grid-template-columns: 50px 1fr 20px; gap: 1rem; }
  .work-thumb { display: none; }
  .work-title { font-size: 1.4rem; }
  .pagination { gap: 0.25rem; }
  .page-btn { padding: 0.4rem 0.6rem; min-width: 2rem; font-size: 0.8rem; }
}
</style>
