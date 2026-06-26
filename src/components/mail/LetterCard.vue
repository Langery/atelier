<script setup>
defineProps({
  letter: { type: Object, required: true },
  index: { type: Number, required: true },
  expanded: { type: Boolean, required: true }
})
const emit = defineEmits(['toggle'])
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
</script>

<template>
  <article class="letter">
    <!-- 左侧档案号 -->
    <div class="letter-num">
      <span class="num-roman">{{ ROMAN[index] }}</span>
      <span class="num-arabic">No. {{ String(letter.id).padStart(2, '0') }}</span>
    </div>

    <!-- 右侧内容 -->
    <div class="letter-main">
      <header class="letter-head">
        <p class="letter-meta">
          <span class="meta-from">{{ letter.from }}</span>
          <span class="meta-sep">·</span>
          <span class="meta-loc">{{ letter.loc }}</span>
          <span class="meta-sep">·</span>
          <span class="meta-date">{{ letter.date }}</span>
        </p>
        <h3 class="letter-to">
          <span class="to-label">关于</span>{{ letter.to }}
          <span :class="['letter-status', letter.status === '已删节' ? 'restricted' : '']">{{ letter.status }}</span>
        </h3>
      </header>

      <div class="letter-body">
        <p
          v-for="(p, i) in (expanded ? letter.body : letter.body.slice(0, 2))"
          :key="i"
        >
          {{ p }}
        </p>
        <button
          v-if="letter.body.length > 2"
          :class="['letter-toggle', { open: expanded }]"
          @click="emit('toggle', letter.id)"
        >
          {{ expanded ? '— 收起回信' : '→ 展开回信 (' + letter.body.length + ' 段)' }}
        </button>
      </div>

      <div
        v-if="expanded"
        class="letter-reply"
      >
        <p class="reply-label">
          <span class="reply-mark">§</span>
          <span>编　者　回</span>
        </p>
        <p
          v-for="(p, i) in letter.reply"
          :key="i"
        >
          {{ p }}
        </p>
        <p class="reply-end">——</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
/* 单封信: 2 列 grid (左 档案号 / 右 内容) */
.letter {
  display: grid;
  grid-template-columns: 4.5rem 1fr;
  gap: 2.5rem;
  margin-bottom: 5rem;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
}
.letter:last-child { border-bottom: none; }

/* 左侧档案号 */
.letter-num {
  text-align: right;
  border-right: 1px solid var(--ink);
  padding-right: 1rem;
  padding-top: 0.3rem;
}
.num-roman {
  display: block;
  font-family: var(--font-display);
  font-size: 2rem;
  font-style: italic;
  line-height: 1;
  color: var(--accent);
  letter-spacing: 0.02em;
}
.num-arabic {
  display: block;
  margin-top: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
}

/* 右侧内容 */
.letter-main {
  min-width: 0;
}
.letter-head {
  margin-bottom: 1.8rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.3);
}
.letter-meta {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  margin: 0 0 0.7rem 0;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  color: var(--muted);
}
.meta-from { color: var(--ink); font-weight: 600; }
.meta-sep { opacity: 0.4; }
.letter-to {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.5rem;
  line-height: 1.3;
  color: var(--ink);
  margin: 0;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.to-label {
  font-family: var(--font-sans);
  font-style: normal;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--muted);
  text-transform: uppercase;
  font-weight: 600;
  margin-right: 0.3rem;
}
.letter-status {
  display: inline-block;
  margin-left: auto;
  padding: 2px 0.55rem;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  border: 1px solid var(--accent);
  vertical-align: middle;
  font-style: normal;
}
.letter-status.restricted {
  color: var(--ink);
  border-color: var(--ink);
  background: rgba(0, 0, 0, 0.04);
}

/* 正文 */
.letter-body {
  max-width: 64ch;
  font-size: 1rem;
  line-height: 1.9;
  color: var(--ink);
}
.letter-body p {
  margin: 0 0 1rem 0;
  text-indent: 0;
}
.letter-body p:first-child {
  text-indent: 0;
}

/* 回信: 左边 3px 赭红竖线, italic 灰字 */
.letter-reply {
  max-width: 64ch;
  margin-top: 2.5rem;
  padding: 1.5rem 0 0 1.5rem;
  border-left: 3px solid var(--accent);
  font-size: 0.95rem;
  line-height: 1.9;
  color: var(--muted);
  font-style: italic;
}
.reply-label {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  font-family: var(--font-sans);
  font-style: normal;
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  color: var(--accent);
  text-transform: uppercase;
  margin: 0 0 1.2rem 0;
  font-weight: 600;
}
.reply-mark {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
  color: var(--accent);
  line-height: 0.8;
}
.letter-reply p {
  margin: 0 0 0.9rem 0;
}
.reply-end {
  text-align: right;
  margin: 1.5rem 0 0 0 !important;
  letter-spacing: 0.5em;
  color: var(--accent) !important;
  font-size: 0.9rem;
  font-style: normal;
}

/* 展开/收起按钮 */
.letter-toggle {
  display: inline-block;
  margin-top: 1.2rem;
  padding: 0.5rem 0;
  background: none;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.2s;
}
.letter-toggle:hover {
  color: var(--accent);
  border-color: var(--accent);
}
.letter-toggle.open {
  color: var(--ink);
  border-color: var(--ink);
}

@media (max-width: 768px) {
  .letter {
    grid-template-columns: 3rem 1fr;
    gap: 1rem;
  }
  .num-roman { font-size: 1.4rem; }
  .letter-to { font-size: 1.2rem; }
  .letter-status { margin-left: 0; margin-top: 0.5rem; }
  .letter-reply { padding-left: 1rem; }
}
</style>
