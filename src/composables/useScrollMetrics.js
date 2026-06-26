import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollMetrics({ threshold = 600 } = {}) {
  const progressWidth = ref('0%')
  const showBackToTop = ref(false)

  const onScroll = () => {
    const h = document.documentElement
    progressWidth.value = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + '%'
    showBackToTop.value = h.scrollTop > threshold
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return { progressWidth, showBackToTop, scrollToTop }
}
