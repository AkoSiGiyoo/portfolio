<template>
  <div class="card p-6">
    <p class="section-label">About</p>

    <div class="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
      <div class="space-y-4 text-[0.95rem] leading-7 text-slate-300">
        <p>
          I build software that helps people handle daily work faster and more
          easily. I focus on making each system simple, useful, and easy to
          understand.
        </p>
        <p>
          My recent projects include systems for clothing rental, clinic
          management, product inventory, and food ordering. I usually build them
          with Vue, HTML, CSS, Laravel, and PHP, with clear features that users
          can trust.
        </p>
        <p>
          I am looking for opportunities where I can grow as a web developer and
          help build real products from the start.
        </p>
      </div>

      <div class="grid gap-3">
        <div
          v-for="fact in facts"
          :key="fact.label"
          class="rounded-[22px] border border-white/10 bg-[rgba(8,15,28,0.55)] p-4"
        >
          <div
            class="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500"
          >
            {{ fact.label }}
          </div>
          <div class="mt-2 text-sm text-slate-200">{{ fact.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const facts = [
  { label: "Education", value: "BS Information Technology, DNSC" },
  { label: "Strengths", value: "Problem-solving, Simple UI, Clean code" },
  {
    label: "Working style",
    value: "Independent, Team player, Detail-focused, On time",
  },
];
</script>
