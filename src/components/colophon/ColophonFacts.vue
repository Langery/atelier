<template>
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

@media (max-width: 768px) {
  .colophon-grid { grid-template-columns: 1fr 1fr; gap: 1.5rem; }
}
</style>
