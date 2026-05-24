<template>
  <div id="gallery" class="card h-full p-6">
    <p class="section-label">Gallary</p>

    <div class="grid grid-cols-2 gap-3">
      <div
        v-for="item in gallery"
        :key="item.title"
        class="gallery-cell min-h-[170px] p-4 flex flex-col justify-between"
        :style="{ background: item.gradient }"
      >
        <span class="text-[11px] font-mono uppercase tracking-[0.18em] text-white/60 flex items-center gap-2">
          <AppIcon :name="item.icon" class="w-4 h-4" />
          {{ item.kicker }}
        </span>
        <div>
          <h3 class="font-space text-xl font-bold text-white">{{ item.title }}</h3>
          <p class="mt-2 text-sm text-white/75 leading-6">{{ item.caption }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppIcon from './AppIcon.vue'

const gallery = [
  {
    kicker: 'Systems',
    icon: 'folder',
    title: 'Operational tools',
    caption: 'Projects built around inventory, records, and process clarity.',
    gradient: 'linear-gradient(135deg, rgba(8,47,73,0.95), rgba(14,116,144,0.72))',
  },
  {
    kicker: 'Frontend',
    icon: 'code',
    title: 'UI that stays readable',
    caption: 'Interfaces shaped for admin users, not just screenshots.',
    gradient: 'linear-gradient(135deg, rgba(67,20,7,0.92), rgba(194,65,12,0.7))',
  },
  {
    kicker: 'Backend',
    icon: 'briefcase',
    title: 'Structured logic',
    caption: 'Reliable CRUD flows, reporting, validation, and role-aware access.',
    gradient: 'linear-gradient(135deg, rgba(30,41,59,0.95), rgba(30,64,175,0.68))',
  },
  {
    kicker: 'Growth',
    icon: 'certificate',
    title: 'Learning in production',
    caption: 'Improving through real deployment, team feedback, and iteration.',
    gradient: 'linear-gradient(135deg, rgba(60,7,83,0.95), rgba(147,51,234,0.62))',
  },
]
</script>
