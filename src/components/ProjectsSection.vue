<template>
  <div id="projects" class="card p-6">
      <p class="section-label">Projects</p>
     
    <div class="space-y-3">
      <component
        :is="project.url === '#' ? 'div' : 'a'"
        v-for="project in projects"
        :key="project.title"
        :href="project.url === '#' ? undefined : project.url"
        :target="project.url === '#' ? undefined : '_blank'"
        :rel="project.url === '#' ? undefined : 'noreferrer'"
        class="proj-row group"
      >
        <div
          class="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-white/10"
          :style="{ background: project.bg }"
        >
          <AppIcon :name="project.icon" class="w-6 h-6 text-white" />
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <h3 class="font-space text-lg font-bold text-white">{{ project.title }}</h3>
            <span v-if="project.badge" :class="['pill text-[11px]', project.badgeClass]">
              {{ project.badge }}
            </span>
          </div>

          <p class="text-sm text-slate-400 font-mono mb-3">{{ project.domain }}</p>
          <p class="text-sm leading-6 text-slate-300">{{ project.description }}</p>

          <div class="flex flex-wrap gap-2 mt-4">
            <span v-for="tech in project.tech" :key="tech" class="pill">{{ tech }}</span>
          </div>
        </div>

        <div class="hidden shrink-0 items-start pt-1 text-slate-500 transition-colors group-hover:text-white sm:flex">
          <AppIcon name="arrowUpRight" class="w-5 h-5" />
        </div>
      </component>
    </div>
  </div>
</template>

<script setup>
import AppIcon from './AppIcon.vue'

const projects = [
  {
    title: 'DNSC Clinic Management System',
    domain: 'github.com/bellyjoe/dnsc-clinic',
    url: 'https://github.com/bellyjoe/dnsc-clinic',
    icon: 'briefcase',
    bg: 'linear-gradient(135deg, rgba(56,189,248,0.26), rgba(14,116,144,0.18))',
    badge: 'Open source',
    badgeClass: 'pill-blue',
    description:
      'A clinic records platform with RFID-assisted patient handling, medicine inventory, vital signs tracking, and reporting features for campus healthcare workflows.',
    tech: ['PHP', 'HTML CSS', 'JavaScript', 'MySQL', 'RFID',],
  },
  {
    title: 'Product Management System',
    domain: 'github.com/AkoSiGiyoo/Product-Management-System',
    url: 'https://github.com/AkoSiGiyoo/Product-Management-System.git',
    icon: 'stack',
    bg: 'linear-gradient(135deg, rgba(249,115,22,0.26), rgba(120,53,15,0.2))',
    badge: 'Inventory',
    badgeClass: 'pill-amber',
    description:
      'An inventory-focused product management system covering stock monitoring, export flows, uploads, and role-aware access for business operations.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'Clothing Rental Managment System with Descriptive Analytics',
    domain: 'github.com/bellyjoe/sis',
    url: 'https://github.com/bellyjoe/sis',
    icon: 'certificate',
    bg: 'linear-gradient(135deg, rgba(192,132,252,0.22), rgba(59,7,100,0.2))',
    badge: 'Inventory & Ecommerce',
    badgeClass: 'pill-purple',
    description:
      'A school information system that manages enrollment, records, scheduling, and grading while keeping administrative tasks structured and searchable.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Inertia.js'],
  },
]
</script>
