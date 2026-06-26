<script setup>
import { RouterView } from 'vue-router'
import { useScrollMetrics } from './composables/useScrollMetrics.js'
import { usePageBanner } from './composables/usePageBanner.js'
import { useGlobalKeys } from './composables/useGlobalKeys.js'
import SiteMasthead from './components/layout/SiteMasthead.vue'
import ScrollProgressBar from './components/layout/ScrollProgressBar.vue'
import PageBanner from './components/layout/PageBanner.vue'
import BackToTopButton from './components/layout/BackToTopButton.vue'
import SiteFooter from './components/layout/SiteFooter.vue'

const { progressWidth, showBackToTop, scrollToTop } = useScrollMetrics()
const { visible: bannerVisible, text: bannerText, key: bannerKey } = usePageBanner()
useGlobalKeys()
</script>

<template>
  <SiteMasthead />
  <ScrollProgressBar :width="progressWidth" />
  <PageBanner :text="bannerText" :visible="bannerVisible" :banner-key="bannerKey" />
  <main>
    <RouterView v-slot="{ Component, route }">
      <transition :name="route.name === 'work' ? 'page' : 'fade'" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </RouterView>
  </main>
  <BackToTopButton :visible="showBackToTop" @click="scrollToTop" />
  <SiteFooter />
</template>
