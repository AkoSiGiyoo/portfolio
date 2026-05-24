<template>
  <div class="text-center mb-4">
    <span class="text-xs font-code tracking-widest text-cyan-400 uppercase mb-4 block">{{ label }}</span>
    <h2 class="text-4xl lg:text-5xl font-bold font-space text-white mb-4">
      {{ titleWords[0] }}
      <span class="text-gradient-cyan">{{ titleWords[1] }}</span>
    </h2>
    <p class="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">{{ subtitle }}</p>
    <div class="flex items-center justify-center gap-3 mt-6">
      <div class="h-px w-20 bg-gradient-to-r from-transparent to-cyan-400/50"></div>
      <div class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-glow"></div>
      <div class="h-px w-20 bg-gradient-to-l from-transparent to-cyan-400/50"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  title: String,
  subtitle: String,
})

const titleWords = computed(() => {
  const words = props.title.split(' ')
  if (words.length === 1) return [words[0], '']
  const mid = Math.ceil(words.length / 2)
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')]
})
</script>
