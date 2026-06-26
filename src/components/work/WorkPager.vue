<script setup>
defineProps({
  prev: { type: Object, required: true },
  next: { type: Object, required: true }
})
</script>

<template>
  <footer class="work-foot">
    <router-link to="/works" class="back">← 返回作品目录</router-link>

    <nav class="work-pager">
      <router-link
        v-if="prev"
        :to="{ name: 'work', params: { num: prev.num } }"
        class="pager pager-prev"
      >
        <span class="pager-label">上一篇</span>
        <span class="pager-title">— {{ prev.title }}</span>
        <span class="pager-num">[{{ prev.num }}]</span>
      </router-link>
      <span v-else class="pager-spacer"></span>

      <router-link
        v-if="next"
        :to="{ name: 'work', params: { num: next.num } }"
        class="pager pager-next"
      >
        <span class="pager-num">[{{ next.num }}]</span>
        <span class="pager-title">{{ next.title }} —</span>
        <span class="pager-label">下一篇</span>
      </router-link>
    </nav>
  </footer>
</template>

<style scoped>
.work-foot {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--ink);
}
.back {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--muted);
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  transition: color 0.2s;
}
.back:hover { color: var(--accent); }

.work-pager {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px dotted rgba(0,0,0,0.25);
}
.pager {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 0;
  transition: color 0.2s, transform 0.2s;
}
.pager-prev { text-align: left; align-items: flex-start; }
.pager-next { text-align: right; align-items: flex-end; }
.pager-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--muted);
  font-family: 'Courier New', monospace;
}
.pager-title {
  font-size: 1.05rem;
  font-style: italic;
  line-height: 1.3;
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
  transition: color 0.2s, border-color 0.2s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 28ch;
  display: block;
}
.pager-num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent);
  letter-spacing: 0.1em;
  font-style: italic;
}
.pager:hover .pager-title {
  color: var(--accent);
  border-bottom-color: var(--accent);
}
.pager-prev:hover { transform: translateX(-4px); }
.pager-next:hover { transform: translateX(4px); }
.pager-spacer { display: block; }
</style>
