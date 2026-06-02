<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

// 编者手记式短句 (marginalia)
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

const quotes = [
  { text: '建筑始于一块石头被放置在地上。',         by: '路易斯·康' },
  { text: '建筑是凝固的音乐。',                     by: '黑格尔' },
  { text: '少即是多。',                             by: '密斯·凡德罗' }
]

const essays = [
  { num: '01', title: '光',        paragraphs: [
    '一座建筑最动人的部分，往往是光到达它的方式。',
    '清水混凝土墙面上的光斑随季节移动，它不需要被看见，但缺席时，整栋建筑便失去了呼吸。',
    '写光不是写亮度，是写光和拒绝光的边界——那条边界线才是建筑。',
    '墙面的温度比空气慢半度，被光打到的一面又比阴面慢半度。这两个半度加起来，就是光和影的重量差。'
  ]},
  { num: '02', title: '把目光放慢',    paragraphs: [
    '把目光放慢，用手丈量台阶的宽度、屋檐的出挑、墙面的凹凸。测绘是一种谦逊的观看。',
    '卷尺、笔记本、一支 4B 铅笔就够。复杂的是心——能不能接受测出来的数据和感觉不一致。',
    '测绘最忌讳的是补全。看到一个残缺的榫卯，不要替它补完。残缺里藏着时间和使用方式。'
  ]},
  { num: '03', title: '在角落蹲下',    paragraphs: [
    '一栋建筑最有意思的地方，往往不是中央，是角落。',
    '中央是给外人看的，角落是给自己待的。墙与墙交接的那条线，门与地面相接的那道缝——这些地方建筑师很少停留，但它们决定一栋建筑会不会住人。',
    '拍照时先拍大景，再慢慢走到角落蹲下。后者通常更安静，也更值得。'
  ]},
  { num: '04', title: '建筑是时间的三种形式之一',  paragraphs: [
    '建筑是时间的三种形式之一：石头的时间、空间的时间、人走过的时间。',
    '真正要理解一栋建筑，得在同一处看三遍：上午一遍，傍晚一遍，夜里一遍。三遍之后，你才知道这栋建筑是不是真的住着。',
    '建筑是不是好作品，时间说了算——但这个时间往往比建筑师的一生还要长。'
  ]}
]
</script>

<template>
  <section>
    <p class="num">— {{ route.meta.num }} — {{ route.meta.title }}</p>
    <h2>片段</h2>

    <!-- 1. 引言: 一段话, 单列, 居中 -->
    <p class="frag-intro">
      这里不是文章，是没写完的想法、突然的发现、或者一句话就够了的事。
      几段散文，几行速记，几个引文。按主题排了排，又觉得太规整，于是打散了重新来。
    </p>

    <!-- 2. 引文 + 随笔: 两列, 整齐等高 -->
    <div class="frag-main">
      <aside class="frag-quotes">
        <p class="block-label">引 文</p>
        <blockquote v-for="(q, i) in quotes" :key="i">
          <p>「{{ q.text }}」</p>
          <cite>—— {{ q.by }}</cite>
        </blockquote>
      </aside>

      <div class="frag-essays">
        <p class="block-label">散 文</p>
        <article v-for="e in essays" :key="e.num" class="frag-essay">
          <p class="essay-num">— {{ e.num }} —</p>
          <h3 class="essay-title">{{ e.title }}</h3>
          <p v-for="(p, i) in e.paragraphs" :key="i">{{ p }}</p>
        </article>
      </div>
    </div>

    <!-- 3. 速记本: 单列, 8 条, 节奏稳定 -->
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
  </section>
</template>

<style scoped>
/* ===== 全局 reset ===== */
.frag-intro, .frag-main, .frag-marginalia {
  border: none;
  padding: 0;
  margin: 0;
}

/* ===== 1. 引言: 单列窄栏, 居左偏中 ===== */
.frag-intro {
  margin: 3rem 0 5rem 0;
  max-width: 38ch;
  font-size: 1.05rem;
  line-height: 1.85;
  font-style: italic;
  color: var(--muted);
  margin-left: auto;       /* 右对齐窄栏 */
}

/* ===== 2. 主区: 引文(左) + 随笔(右) ===== */
.frag-main {
  display: grid;
  grid-template-columns: 1fr 2.2fr;
  gap: 5rem;
  margin-bottom: 5rem;
  padding-top: 3rem;
  border-top: 2px solid var(--ink);
}

/* 块标签: 灰色等宽, 小字, 上方统一 */
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

/* 引文: 单列, 三个 blockquote 整齐堆叠, 不用错位 */
.frag-quotes blockquote {
  margin: 0 0 1.8rem 0;
  padding: 0 0 0 1.2rem;
  border-left: 2px solid var(--accent);
}
.frag-quotes blockquote:last-child { margin-bottom: 0; }
.frag-quotes blockquote p {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-style: italic;
  line-height: 1.5;
  margin: 0 0 0.4rem 0;
  color: var(--ink);
}
.frag-quotes blockquote cite {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-style: normal;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* 随笔: 单列, 整齐 4 段块, 不再 2 列错位 */
.frag-essays {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.frag-essay {
  padding-bottom: 2.5rem;
  border-bottom: 1px dotted rgba(0,0,0,0.2);
}
.frag-essay:last-child { border-bottom: none; padding-bottom: 0; }
.frag-essay .essay-num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent);
  letter-spacing: 0.15em;
  margin: 0 0 0.3rem 0;
}
.frag-essay .essay-title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-style: italic;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  margin: 0 0 1rem 0;
}
.frag-essay p {
  font-size: 0.98rem;
  line-height: 1.75;
  margin: 0 0 0.8rem 0;
  max-width: 50ch;
}
.frag-essay p:last-child { margin-bottom: 0; }

/* ===== 3. marginalia: 单列堆叠, 不再分栏 ===== */
.frag-marginalia {
  padding-top: 3rem;
  border-top: 2px solid var(--ink);
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

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .frag-intro { margin-left: 0; }
  .frag-main { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
