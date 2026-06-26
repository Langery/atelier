<script setup>
import { works } from '../../data/works.js'
</script>

<template>
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
</template>

<style scoped>
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

@media (max-width: 768px) {
  .postscript { grid-template-columns: 1fr; gap: 1.5rem; }
  .postscript header { position: static; }
  .ps-tail { grid-column: 1; }
  .ps-tail dl { grid-template-columns: 1fr; gap: 1rem; }
}
</style>
