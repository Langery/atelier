import { onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { works, idxOf } from '../data/works.js'

const NAV_MAP = {
  '0': 'hero', '1': 'about', '2': 'works', '3': 'fragments', '4': 'colophon'
}

export function useGlobalKeys() {
  const route = useRoute()
  const router = useRouter()

  const onKey = (e) => {
    const tag = (e.target.tagName || '').toLowerCase()
    if (['input', 'textarea', 'select'].includes(tag)) return
    if (e.metaKey || e.ctrlKey || e.altKey) return

    if (route.name === 'work') {
      const i = idxOf(route.params.num)
      if (i >= 0) {
        if (e.key === 'ArrowLeft') {
          const p = i === 0 ? works.length - 1 : i - 1
          router.push({ name: 'work', params: { num: works[p].num } })
          return
        }
        if (e.key === 'ArrowRight') {
          const p = i === works.length - 1 ? 0 : i + 1
          router.push({ name: 'work', params: { num: works[p].num } })
          return
        }
      }
    }

    if (NAV_MAP[e.key]) {
      e.preventDefault()
      router.push({ name: NAV_MAP[e.key] })
    }
  }

  onMounted(() => window.addEventListener('keydown', onKey))
  onUnmounted(() => window.removeEventListener('keydown', onKey))
}
