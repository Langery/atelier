import { ref, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { works, idxOf } from '../data/works.js'

export function usePageBanner() {
  const route = useRoute()
  const visible = ref(false)
  const text = ref('')
  const key = ref(0)
  let timer = null

  const show = () => {
    if (route.name !== 'work' || !route.params.num) return
    const i = idxOf(route.params.num)
    if (i < 0) return
    const cur = works[i]
    const prev = i === 0 ? works[works.length - 1] : works[i - 1]
    const next = i === works.length - 1 ? works[0] : works[i + 1]
    text.value = `${cur.num}  ·  上一期 ${prev.num}  ·  下一期 ${next.num}  ·  ${cur.title}`
    key.value++
    visible.value = true
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => { visible.value = false }, 1800)
  }

  watch(
    () => [route.name, route.params.num],
    ([name, num]) => { if (name === 'work' && num) show() },
    { immediate: true }
  )

  onUnmounted(() => { if (timer) clearTimeout(timer) })

  return { visible, text, key }
}
