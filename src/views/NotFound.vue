<script setup>
import { works } from '../data/works.js'

// 4 篇热门
const featured = ['I', 'XIV', 'X', 'XX']
const picks = featured.map(n => works.find(w => w.num === n)).filter(Boolean)
</script>

<template>
  <section class="nf">
    <p class="num">— —</p>
    <h1>这里没有页面。</h1>
    <p class="lede">地址栏里的路径不在这一期的目录里。</p>

    <p class="num" style="margin-top: 5rem;">— 你可能正在找 —</p>

    <ul class="nf-picks">
      <li v-for="w in picks" :key="w.num">
        <router-link :to="{ name: 'work', params: { num: w.num } }">
          <span class="pick-num">{{ w.num }}</span>
          <span class="pick-title">{{ w.title }}</span>
          <span class="pick-loc">{{ w.location }}</span>
          <span class="pick-arrow">→</span>
        </router-link>
      </li>
    </ul>

    <div class="nf-actions">
      <router-link to="/works" class="back">← 回到作品目录</router-link>
      <router-link to="/plates" class="back">看图版</router-link>
      <router-link to="/mail" class="back">给编者写信</router-link>
    </div>
  </section>
</template>

<style scoped>
.nf {
  text-align: center;
  padding: 4rem 0 6rem 0;
  max-width: 700px;
  margin: 0 auto;
}
.nf h1 {
  font-size: 3.5rem;
  font-style: italic;
  margin: 1rem 0;
  font-family: var(--font-display);
}
.nf .lede {
  color: var(--muted);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  font-style: italic;
}

.nf-picks {
  list-style: none;
  margin: 0 0 4rem 0;
  padding: 0;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
}
.nf-picks li {
  border-bottom: 1px dotted rgba(0,0,0,0.2);
}
.nf-picks li:last-child { border-bottom: none; }
.nf-picks a {
  display: grid;
  grid-template-columns: 3.5rem 1fr auto auto;
  gap: 1.5rem;
  align-items: baseline;
  padding: 1.2rem 1rem;
  text-decoration: none;
  color: inherit;
  text-align: left;
  transition: background 0.2s, padding-left 0.2s;
}
.nf-picks a:hover {
  background: var(--paper-deep);
  padding-left: 1.6rem;
  color: var(--accent);
}
.pick-num {
  font-family: var(--font-mono);
  font-style: italic;
  color: var(--accent);
  font-size: 1.1rem;
}
.pick-title {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.2rem;
}
.pick-loc {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
}
.pick-arrow {
  color: var(--muted);
  transition: transform 0.2s, color 0.2s;
}
.nf-picks a:hover .pick-arrow {
  color: var(--accent);
  transform: translateX(4px);
}

.nf-actions {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}
.back {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--muted);
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  transition: color 0.2s;
}
.back:hover { color: var(--accent); }

@media (max-width: 600px) {
  .nf-picks a { grid-template-columns: 2.5rem 1fr 1.5rem; }
  .pick-loc { display: none; }
}
</style>
