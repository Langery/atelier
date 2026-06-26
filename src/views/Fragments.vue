<script setup>
import { useRoute } from 'vue-router'
import FragmentsMain from '../components/fragments/FragmentsMain.vue'
import FragmentsMarginalia from '../components/fragments/FragmentsMarginalia.vue'

const route = useRoute()
</script>

<template>
  <section>
    <p class="num">— {{ route.meta.num }} — {{ route.meta.title }}</p>
    <h2>片段</h2>

    <p class="frag-intro">
      这里不是文章，是没写完的想法、突然的发现、或者一句话就够了的事。
      几段散文，几行速记，几个引文。按主题排了排，又觉得太规整，于是打散了重新来。
    </p>

    <FragmentsMain />
    <FragmentsMarginalia />
  </section>
</template>

<style scoped>
.frag-intro {
  margin: 3rem 0 5rem 0;
  max-width: 38ch;
  font-size: 1.05rem;
  line-height: 1.85;
  font-style: italic;
  color: var(--muted);
  margin-left: auto;
}
</style>
