<template>
  <div class="card p-6">
    <div class="flex justify-center mb-6">
      <div
        class="avatar-ring w-[210px] h-[210px] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
        @click="isModalOpen = true"
        title="View profile photo"
      >
        <div class="avatar-inner w-full h-full">
          <img
            src="/profile_pic.jpg"
            alt="Giovanni Mangco"
            class="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>

    <div class="text-center space-y-3">
      <div>
        <h2 class="font-space text-2xl font-extrabold tracking-tight text-white">
          Giovanni II Mangco
        </h2>
        <p class="mt-1 text-sm text-slate-400">
          Full-Stack Web Developer focused on business systems and clean UI.
        </p>
      </div>

      <div class="flex items-center justify-center gap-2 text-sm text-slate-300">
        <span class="dot-online"></span>
        <span>Open to junior developer roles and freelance work</span>
      </div>
      
    </div>

    <div class="space-y-3 my-3">
      <a
        href="#contact"
        class="btn btn-primary w-full"
        @click.prevent="scrollTo('contact')"
      >
        <AppIcon name="mail" class="w-4 h-4" />
        Let's work together
      </a>

      <div class="grid grid-cols-2 gap-3">
        <a href="https://github.com/bellyjoe" target="_blank" rel="noreferrer" class="btn btn-ghost text-xs">
          <AppIcon name="github" class="w-4 h-4" />
          GitHub
        </a>
        <a href="#projects" class="btn btn-outline text-xs" @click.prevent="scrollTo('projects')">
          <AppIcon name="folder" class="w-4 h-4" />
          Projects
        </a>
      </div>
    </div>

    <div class="mt-6 pt-6 border-t border-white/10 space-y-3 text-sm">
      <div
        v-for="item in quickFacts"
        :key="item.label"
        class="flex items-start justify-between gap-3"
      >
        <span class="text-slate-500 flex items-center gap-2">
          <AppIcon :name="item.icon" class="w-4 h-4" />
          {{ item.label }}
        </span>
        <span class="text-right text-slate-200">{{ item.value }}</span>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          @click="isModalOpen = false"
        >
          <img
            src="/profile_pic.jpg"
            alt="Giovanni Mangco portrait"
            class="max-w-full max-h-full rounded-[2rem] shadow-2xl object-contain ring-1 ring-white/10"
            @click.stop
          />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppIcon from './AppIcon.vue'

const isModalOpen = ref(false)

const quickFacts = [
  { label: 'Based in', value: 'Davao City, Philippines', icon: 'location' },
  { label: 'Primary focus', value: 'Web Development', icon: 'briefcase' },
  { label: 'Preferred stack', value: 'Vue.js, Laravel, Tailwind css', icon: 'stack' },
]

const scrollTo = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
