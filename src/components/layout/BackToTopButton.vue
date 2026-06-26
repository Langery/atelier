<script setup>
defineProps({
  visible: { type: Boolean, required: true }
})
const emit = defineEmits(['click'])
</script>

<template>
  <button
    :class="['to-top', { visible }]"
    aria-label="返回顶部"
    @click="emit('click')"
  >↑</button>
</template>
