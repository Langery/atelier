<script setup>
defineProps({
  width: { type: String, required: true }
})
</script>

<template>
  <div class="scroll-progress" :style="{ width }"></div>
</template>
