<script setup>
import { computed } from 'vue'

const props = defineProps({
  work: { type: Object, required: true },
  idx: { type: Number, required: true }
})

const BASE_URL = import.meta.env.BASE_URL

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
const figureNo = computed(() => String(props.idx + 1).padStart(2, '0'))
</script>

<template>
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
      <span class="cap-num">图 {{ figureNo }}</span>
      <span class="cap-sep">·</span>
      <span class="cap-loc">{{ work.location }}</span>
      <span class="cap-sep">·</span>
      <span class="cap-text">{{ captionFor(work.num) }}</span>
    </figcaption>
  </figure>
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

@media (max-width: 768px) {
  .work-header { grid-template-columns: 1fr; gap: 1.5rem; }
}
</style>
