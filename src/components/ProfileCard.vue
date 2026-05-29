<template>
  <div class="card p-5 sm:p-6">
    <div class="mb-6 flex justify-center">
      <div
        class="avatar-ring flex h-[180px] w-[180px] cursor-pointer items-center justify-center transition-transform duration-300 hover:scale-[1.02] sm:h-[210px] sm:w-[210px]"
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

    <div class="space-y-3 text-center">
      <div>
        <h2
          class="font-space text-2xl font-extrabold tracking-tight text-white"
        >
          Giovanni II Mangco
        </h2>
        <p class="mt-1 text-sm text-slate-400">
          Full-Stack Web Developer focused on business systems, clean UI, and
          readable code.
        </p>
      </div>

      <div
        class="flex flex-col items-center justify-center gap-2 text-center text-sm text-slate-300 sm:flex-row"
      >
        <span class="dot-online shrink-0"></span>
        <span class="max-w-[22ch] text-balance sm:max-w-none">
          Open to junior developer roles and freelance work
        </span>
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

      <div class="grid gap-3 sm:grid-cols-2">
        <a
          href="https://github.com/AkoSiGiyoo"
          target="_blank"
          rel="noreferrer"
          class="btn btn-ghost text-xs"
        >
          <AppIcon name="github" class="w-4 h-4" />
          GitHub
        </a>
        <a
          href="#projects"
          class="btn btn-outline text-xs"
          @click.prevent="scrollTo('projects')"
        >
          <AppIcon name="folder" class="w-4 h-4" />
          Projects
        </a>
      </div>
    </div>

    <div class="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
      <div
        v-for="item in quickFacts"
        :key="item.label"
        class="flex flex-col gap-1.5 text-left sm:flex-row sm:items-start sm:justify-between sm:gap-3"
      >
        <span class="flex items-center gap-2 text-slate-500">
          <AppIcon :name="item.icon" class="w-4 h-4" />
          {{ item.label }}
        </span>
        <span class="text-slate-200 sm:text-right">{{ item.value }}</span>
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
import { ref } from "vue";
import AppIcon from "./AppIcon.vue";

const isModalOpen = ref(false);

const quickFacts = [
  { label: "Based in", value: "Davao City, Philippines", icon: "location" },
  { label: "Primary focus", value: "Web Development", icon: "briefcase" },
  {
    label: "Preferred stack",
    value: "Vue.js, Laravel, Tailwind css",
    icon: "stack",
  },
];

const scrollTo = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};
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
