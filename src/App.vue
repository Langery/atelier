<script setup>
import { onMounted, onUnmounted, ref, watch, computed } from 'vue'
import { RouterView, RouterLink, useRoute, useRouter } from 'vue-router'
import { works } from './data/works.js'

const route = useRoute()
const router = useRouter()
const progressWidth = ref('0%')
const showTop = ref(false)
const paperAged = ref(false)

// 栏头显示控制 (翻上下篇时的杂志"卷首"提示)
const bannerVisible = ref(false)
const bannerText = ref('')
const bannerKey = ref(0) // 强制重渲染触发 transition

// 计算当前作品 (含前后篇)
const workContext = computed(() => {
  if (route.name !== 'work' || !route.params.num) return null
  const idx = works.findIndex(w => w.num === route.params.num)
  if (idx < 0) return null
  return {
    cur: works[idx],
    prev: idx === 0 ? works[works.length - 1] : works[idx - 1],
    next: idx === works.length - 1 ? works[0] : works[idx + 1]
  }
})

function showBanner() {
  const ctx = workContext.value
  if (!ctx) return
  bannerText.value = `${ctx.cur.num}  ·  上一期 ${ctx.prev.num}  ·  下一期 ${ctx.next.num}  ·  ${ctx.cur.title}`
  bannerKey.value++
  bannerVisible.value = true
  setTimeout(() => { bannerVisible.value = false }, 1800)
}

watch(() => route.params.num, () => {
  if (route.name === 'work') showBanner()
})

function onKey(e) {
  const tag = (e.target.tagName || '').toLowerCase()
  if (['input', 'textarea', 'select'].includes(tag)) return
  if (e.metaKey || e.ctrlKey || e.altKey) return

  // ← / → 在作品页翻上/下篇 (首尾循环)
  if (route.name === 'work') {
    const idx = works.findIndex(w => w.num === route.params.num)
    if (idx >= 0) {
      if (e.key === 'ArrowLeft') {
        const p = idx === 0 ? works.length - 1 : idx - 1
        router.push({ name: 'work', params: { num: works[p].num } })
      } else if (e.key === 'ArrowRight') {
        const p = idx === works.length - 1 ? 0 : idx + 1
        router.push({ name: 'work', params: { num: works[p].num } })
      }
    }
  }

  // 数字键 0-4 跳页
  const navMap = { '0': 'hero', '1': 'about', '2': 'works', '3': 'fragments', '4': 'colophon' }
  if (navMap[e.key]) {
    e.preventDefault()
    router.push({ name: navMap[e.key] })
  }
}

function onScroll() {
  const h = document.documentElement
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
  progressWidth.value = scrolled + '%'
  showTop.value = h.scrollTop > 600
}

function backToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function togglePaper() {
  paperAged.value = !paperAged.value
  document.body.classList.toggle('paper-aged', paperAged.value)
  try { localStorage.setItem('paper-aged', paperAged.value ? '1' : '0') } catch {}
}

onMounted(() => {
  // 恢复枯纸偏好
  try {
    if (localStorage.getItem('paper-aged') === '0') {
      // 用户明确关过
    } else {
      paperAged.value = true
      document.body.classList.add('paper-aged')
      try { localStorage.setItem('paper-aged', '1') } catch {}
    }
  } catch {}
  // 把 masthead 实际高度写入 CSS 变量, 栏头用 var(--nav-h) 定位
  try {
    const mh = document.querySelector('.masthead')
    if (mh) {
      const h = mh.getBoundingClientRect().height
      // 加 4px 缓冲, 让栏头贴在 nav 下方而不是覆盖底边
      document.documentElement.style.setProperty('--nav-h', (h + 4) + 'px')
    }
  } catch {}
  window.addEventListener('keydown', onKey)
  window.addEventListener('scroll', onScroll, { passive: true })
  // 进入作品页时显示栏头
  if (route.name === 'work') showBanner()
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="masthead">
    <RouterLink to="/" class="brand">
      <span class="brand-mark">A</span>
      <span class="brand-name">Atelier</span>
    </RouterLink>
    <nav>
      <RouterLink to="/about"><span class="nav-num">01</span> 序言</RouterLink>
      <RouterLink to="/works"><span class="nav-num">02</span> 作品</RouterLink>
      <RouterLink to="/plates"><span class="nav-num">02.5</span> 图版</RouterLink>
      <RouterLink to="/fragments"><span class="nav-num">03</span> 片段</RouterLink>
      <RouterLink to="/colophon"><span class="nav-num">04</span> 版权页</RouterLink>
      <RouterLink to="/mail"><span class="nav-num">05</span> 来信</RouterLink>
    </nav>
  </header>

  <div class="scroll-progress" :style="{ width: progressWidth }"></div>

  <!-- 翻页栏头 (作品页专享, 1.8s 后淡出) -->
  <div class="page-banner-wrap">
    <div :class="['page-banner', { show: bannerVisible }]">
      <p :key="bannerKey" class="page-banner__text">{{ bannerText }}</p>
    </div>
  </div>

  <main>
    <RouterView v-slot="{ Component, route: r }">
      <transition :name="r.name === 'work' ? 'page' : 'fade'" mode="out-in">
        <component :is="Component" :key="r.fullPath" />
      </transition>
    </RouterView>
  </main>

  <button
    :class="['to-top', { visible: showTop }]"
    aria-label="返回顶部"
    @click="backToTop"
  >↑</button>

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
