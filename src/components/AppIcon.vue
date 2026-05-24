<template>
  <svg
    :class="classes"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      v-for="(path, index) in iconPaths"
      :key="`${name}-${index}`"
      :d="path.d"
      :stroke-linecap="path.strokeLineCap || 'round'"
      :stroke-linejoin="path.strokeLineJoin || 'round'"
      :stroke-width="path.strokeWidth || 1.8"
      :fill="path.fill || 'none'"
    />
  </svg>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    default: "w-5 h-5",
  },
});

const icons = {
  menu: [{ d: "M4 7h16M4 12h16M4 17h16" }],
  curlyBraces: [
    {
      d: "M10 4C8 4 8 6 8 7.5V9c0 1-.5 2-2 2 1.5 0 2 1 2 2v1.5C8 16 8 18 10 18",
    },
    {
      d: "M14 4c2 0 2 2 2 3.5V9c0 1 .5 2 2 2-1.5 0-2 1-2 2v1.5C16 16 16 18 14 18",
    },
  ],
  close: [{ d: "M6 18L18 6M6 6l12 12" }],
  arrowUp: [{ d: "M5 15l7-7 7 7" }],
  arrowUpRight: [{ d: "M7 17L17 7M17 7H8M17 7v9" }],
  user: [
    { d: "M15 19a3 3 0 0 0-6 0M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" },
  ],
  location: [
    { d: "M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" },
    { d: "M12 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" },
  ],
  briefcase: [
    { d: "M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" },
    { d: "M4 9.5h16v8A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-8Z" },
    { d: "M10 12h4" },
  ],
  code: [{ d: "m9 18-6-6 6-6" }, { d: "m15 6 6 6-6 6" }],
  stack: [
    { d: "m12 3 8 4-8 4-8-4 8-4Z" },
    { d: "m4 11 8 4 8-4" },
    { d: "m4 15 8 4 8-4" },
  ],
  folder: [
    {
      d: "M3.5 7.5A1.5 1.5 0 0 1 5 6h4l2 2h8A1.5 1.5 0 0 1 20.5 9.5v8A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5v-10Z",
    },
  ],
  certificate: [
    { d: "M8 4h8l4 4v6c0 3.5-2 5.5-8 8-6-2.5-8-4.5-8-8V8l4-4Z" },
    { d: "m9.5 11 1.8 1.8L15 9.5" },
  ],
  mail: [
    { d: "M4 7h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" },
    { d: "m4 8 8 6 8-6" },
  ],
  phone: [
    { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.61 2.62a2 2 0 0 1-.45 2.11L8.02 9.98a16 16 0 0 0 6 6l1.53-1.25a2 2 0 0 1 2.11-.45c.84.28 1.72.49 2.62.61A2 2 0 0 1 22 16.92Z" },
  ],
  linkedin: [
    { d: "M7 8.5A1.5 1.5 0 1 1 7 5.5a1.5 1.5 0 0 1 0 3Z" },
    { d: "M5.5 10.5h3V19h-3z", fill: "currentColor", strokeWidth: 0 },
    { d: "M10.5 10.5h2.88v1.16h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.62 2.01 3.62 4.62V19h-3v-3.78c0-.9-.02-2.07-1.26-2.07-1.26 0-1.46.98-1.46 2v3.85h-3z", fill: "currentColor", strokeWidth: 0 },
  ],
  facebook: [
    { d: "M13.5 21v-7h2.3l.4-3h-2.7V9.2c0-.87.24-1.46 1.49-1.46H16V5.06c-.2-.03-.9-.08-1.71-.08-1.7 0-2.87 1.04-2.87 2.95V11H9v3h2.42v7", fill: "currentColor", strokeWidth: 0 },
  ],
  github: [
    {
      d: "M9 19c-4.5 1.5-4.5-2.5-6.5-3m13 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19.5 4.77 5.07 5.07 0 0 0 19.41 1S18.28.65 15.5 2.48a13.38 13.38 0 0 0-7 0C5.72.65 4.59 1 4.59 1A5.07 5.07 0 0 0 4.5 4.77 5.44 5.44 0 0 0 3 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8.5 18.13V22",
    },
  ],
  external: [
    { d: "M14 5h5v5" },
    { d: "M10 14 19 5" },
    { d: "M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" },
  ],
};

const classes = computed(() => props.class);
const iconPaths = computed(() => icons[props.name] || icons.code);
</script>
