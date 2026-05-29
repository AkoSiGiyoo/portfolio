<template>
  <div id="tech-stack" class="card p-6">
    <p class="section-label">Tech Stack</p>

    <div class="grid gap-4 md:grid-cols-2">
      <div
        v-for="group in techGroups"
        :key="group.label"
        class="rounded-[24px] border border-white/10 bg-[rgba(8,15,28,0.58)] p-5"
      >
        <div
          class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <h3
            class="flex items-center gap-2 font-space text-lg font-bold text-white"
          >
            <AppIcon :name="group.icon" class="w-5 h-5 text-slate-300" />
            {{ group.label }}
          </h3>
          <span
            class="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500"
          >
            {{ group.note }}
          </span>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in group.items"
            :key="tech.name"
            :class="['pill', tech.variant || '']"
          >
            <span
              v-if="tech.dot"
              :class="['w-2 h-2 rounded-full', tech.dot]"
            ></span>
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppIcon from "./AppIcon.vue";

const techGroups = [
  {
    label: "Frontend",
    icon: "code",
    items: [
      { name: "Vue.js", dot: "bg-emerald-400", variant: "pill-green" },
      { name: "JavaScript", dot: "bg-amber-300", variant: "pill-amber" },
      { name: "Tailwind CSS", dot: "bg-cyan-400", variant: "pill-blue" },
      { name: "Bootstrap", dot: "bg-sky-300", variant: "pill-blue" },
      { name: "HTML CSS", dot: "bg-orange-300" },
    ],
  },
  {
    label: "Backend",
    icon: "curlyBraces",
    items: [
      { name: "Laravel", dot: "bg-orange-400" },
      { name: "PHP", dot: "bg-violet-300", variant: "pill-purple" },
      { name: "REST APIs", dot: "bg-emerald-300", variant: "pill-green" },
    ],
  },
  {
    label: "Database",
    icon: "stack",
    items: [
      { name: "MySQL", dot: "bg-cyan-300", variant: "pill-blue" },
      { name: "MongoDB", dot: "bg-green-300", variant: "pill-green" },
    ],
  },
  {
    label: "Tools",
    icon: "folder",
    items: [
      { name: "Git", dot: "bg-orange-400", variant: "pill-amber" },
      { name: "GitHub Actions", dot: "bg-sky-400", variant: "pill-blue" },
      { name: "ChatGPT Codex", dot: "bg-cyan-300", variant: "pill-blue" },
      { name: "VS Code", dot: "bg-sky-300" },
      { name: "Cursor", dot: "bg-violet-300", variant: "pill-purple" },
      {
        name: "Google Antigravity",
        dot: "bg-orange-400",
        variant: "pill-amber",
      },
    ],
  },
];
</script>
