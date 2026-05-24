<template>
  <nav
    class="sticky top-0 z-50 border-b border-white/8 bg-[rgba(6,12,22,0.72)] backdrop-blur-xl"
    :class="scrolled ? 'shadow-[0_18px_40px_rgba(2,8,23,0.28)]' : ''"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-5">
      <a href="#about" class="flex min-w-0 items-center gap-3" @click.prevent="scrollTo('about')">
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[rgba(249,115,22,0.28)] bg-[rgba(249,115,22,0.12)]">
          <AppIcon name="code" class="w-5 h-5 text-[#fdba74]" />
        </div>
        <div class="min-w-0 leading-tight">
          <div class="truncate text-sm font-semibold text-white sm:text-base">Giovanni II Mangco</div>
          <div class="font-mono text-[11px] text-slate-400">portfolio</div>
        </div>
      </a>

      <div class="hidden md:flex items-center gap-6">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="nav-link"
          :class="activeSection === link.id ? 'nav-link--active' : ''"
          @click.prevent="scrollTo(link.id)"
        >
          {{ link.label }}
        </a>

        <a href="#contact" class="btn btn-outline text-xs" @click.prevent="scrollTo('contact')">
          <AppIcon name="mail" class="w-4 h-4" />
          Contact
        </a>
      </div>

      <button
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 md:hidden"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <AppIcon :name="menuOpen ? 'close' : 'menu'" class="w-5 h-5" />
      </button>
    </div>

    <Transition name="mobile-menu">
      <div
        v-if="menuOpen"
        class="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-4 sm:px-5 md:hidden"
      >
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="px-4 py-3 rounded-2xl border border-white/8 bg-white/4 text-sm text-slate-300"
          :class="activeSection === link.id ? 'text-white border-[rgba(249,115,22,0.28)] bg-[rgba(249,115,22,0.08)]' : ''"
          @click.prevent="scrollTo(link.id); menuOpen = false"
        >
          {{ link.label }}
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppIcon from './AppIcon.vue'

defineProps({ activeSection: String })

const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'tech-stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

const scrollTo = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link--active {
  color: #f8fafc;
}

.nav-link--active::after {
  width: 100%;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
