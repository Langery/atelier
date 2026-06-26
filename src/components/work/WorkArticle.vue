<script setup>
defineProps({
  work: { type: Object, required: true }
})
</script>

<template>
  <p class="work-lede">{{ work.desc }}</p>
  <div class="work-body">
    <p v-for="(p, i) in work.body" :key="i">{{ p }}</p>
  </div>
</template>

<style scoped>
.work-lede {
  font-size: 1.65rem;
  line-height: 1.45;
  font-style: italic;
  margin: 3.5rem 0 3.5rem 0;
  max-width: 30ch;
  margin-left: auto;
  color: var(--ink);
  font-family: var(--font-display);
  text-align: right;
  position: relative;
  padding: 1.2rem 0 1.2rem 0;
}
.work-lede::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 2.5rem;
  height: 2px;
  background: var(--accent);
}

.work-body {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--ink);
}
.work-body p { margin: 0 0 1.4rem 0; }
.work-body p:first-child::first-letter {
  font-size: 3.5em;
  float: left;
  line-height: 0.9;
  padding: 0.1rem 0.5rem 0 0;
  font-weight: 400;
  color: var(--accent);
  font-style: italic;
}

@media (max-width: 768px) {
  .work-body { grid-template-columns: 1fr; gap: 1rem; }
  .work-lede { margin-left: 0; }
}
</style>
