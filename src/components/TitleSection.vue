<template>
  <div id="about" class="hero-panel mb-6">
    <div class="grid gap-8 lg:grid-cols-[1.4fr_.8fr] lg:items-end">
      <div class="space-y-5 sm:space-y-6">
        <div class="eyebrow">Web Developer · Davao City, Philippines</div>
        <div class="space-y-4">
          <h1 class="hero-title">
            Building calm, useful Web Apps with
            <span>Vue, Laravel, and practical product thinking.</span>
          </h1>
        </div>
      </div>

      <div>
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#projects"
            class="btn btn-primary w-full sm:w-auto"
            @click.prevent="scrollTo('projects')"
          >
            View projects
          </a>
          <a
            href="#contact"
            class="btn btn-outline w-full sm:w-auto"
            @click.prevent="scrollTo('contact')"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollTo = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>
