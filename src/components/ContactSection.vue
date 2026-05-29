<template>
  <div id="contact" class="card flex h-full flex-col p-5 sm:p-6">
    <p class="section-label">Contact</p>

    <div class="space-y-4">
      <div
        class="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-emerald-300"
      >
        <span class="dot-online"></span>
        Open for collaboration
      </div>
      <h2
        class="font-space text-2xl font-extrabold leading-tight text-white sm:text-3xl"
      >
        Let&apos;s talk about your next website, system, or support need.
      </h2>
      <p class="max-w-xl text-sm leading-6 text-slate-300">
        Reach me through social platforms, email, or direct call. The fastest
        response is usually through phone or Facebook.
      </p>
    </div>

    <div class="mt-6 flex flex-col gap-6 sm:mt-auto sm:pt-6">
      <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
        <component
          v-for="item in contactMethods"
          :key="item.label"
          :is="item.href ? 'a' : 'div'"
          :href="item.href || undefined"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noreferrer' : undefined"
          :title="item.label"
          :aria-label="item.label"
          class="group flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/10 bg-[rgba(8,15,28,0.54)] text-slate-300 transition hover:-translate-y-[1px] hover:border-[rgba(249,115,22,0.22)] hover:bg-[rgba(10,18,32,0.72)] hover:text-white"
        >
          <AppIcon :name="item.icon" class="w-5.5 h-5.5" />
        </component>
      </div>

      <a
        href="#about"
        class="btn btn-ghost w-full"
        @click.prevent="scrollTo('about')"
      >
        <AppIcon name="arrowUp" class="w-4 h-4" />
        Back to top section
      </a>
    </div>
  </div>
</template>

<script setup>
import AppIcon from "./AppIcon.vue";

const contactMethods = [
  {
    label: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/gi.yoogi1",
    external: true,
  },
  {
    label: "Gmail",
    icon: "mail",
    href: "mailto:mangcogiovannill@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/giovanni-ll-mangco-b21684399",
    external: true,
  },
  {
    label: "Phone",
    icon: "phone",
    href: "tel:09662589345",
    external: false,
  },
];

const scrollTo = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>
