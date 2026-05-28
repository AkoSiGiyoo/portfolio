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
          </div>
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
    title: 'Clothing Rental Management System with Descriptive Analytics',
    url: 'https://github.com/AkoSiGiyoo/Clothing-Rental-Management-System-with-Desciptive-Analytics.git',
    icon: 'shirt',
    bg: 'linear-gradient(135deg, rgba(192,132,252,0.22), rgba(59,7,100,0.2))',
    badgeClass: 'pill-green',
    description:
      'A rental operations platform for managing clothing inventory, customer bookings, returns, and payment tracking, paired with descriptive analytics that surface rental trends, item demand, and business performance insights.',
    tech: ['Laravel', 'Vue.js', 'Tailwind css', 'MySQL', 'Inertia.js'],
  },
  {
    title: 'DNSC RFID Enabled Clinic Record and Management System',
    url: 'https://github.com/AkoSiGiyoo/DNSC-RFID-Enabled-Clinic-Record-and-Management-System.git',
    icon: 'medical',
    bg: 'linear-gradient(135deg, rgba(56,189,248,0.26), rgba(14,116,144,0.18))',
    badgeClass: 'pill-blue',
    description:
      'A clinic records platform with RFID-assisted patient handling, medicine inventory, vital signs tracking, and reporting features for campus healthcare workflows.',
    tech: ['PHP', 'HTML CSS', 'JavaScript', 'MySQL', 'RFID',],
  },
  {
    title: 'Food Tiger Ordering System',
    url: 'https://github.com/AkoSiGiyoo/Food-Tiger-Ordering-System.git',
    icon: 'utensils',
    bg: 'linear-gradient(135deg, rgba(249,115,22,0.26), rgba(120,53,15,0.2))',
   badgeClass: 'pill-amber',
    description:
      'A food ordering platform that lets customers browse menu items, place orders, and track requests while helping staff manage orders and update product availability.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'JQuery'],
  },
  {
    title: 'Product Management System',
    url: 'https://github.com/AkoSiGiyoo/Product-Management-System.git',
    icon: 'boxes',
    bg: 'linear-gradient(135deg, rgba(249,115,22,0.26), rgba(120,53,15,0.2))',
    badgeClass: 'pill-amber',
    description:
      'An inventory-focused product management system covering stock monitoring, export flows, uploads, and role-aware access for business operations.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
  }
]
</script>
