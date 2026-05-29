<template>
  <div id="experience" class="card p-6">
    <p class="section-label">Experience</p>

    <div class="space-y-1">
      <div
        v-for="(item, index) in experiences"
        :key="item.title"
        class="flex gap-4"
      >
        <div class="relative flex flex-col items-center pt-1">
          <div class="tl-dot"></div>
          <div v-if="index < experiences.length - 1" class="tl-line"></div>
        </div>

        <div class="flex-1 pb-7">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span :class="['pill', item.variant]">{{ item.type }}</span>
            <span class="text-[11px] font-mono text-slate-500">{{
              item.period
            }}</span>
          </div>

          <h3
            class="font-space text-xl font-bold text-white flex items-center gap-2"
          >
            <AppIcon :name="item.icon" class="w-5 h-5 text-slate-300" />
            {{ item.title }}
          </h3>
          <p class="mt-1 text-sm text-slate-400">{{ item.company }}</p>
          <p class="mt-3 text-sm leading-6 text-slate-300">
            {{ item.summary }}
          </p>

          <div class="flex flex-wrap gap-2 mt-4">
            <span v-for="tag in item.tags" :key="tag" class="pill">{{
              tag
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppIcon from "./AppIcon.vue";

const experiences = [
  {
    title: "Programmer/IT Staff Intern",
    company: "DNSC College clinic",
    period: "February 2026 - May 2026",
    type: "Internship",
    variant: "pill-green",
    icon: "code",
    summary:
      "Contributed to administrative tools, assisted with feature implementation, and gained hands-on experience working with production requirements and team delivery.",
    tags: ["PHP", "MySQL", "Tailwind CSS"],
  },
  {
    title: "BS Information Technology",
    company: "Davao del Norte State College",
    period: "Graduated: June 2026",
    type: "Education",
    variant: "pill-amber",
    icon: "certificate",
    summary:
      "Built the academic foundation behind my software work while applying it through systems development, project work, and real client-facing requirements.",
    tags: ["Systems Analysis", "Database Design", "Web Development"],
  },
];
</script>
