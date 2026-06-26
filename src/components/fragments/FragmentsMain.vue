<script setup>
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
</template>

<style scoped>
.frag-main {
  display: grid;
  grid-template-columns: 1fr 2.2fr;
  gap: 5rem;
  margin-bottom: 5rem;
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

@media (max-width: 768px) {
  .frag-main { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
