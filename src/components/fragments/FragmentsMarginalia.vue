<script setup>
const marginalia = [
  { date: '04.12', loc: '直岛',  text: '上午十点整，海面反光从南窗进入，11:35 离开。' },
  { date: '04.13', loc: '京都',  text: '门框最亮的漆痕不在中央，在右下角偏一寸的位置。' },
  { date: '05.02', loc: '大阪',  text: '雨从中庭下来的速度，比天气预报说的要慢约三分钟。' },
  { date: '05.04', loc: '罗马',  text: '下午三点，柱影向自身倒去，几乎要踩住自己。' },
  { date: '05.18', loc: '苏州',  text: '同里东桥下，水色比瓦色更接近天空。' },
  { date: '05.22', loc: '直岛',  text: '地中美术馆的电梯门关合需要 7 秒，长于一般电梯。' },
  { date: '05.27', loc: '—',     text: '今日未出门。在桌前整理三月份以来的速写。' },
  { date: '05.30', loc: '北京',  text: '胡同口的槐花已经落尽，地上一片黄白色。' }
]
</script>

<template>
  <section class="frag-marginalia">
    <p class="block-label">速 记 本</p>
    <ol class="marg-list">
      <li v-for="(m, i) in marginalia" :key="i" class="marg-item">
        <span class="marg-date">{{ m.date }}</span>
        <span class="marg-loc">{{ m.loc }}</span>
        <span class="marg-text">{{ m.text }}</span>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.frag-marginalia {
  padding-top: 3rem;
  border-top: 2px solid var(--ink);
}

.block-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--muted);
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--ink);
}

.marg-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.marg-item {
  display: grid;
  grid-template-columns: 4rem 4.5rem 1fr;
  gap: 1.2rem;
  padding: 0.85rem 0;
  border-bottom: 1px dotted rgba(0,0,0,0.18);
  align-items: baseline;
}
.marg-item:last-child { border-bottom: none; }
.marg-date {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
  font-style: italic;
  letter-spacing: 0.05em;
}
.marg-loc {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
.marg-text {
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--ink);
}
</style>
