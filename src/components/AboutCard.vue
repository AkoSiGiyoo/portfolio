<template>
  <div class="card p-6">
    <p class="section-label">About</p>

    <div class="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
      <div class="space-y-4 text-[0.95rem] leading-7 text-slate-300">
        <p>
          I build software that solves routine operational problems without
          making the interface harder than the problem itself. Most of my work
          sits in the overlap between business logic, admin workflows, and UI
          clarity.
        </p>
        <p>
          My recent projects include library, clinic, product, and student
          information systems, usually built with Vue on the frontend and
          Laravel or PHP on the backend. I care about clean handoff, sensible
          structure, and shipping features that users can actually trust.
        </p>
        <p>
          Right now I am looking for opportunities where I can keep improving as
          an web developer while contributing immediately on real products.
        </p>
      </div>

      <div class="grid gap-3">
        <div
          v-for="fact in facts"
          :key="fact.label"
          class="rounded-[22px] border border-white/10 bg-[rgba(8,15,28,0.55)] p-4"
        >
          <div class="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500">
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
  { label: 'Education', value: 'BS Information Technology, DNSC' },
  { label: 'Strengths', value: 'System thinking, Practical UI, Readable Code' },
  { label: 'Working style', value: 'Independent, Collaborative, Detail-oriented, Time management' },
]
</script>
