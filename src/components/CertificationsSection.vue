<template>
  <div id="certifications" class="card p-6">
    <p class="section-label">Certificates</p>

    <div class="space-y-3">
      <button
        v-for="cert in certifications"
        :key="cert.title"
        type="button"
        class="cert-row w-full items-start text-left transition duration-200 hover:border-white/20 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
        @click="openCertificate(cert)"
      >
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] border border-white/10"
          :style="{ background: cert.bg }"
        >
          <AppIcon name="certificate" class="h-5 w-5 text-white" />
        </div>

        <div class="flex-1">
          <div class="mb-2">
            <h3 class="font-space text-base font-bold text-white">{{ cert.title }}</h3>
          </div>

          <p class="text-sm text-slate-400">{{ cert.issuer }}</p>
          <div class="mt-2 flex flex-wrap items-center gap-3">
            <p class="font-mono text-sm text-slate-500">{{ cert.date }}</p>
            <span class="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-300">
              View certificate
            </span>
          </div>
        </div>
      </button>
    </div>

    <Teleport to="body">
      <div
        v-if="activeCertificate"
        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm"
        @click="closeCertificate"
      >
        <div
          class="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 shadow-2xl"
          @click.stop
        >
          <div class="border-b border-white/10 px-5 py-4 sm:px-6">
            <div>
              <h3 class="font-space text-lg font-bold text-white">{{ activeCertificate.title }}</h3>
              <p class="mt-1 text-sm text-slate-400">
                {{ activeCertificate.issuer }} - {{ activeCertificate.date }}
              </p>
            </div>
          </div>

          <div class="max-h-[75vh] overflow-auto bg-slate-950/40 p-3 sm:p-4">
            <img
              :src="activeCertificate.file"
              :alt="`${activeCertificate.title} certificate`"
              class="mx-auto h-auto max-w-full rounded-[20px] border border-white/10 bg-slate-950 object-contain"
            />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppIcon from './AppIcon.vue'
import awsCertificate from '../assets/Certificates/Building a Serverless App with AWS CDK and Typescripts.png'
import icariCertificate from '../assets/Certificates/International Conference on Agricultural Research and Innovation (ICARI).png'
import journeyCertificate from '../assets/Certificates/Journey from Science Practitioner to Information Technology Specialist.jpg'
import colorsCertificate from '../assets/Certificates/The Power of Colors in Graphic Design(Theory, Psychology, and Practice).jpg'

const activeCertificate = ref(null)

const openCertificate = (cert) => {
  activeCertificate.value = cert
  document.body.style.overflow = 'hidden'
}

const closeCertificate = () => {
  activeCertificate.value = null
  document.body.style.overflow = ''
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && activeCertificate.value) {
    closeCertificate()
  }
}

const certifications = [
  
  {
    title: 'International Conference on Agricultural Research and Innovation (ICARI)',
    issuer: 'Agusan del Sur State College of Agriculture and Technology',
    bg: 'linear-gradient(135deg, rgba(56,189,248,0.22), rgba(30,64,175,0.18))',
    date: 'December 2025',
    file: icariCertificate,
  },
  {
    title: 'The Power of Colors in Graphic Design (Theory, Psychology, and Practice)',
    issuer: 'DNSC Institute of Computing',
    bg: 'linear-gradient(135deg, rgba(74,222,128,0.2), rgba(20,83,45,0.18))',
    date: 'November 2025',
    file: colorsCertificate,
  },
  {
    title: 'Journey from Science Practitioner to Information Technology Specialist',
    issuer: 'DNSC Institute of Computing',
    bg: 'linear-gradient(135deg, rgba(59,130,246,0.22), rgba(30,41,59,0.18))',
    date: 'October 2025',
    file: journeyCertificate,
  },
  {
    title: 'Building a Serverless App with AWS CDK and Typescripts',
    issuer: 'DNSC ICSA',
    bg: 'linear-gradient(135deg, rgba(249,115,22,0.22), rgba(120,53,15,0.18))',
    date: 'November 2024',
    file: awsCertificate,
  },
]

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>
