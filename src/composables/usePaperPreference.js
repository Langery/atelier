import { ref, onMounted } from 'vue'

export function usePaperPreference() {
  const paperAged = ref(false)

  const restore = () => {
    try {
      if (localStorage.getItem('paper-aged') === '0') return
      paperAged.value = true
      document.body.classList.add('paper-aged')
      try { localStorage.setItem('paper-aged', '1') } catch {}
    } catch {}
  }

  const togglePaper = () => {
    paperAged.value = !paperAged.value
    document.body.classList.toggle('paper-aged', paperAged.value)
    try { localStorage.setItem('paper-aged', paperAged.value ? '1' : '0') } catch {}
  }

  onMounted(restore)

  return { paperAged, togglePaper }
}
