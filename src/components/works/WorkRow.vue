<script setup>
defineProps({
  work: { type: Object, required: true }
})

const BASE_URL = import.meta.env.BASE_URL
</script>

<template>
  <router-link
    :to="{ name: 'work', params: { num: work.num } }"
    class="work-row"
  >
    <div class="work-num">{{ work.num }}</div>
    <figure class="work-thumb">
      <img :src="`${BASE_URL}works/${work.cover}`" :alt="work.title" loading="lazy" />
    </figure>
    <div class="work-body">
      <h3 class="work-title">{{ work.title }}</h3>
      <p class="work-meta">{{ work.kind }}<span class="meta-sep"></span>{{ work.year }}<span class="meta-sep"></span>{{ work.location }}</p>
      <p class="work-desc">{{ work.desc }}</p>
    </div>
    <div class="work-arrow">→</div>
  </router-link>
</template>

<style scoped>
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

@media (max-width: 768px) {
  .work-row { grid-template-columns: 50px 1fr 20px; gap: 1rem; }
  .work-thumb { display: none; }
  .work-title { font-size: 1.4rem; }
}
</style>
