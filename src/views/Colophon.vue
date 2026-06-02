<script setup>
import { useRoute } from 'vue-router'
import { works } from '../data/works.js'
const route = useRoute()
</script>

<template>
  <section>
    <p class="num">— {{ route.meta.num }} — {{ route.meta.title }}</p>
    <h2>版权页</h2>

    <div class="colophon-grid">
      <dl>
        <dt>编者</dt>
        <dd>佚名</dd>

        <dt>所在地</dt>
        <dd>—</dd>

        <dt>联系</dt>
        <dd><a href="mailto:hello@example.com">hello@example.com</a></dd>
      </dl>

      <dl>
        <dt>字体</dt>
        <dd>EB Garamond / Source Han Serif SC</dd>

        <dt>栈</dt>
        <dd>Vue 3 · Vite · vue-router</dd>

        <dt>部署</dt>
        <dd>GitHub Pages</dd>
      </dl>

      <dl>
        <dt>版权</dt>
        <dd>© 2026 佚名</dd>

        <dt>许可</dt>
        <dd>CC BY-NC 4.0</dd>

        <dt>最近修订</dt>
        <dd>2026.05.29</dd>
      </dl>
    </div>

    <article class="postscript">
      <header>
        <p class="num">— 编后手记 —</p>
        <h3>写给翻开这本的读者</h3>
      </header>

      <div class="ps-body">
        <p>
          这本册子本来不是给外人看的。它最初是一个本子，
          夹在速写本和相机之间，页边发黄，角上有时沾着
          一小片茶渍。把它搬到屏幕上，是想让那些只在
          现场站过一个下午的人，也能被记得。
        </p>

        <p>
          选图的逻辑也想了一下。最初想用现场照片，
          后来觉得那会让人误以为是项目集。改用编者
          自己手作的配图，反而更诚实：它们不是记录，
          是重述。读者看到的是"编者当时怎么看见的"，
          而不是"那栋建筑是什么样子"。
        </p>

        <p>
          关于体例。本期不收评论，不收访谈，不收专业术语。
          偶尔会出现建筑师的名字，但只是地标，不是主角。
          写的是一些去过现场的人都能写出来的东西——
          区别只在站得够不够久、记得够不够细。
        </p>

        <p>
          写的时候卡过壳。最难写的不是安藤忠雄那篇，
          而是江南民居那一篇——理由越朴素越难落笔。
          后来发现一个办法：去查自己的照片。
          拍照的时候不思考，回来翻看时却能记起当时
          所有的温度。一张照片比一段记忆稳。
        </p>

        <p>
          本期不打算再做下去。第二卷的目录已经在另一本
          速写本上列了提纲，但还远未到印刷的时候。
          如果你在某处也做过类似的事——不一定是建筑，
          任何一件让你站着看了一下午的东西——
          欢迎来信告诉编者。
        </p>

        <p class="ps-sign">— 编者 · 二〇二六年春</p>
      </div>

      <footer class="ps-tail">
        <dl>
          <dt>本期收录</dt>
          <dd>{{ works.length }} 篇</dd>
          <dt>配图</dt>
          <dd>封面与正文图均为编者手作</dd>
          <dt>下一卷</dt>
          <dd>待刊</dd>
        </dl>
      </footer>
    </article>

    <article class="errata">
      <header>
        <p class="num">— 本期勘误 —</p>
        <h3>二〇二六年五月</h3>
      </header>
      <ol class="errata-list">
        <li>
          <span class="errata-page">p. 03</span>
          <span class="errata-orig">"安藤忠雄 1975 年设计"</span>
          <span class="errata-arrow">→</span>
          <span class="errata-fix">"安藤忠雄 1975 年 <em>开始构思</em>，1976 年建成。"</span>
        </li>
        <li>
          <span class="errata-page">p. 07</span>
          <span class="errata-orig">"威尼斯 53 个岛"</span>
          <span class="errata-arrow">→</span>
          <span class="errata-fix">"威尼斯 118 个岛（按 2023 年行政区划）。"</span>
        </li>
        <li>
          <span class="errata-page">p. 12</span>
          <span class="errata-orig">"苏州博物馆 2006 年完工"</span>
          <span class="errata-arrow">→</span>
          <span class="errata-fix">"苏州博物馆 <em>2006 年 10 月开放</em>，建筑实际于 2005 年秋封顶。"</span>
        </li>
        <li>
          <span class="errata-page">p. 17</span>
          <span class="errata-orig">"石经山房 5 个体量"</span>
          <span class="errata-arrow">→</span>
          <span class="errata-fix">"5 个 <em>主要</em>体量，外加 1 个半埋地下的茶室。"</span>
        </li>
        <li>
          <span class="errata-page">p. 19</span>
          <span class="errata-orig">"凤凰堂 1053 年"</span>
          <span class="errata-arrow">→</span>
          <span class="errata-fix">"中堂 1053 年（藤原道长），翼廊/尾廊为后来补建。"</span>
        </li>
      </ol>
      <p class="errata-ty">
        本表不录入图片色差，色差问题请参本期图版页面对照实物。
      </p>
    </article>

    <p class="fin">— 完 —</p>
  </section>
</template>

<style scoped>
.colophon-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 2rem;
  row-gap: 2.2rem;
  margin-top: 3rem;
  padding: 3rem 0;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
}
dl dt {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--muted);
  margin-bottom: 0.35rem;
  font-family: 'Courier New', monospace;
}
dl dd {
  margin: 0 0 1.2rem 0;
  font-size: 1.05rem;
  line-height: 1.4;
}

.postscript {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 2.6fr;
  gap: 4rem;
  align-items: start;
}
.postscript header {
  border-top: 2px solid var(--ink);
  padding-top: 1.5rem;
  position: sticky;
  top: 1rem;
}
.postscript h3 {
  font-size: 1.8rem;
  font-style: italic;
  font-weight: 400;
  margin: 0.5rem 0 0 0;
  text-transform: none;
  letter-spacing: 0;
}
.ps-body {
  font-size: 1.1rem;
  line-height: 1.9;
  border-top: 2px solid var(--ink);
  padding-top: 1.5rem;
  max-width: none;
}
.ps-body p {
  margin: 0 0 1.6rem 0;
  max-width: none;
  text-indent: 2em;
}
.ps-body p:first-child {
  text-indent: 0;
}
.ps-body p:first-child::first-letter {
  font-size: 3.2em;
  float: left;
  line-height: 0.9;
  padding: 0.15rem 0.6rem 0 0;
  font-weight: 400;
  color: var(--accent);
  font-style: italic;
}
.ps-sign {
  margin-top: 2.5rem !important;
  text-align: right;
  font-style: italic;
  color: var(--muted);
}

.ps-tail {
  grid-column: 2;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--ink);
}
.ps-tail dl {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.ps-tail dt {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--muted);
  margin-bottom: 0.3rem;
  font-family: 'Courier New', monospace;
}
.ps-tail dd {
  margin: 0;
  font-size: 1rem;
}

.fin {
  text-align: center;
  margin-top: 5rem;
  font-style: italic;
  font-size: 1.2rem;
  color: var(--muted);
}

/* 勘误 */
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
  .colophon-grid { grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  .postscript { grid-template-columns: 1fr; gap: 1.5rem; }
  .postscript header { position: static; }
  .ps-tail { grid-column: 1; }
  .ps-tail dl { grid-template-columns: 1fr; gap: 1rem; }
  .errata { grid-template-columns: 1fr; gap: 1.5rem; }
  .errata header { position: static; }
  .errata-list li { grid-template-columns: 1fr; gap: 0.4rem; }
  .errata-arrow { display: none; }
  .errata-ty { grid-column: 1; }
}
</style>
