<script setup>
import { usePaperPreference } from '../../composables/usePaperPreference.js'

const { paperAged, togglePaper } = usePaperPreference()
</script>

<template>
  <footer class="colophon-foot">
    <div class="foot-upper">
      <div class="foot-col">
        <p class="foot-label">卷期</p>
        <p>Atelier · 第二十卷</p>
        <p>本卷 20 篇 · 二〇二六年春</p>
      </div>
      <div class="foot-col">
        <p class="foot-label">本卷目录</p>
        <p>00 创刊号 / 01 序言</p>
        <p>02 作品 / 02.5 图版</p>
        <p>03 片段 / 04 版权页</p>
      </div>
      <div class="foot-col">
        <p class="foot-label">编者</p>
        <p>主编 / 编辑 / 摄影 / 排版</p>
        <p>—— 同一人</p>
        <p class="foot-quiet">来信不必回复。</p>
      </div>
      <div class="foot-col">
        <p class="foot-label">纸张</p>
        <p>本卷由编者设色,</p>
        <p>可在两版之间切换。</p>
        <p class="foot-paper">
          <span class="foot-paper__label">当前 ·</span>
          <button
            :class="['paper-toggle', { on: paperAged }]"
            @click="togglePaper"
            :title="paperAged ? '切换为新纸' : '切换为旧纸'"
          >{{ paperAged ? '枯纸' : '新纸' }}</button>
        </p>
      </div>
    </div>

    <div class="foot-lower">
      <p class="foot-lower__left">© 二〇二六年 · 制作人 / 设计师 —— 同一人</p>
      <p class="foot-lower__center">本卷由编者一人完成, 采用半旧印刷模拟。</p>
      <p class="foot-lower__mark">A</p>
    </div>
  </footer>
</template>
