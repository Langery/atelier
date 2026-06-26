<script setup>
// 勘误数据 (静态, v-html 安全: 内容由编者手写, 非用户输入)
const errata = [
  {
    page: 'p. 03',
    orig: '"安藤忠雄 1975 年设计"',
    fixHtml: '"安藤忠雄 1975 年 <em>开始构思</em>，1976 年建成。"'
  },
  {
    page: 'p. 07',
    orig: '"威尼斯 53 个岛"',
    fixHtml: '"威尼斯 118 个岛（按 2023 年行政区划）。"'
  },
  {
    page: 'p. 12',
    orig: '"苏州博物馆 2006 年完工"',
    fixHtml: '"苏州博物馆 <em>2006 年 10 月开放</em>，建筑实际于 2005 年秋封顶。"'
  },
  {
    page: 'p. 17',
    orig: '"石经山房 5 个体量"',
    fixHtml: '"5 个 <em>主要</em>体量，外加 1 个半埋地下的茶室。"'
  },
  {
    page: 'p. 19',
    orig: '"凤凰堂 1053 年"',
    fixHtml: '"中堂 1053 年（藤原道长），翼廊/尾廊为后来补建。"'
  }
]
</script>

<template>
  <article class="errata">
    <header>
      <p class="num">— 本期勘误 —</p>
      <h3>二〇二六年五月</h3>
    </header>
    <ol class="errata-list">
      <li v-for="(e, i) in errata" :key="i">
        <span class="errata-page">{{ e.page }}</span>
        <span class="errata-orig">{{ e.orig }}</span>
        <span class="errata-arrow">→</span>
        <span class="errata-fix" v-html="e.fixHtml"></span>
      </li>
    </ol>
    <p class="errata-ty">
      本表不录入图片色差，色差问题请参本期图版页面对照实物。
    </p>
  </article>
</template>

<style scoped>
.errata {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 2.6fr;
  gap: 4rem;
  align-items: start;
}
.errata header {
  border-top: 2px solid var(--ink);
  padding-top: 1.5rem;
  position: sticky;
  top: 1rem;
}
.errata h3 {
  font-size: 1.8rem;
  font-style: italic;
  font-weight: 400;
  margin: 0.5rem 0 0 0;
  text-transform: none;
  letter-spacing: 0;
}
.errata-list {
  list-style: none;
  border-top: 2px solid var(--ink);
  padding-top: 1.5rem;
  margin: 0;
}
.errata-list li {
  display: grid;
  grid-template-columns: 4rem 1fr auto 1fr;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px dotted rgba(0,0,0,0.2);
  align-items: baseline;
  font-size: 0.95rem;
  line-height: 1.5;
}
.errata-page {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
  letter-spacing: 0.1em;
}
.errata-orig {
  color: var(--muted);
  text-decoration: line-through;
  text-decoration-color: var(--accent);
}
.errata-arrow {
  color: var(--muted);
  text-align: center;
  font-family: var(--font-mono);
}
.errata-fix {
  color: var(--ink);
}
.errata-fix em {
  font-style: normal;
  background: rgba(200, 85, 61, 0.12);
  padding: 0 0.15em;
}
.errata-ty {
  grid-column: 2;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--muted);
}

@media (max-width: 768px) {
  .errata { grid-template-columns: 1fr; gap: 1.5rem; }
  .errata header { position: static; }
  .errata-list li { grid-template-columns: 1fr; gap: 0.4rem; }
  .errata-arrow { display: none; }
  .errata-ty { grid-column: 1; }
}
</style>
