<script setup>
import { useRoute } from 'vue-router'
import { works } from '../data/works.js'

const route = useRoute()
const BASE_URL = import.meta.env.BASE_URL

// 手工 15 字内图说: 比截取正文更准
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

const plates = works.map(w => ({
  num: w.num,
  cover: w.cover,
  title: w.title,
  location: w.location,
  year: w.year,
  caption: CAPTIONS[w.num] || w.title
}))
</script>

<template>
  <section>
    <p class="num">— {{ route.meta.num }} — {{ route.meta.title }}</p>
    <h2>图版</h2>

    <div class="plates-intro">
      <p class="dropcap">
        本卷共 20 张图，按收录顺序排列。每张图附一句图说，
        不做编辑性叙述，只标在场所里看到的具体事实。
        若想看完整文章，请回到
        <router-link to="/works">作品目录</router-link>。
      </p>
    </div>

    <ol class="plates-list">
      <li v-for="(p, i) in plates" :key="p.num" :class="['plate', i % 3 === 1 ? 'plate-offset' : '']">
        <figure>
          <router-link :to="{ name: 'work', params: { num: p.num } }">
            <img :src="`${BASE_URL}works/${p.cover}`" :alt="p.title" loading="lazy" />
          </router-link>
          <figcaption>
            <div class="plate-meta">
              <span class="plate-num">{{ p.num }}</span>
              <span class="plate-divider">·</span>
              <span class="plate-loc">{{ p.location }}</span>
              <span class="plate-divider">·</span>
              <span class="plate-year">{{ p.year }}</span>
            </div>
            <div class="plate-title">
              <router-link :to="{ name: 'work', params: { num: p.num } }">{{ p.title }}</router-link>
            </div>
            <p class="plate-caption">{{ p.caption }}</p>
          </figcaption>
        </figure>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.plates-intro {
  margin: 1.5rem 0 3rem 0;
  max-width: 60ch;
  font-size: 1.05rem;
  line-height: 1.85;
  font-style: italic;
  color: var(--muted);
}

.plates-list {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem 2.5rem;
  margin: 0;
  padding: 0;
}
.plate {
  break-inside: avoid;
}
.plate-offset {
  transform: translateY(3rem);
}

.plate figure { margin: 0; }
.plate img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 1rem;
  border: 1px solid rgba(0,0,0,0.1);
  transition: transform 0.4s ease, opacity 0.2s;
}
.plate a:hover img { opacity: 0.85; }

.plate-meta {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  margin-bottom: 0.3rem;
}
.plate-num { color: var(--accent); }
.plate-divider { opacity: 0.5; }

.plate-title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-style: italic;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}
.plate-title a { border: none; }
.plate-title a:hover { color: var(--accent); }

.plate-caption {
  font-size: 1.02rem;
  line-height: 1.5;
  color: var(--ink);
  font-style: italic;
  max-width: 32ch;
  margin: 0;
  padding-left: 0.7rem;
  border-left: 2px solid var(--accent);
  opacity: 0.85;
}

@media (max-width: 900px) {
  .plates-list { grid-template-columns: 1fr 1fr; gap: 3rem 2rem; }
  .plate-offset { transform: none; }
}
@media (max-width: 600px) {
  .plates-list { grid-template-columns: 1fr; }
}
</style>
