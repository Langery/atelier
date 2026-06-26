<script setup>
defineProps({
  text: { type: String, required: true },
  visible: { type: Boolean, required: true },
  bannerKey: { type: Number, required: true }
})
</script>

<template>
  <div class="page-banner-wrap">
    <div :class="['page-banner', { show: visible }]">
      <p :key="bannerKey" class="page-banner__text">{{ text }}</p>
    </div>
  </div>
</template>
