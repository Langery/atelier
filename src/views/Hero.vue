<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <section>
    <p class="num">— {{ route.meta.num }} — {{ route.meta.title }}</p>
    <h2>创刊号</h2>

    <div class="about-grid">
      <div class="about-lead">
        <p>
          本刊收录近年来关于建筑、空间与光线的若干观察。
          它们不是图纸，也不是评论——更接近一个人在现场
          站着看了一下午之后，记下的几句话。
        </p>
        <p class="about-read">
          建议读法：先看
          <router-link to="/plates">图版</router-link>，
          再回到
          <router-link to="/works">作品</router-link>
          挑感兴趣的读。
        </p>
      </div>

      <aside class="about-aside">
        <dl>
          <dt>卷期</dt>
          <dd>第 01 卷 · 2026</dd>
          <dt>编者</dt>
          <dd>佚名</dd>
          <dt>印刷</dt>
          <dd>GitHub Pages</dd>
          <dt>关注</dt>
          <dd>建筑空间 · 室内光线</dd>
        </dl>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 5rem;
  align-items: start;
}
.about-lead p {
  font-size: 1.2rem;
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
  max-width: 38ch;
}
.about-read {
  font-size: 0.95rem !important;
  font-style: italic;
  color: var(--muted);
  border-top: 1px solid var(--ink);
  padding-top: 1.5rem;
  margin-top: 1.5rem;
}
.about-read a {
  border-bottom: 1px solid currentColor;
  color: var(--ink);
  font-style: normal;
}
.about-read a:hover { color: var(--accent); }

.about-aside {
  padding-top: 0.4rem;
  border-top: 2px solid var(--ink);
}
.about-aside dt {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--muted);
  margin: 1.2rem 0 0.3rem 0;
}
.about-aside dt:first-child { margin-top: 0.8rem; }
.about-aside dd {
  margin: 0;
  font-size: 1rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 2rem; }
}
</style>
