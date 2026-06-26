<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getWork, idxOf, works } from '../data/works.js'

const route = useRoute()
const router = useRouter()
const BASE_URL = import.meta.env.BASE_URL

const work = computed(() => getWork(route.params.num))

const idx = computed(() => idxOf(route.params.num))
const prev = computed(() => (idx.value > 0 ? works[idx.value - 1] : works[works.length - 1]))
const next = computed(() => (idx.value < works.length - 1 ? works[idx.value + 1] : works[0]))

// 图说: 短小, 15 字内
const CAPTIONS = {
  I:   '雨季的礼拜堂',
  II:  '山门在清晨',
  III: '雨停了的下午',
  IV:  '天窗下的光',
  V:   '展亭的侧影',
  VI:  '水下城市',
  VII: '柱与影',
  VIII: '白墙黑瓦',
  IX:  '伞形柱之下',
  X:   '拱的韵律',
  XI:  '三片帆',
  XII: '茶室的尺度',
  XIII: '石与水',
  XIV: '未完成的圣殿',
  XV:  '空中的石',
  XVI: '废墟与新',
  XVII: '暴露的结构',
  XVIII: '沙中的盒子',
  XIX: '漏斗的入口',
  XX:  '阿弥陀堂'
}
const captionFor = (num) => CAPTIONS[num] || ''
const romanNum = (i) => String(i.value + 1).padStart(2, '0')
const READING_POOL = {
  '建筑随笔': [
    { kind: '书',  role: '著', title: '《建筑的永恒之道》',       author: 'C·亚历山大' },
    { kind: '纪录片', role: '导演', title: '《My Architect》', author: 'S·威廉斯' }
  ],
  '空间速写': [
    { kind: '书',  role: '著', title: '《建筑空间论》',          author: '布鲁诺·赛维' },
    { kind: '书',  role: '著', title: '《场所的精神》',          author: '诺伯舒兹' }
  ],
  '案例研究': [
    { kind: '书',  role: '著', title: '《建筑语汇》',            author: '埃森曼' },
    { kind: '书',  role: '编', title: '《路易斯·康：秩序的理念》', author: 'A·拉斐尔' }
  ],
  '建筑评论': [
    { kind: '书',  role: '著', title: '《现代建筑——一部批判的历史》', author: 'F·弗莱舍尔' },
    { kind: '杂志', role: '编辑部', title: '《Domus》中文版',    author: '' }
  ],
  '展览观察': [
    { kind: '书',  role: '著', title: '《反造型》',              author: '塚本由晴' },
    { kind: '书',  role: '主编', title: '《有义务的装置》',       author: '高世名' }
  ],
  '改造案例': [
    { kind: '书',  role: '著', title: '《旧建筑改造与更新》',     author: '肯尼斯·鲍威尔' },
    { kind: '书',  role: '著', title: '《反建筑》',              author: 'A·科斯塔' }
  ],
  '速写集': [
    { kind: '书',  role: '著', title: '《意大利建筑速写》',       author: 'G·洛瓦特' },
    { kind: '杂志', role: '编辑部', title: '《a+u 建筑杂志》',     author: '' }
  ],
  '田野记录': [
    { kind: '书',  role: '著', title: '《场所·非场所》',         author: 'M·奥热' },
    { kind: '书',  role: '著', title: '《被忽视的建筑》',        author: 'R·文丘里' }
  ]
}

const readings = computed(() => {
  return READING_POOL[work.value?.kind] || [
    { kind: '—', role: '', title: '本期暂未列出参考', author: '' }
  ]
})
</script>

<template>
  <section v-if="work">
    <p class="num">— 02 — 作品</p>

    <header class="work-header">
      <div class="work-header__left">
        <p class="work-num">— {{ work.num }} —</p>
        <h1 class="work-title">{{ work.title }}</h1>
      </div>
      <div class="work-header__right">
        <dl class="work-facts">
          <div><dt>类别</dt><dd>{{ work.kind }}</dd></div>
          <div><dt>时间</dt><dd>{{ work.year }}</dd></div>
          <div><dt>地点</dt><dd>{{ work.location }}</dd></div>
        </dl>
      </div>
    </header>

    <figure class="work-cover">
      <img :src="`${BASE_URL}works/${work.cover}`" :alt="work.title" />
      <figcaption class="work-caption">
        <span class="cap-num">图 {{ romanNum(idx) }}</span>
        <span class="cap-sep">·</span>
        <span class="cap-loc">{{ work.location }}</span>
        <span class="cap-sep">·</span>
        <span class="cap-text">{{ captionFor(work.num) }}</span>
      </figcaption>
    </figure>

    <p class="work-lede">{{ work.desc }}</p>

    <div class="work-body">
      <p v-for="(p, i) in work.body" :key="i">{{ p }}</p>
    </div>

    <aside class="work-reading">
      <p class="reading-label">— 参 考 阅 读 —</p>
      <ul>
        <li v-for="(r, i) in readings" :key="i">
          <span class="r-kind">{{ r.kind }}</span>
          <span class="r-title">{{ r.title }}</span>
          <span v-if="r.author" class="r-by">{{ r.role }} · {{ r.author }}</span>
        </li>
      </ul>
    </aside>

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
  </section>
</template>

<style scoped>
.work-header {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: start;
  margin-top: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--ink);
}
.work-num {
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  color: var(--accent);
  letter-spacing: 0.2em;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
.work-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.05;
  font-style: italic;
  font-weight: 400;
  margin: 0;
  text-transform: none;
  letter-spacing: -0.01em;
}
.work-facts {
  display: grid;
  gap: 0.8rem;
  margin: 0;
  border-top: 1px solid var(--ink);
  padding-top: 1rem;
}
.work-facts > div {
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 0.5rem;
  font-size: 0.85rem;
  line-height: 1.4;
}
.work-facts dt {
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.7rem;
  padding-top: 0.15rem;
}
.work-facts dd { margin: 0; }

.work-cover {
  margin: 3rem 0 0 0;
  padding: 0;
  width: 100%;
  position: relative;
}
.work-cover img {
  width: 100%;
  height: auto;
  display: block;
}
.work-cover::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 75%, rgba(200, 85, 61, 0.06) 100%);
  pointer-events: none;
}
.work-caption {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  margin-top: 0.8rem;
  padding: 0 0 0 0.1rem;
  font-size: 0.8rem;
  color: var(--muted);
  font-style: italic;
  max-width: 50ch;
  line-height: 1.5;
}
.cap-num {
  font-family: var(--font-mono);
  font-style: normal;
  color: var(--accent);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
}
.cap-sep {
  color: var(--ink);
  opacity: 0.4;
  font-style: normal;
}
.cap-loc {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style: normal;
}
.cap-text {
  color: var(--ink);
}

.work-lede {
  font-size: 1.65rem;
  line-height: 1.45;
  font-style: italic;
  margin: 3.5rem 0 3.5rem 0;
  max-width: 30ch;
  margin-left: auto;
  color: var(--ink);
  font-family: var(--font-display);
  text-align: right;
  position: relative;
  padding: 1.2rem 0 1.2rem 0;
}
.work-lede::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 2.5rem;
  height: 2px;
  background: var(--accent);
}

.work-body {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--ink);
}
.work-body p { margin: 0 0 1.4rem 0; }
.work-body p:first-child::first-letter {
  font-size: 3.5em;
  float: left;
  line-height: 0.9;
  padding: 0.1rem 0.5rem 0 0;
  font-weight: 400;
  color: var(--accent);
  font-style: italic;
}

/* 参考阅读 */
.work-reading {
  margin-top: 4rem;
  padding: 2rem 0;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
  max-width: 70%;
  margin-left: auto;
}
.reading-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--muted);
  margin-bottom: 1rem;
}
.work-reading ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.work-reading li {
  display: grid;
  grid-template-columns: 4rem 1fr auto;
  gap: 1rem;
  padding: 0.6rem 0;
  border-bottom: 1px dotted rgba(0,0,0,0.18);
  align-items: baseline;
  font-size: 0.95rem;
}
.work-reading li:last-child { border-bottom: none; }
.r-kind {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.r-title {
  font-style: italic;
  color: var(--ink);
}
.r-by {
  color: var(--muted);
  font-size: 0.85rem;
  text-align: right;
  font-family: var(--font-mono);
  font-style: italic;
}

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

@media (max-width: 768px) {
  .work-header { grid-template-columns: 1fr; gap: 1.5rem; }
  .work-body { grid-template-columns: 1fr; gap: 1rem; }
  .work-lede { margin-left: 0; }
}
</style>
