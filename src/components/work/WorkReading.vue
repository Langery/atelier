<script setup>
import { computed } from 'vue'

const props = defineProps({
  work: { type: Object, required: true }
})

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

const readings = computed(() =>
  READING_POOL[props.work.kind] || [
    { kind: '—', role: '', title: '本期暂未列出参考', author: '' }
  ]
)
</script>

<template>
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
</template>

<style scoped>
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
</style>
