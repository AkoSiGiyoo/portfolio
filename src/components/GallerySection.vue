<template>
  <div id="gallery" class="card h-full p-5 sm:p-6">
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="section-label">Gallery</p>
        <h3 class="font-space text-xl font-bold text-white">
          Capstone Journey
        </h3>
        <p class="mt-2 max-w-md text-sm leading-6 text-slate-300">
          A quick slideshow of key presentations, deployment work, and
          conference participation.
        </p>
      </div>
    </div>

    <div class="gallery-frame mt-5">
      <div class="gallery-media">
        <img
          :src="currentSlide.image"
          :alt="currentSlide.title"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="gallery-overlay">
        <div>
          <p
            class="font-mono text-[11px] uppercase tracking-[0.2em] text-white/65"
          >
            {{ currentSlide.kicker }}
          </p>
          <h4 class="mt-2 font-space text-2xl font-bold text-white">
            {{ currentSlide.title }}
          </h4>
        </div>

        <div class="gallery-controls">
          <button
            type="button"
            class="gallery-button"
            @click="prevSlide"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            class="gallery-button"
            @click="nextSlide"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>
    </div>

    <div class="mt-4 flex flex-wrap items-center gap-2">
      <button
        v-for="(slide, index) in slides"
        :key="slide.title"
        type="button"
        class="gallery-dot"
        :class="{ 'is-active': index === currentIndex }"
        :aria-label="`Show ${slide.title}`"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const slides = [
  {
    kicker: "Defense",
    title: "Title defense",
    caption:
      "Initial presentation stage where the core project concept was proposed and refined.",
    image: new URL("../assets/gallery/Title defense.jpg", import.meta.url).href,
  },
  {
    kicker: "Defense",
    title: "Outline defense",
    caption:
      "Early project review focused on scope, structure, and research direction.",
    image: new URL("../assets/gallery/Outline defense.jpg", import.meta.url)
      .href,
  },
  {
    kicker: "Defense",
    title: "Pre-deployment defense",
    caption:
      "Validation stage before release, covering readiness, fixes, and workflow alignment.",
    image: new URL(
      "../assets/gallery/Pre-deployment defense.jpg",
      import.meta.url,
    ).href,
  },
  {
    kicker: "Defense",
    title: "Final defense",
    caption:
      "Final presentation of the completed system with outcomes and implementation details.",
    image: new URL("../assets/gallery/Final defense.jpg", import.meta.url).href,
  },
  {
    kicker: "Deployment",
    title: "System deployment",
    caption:
      "Transition from build to live usage, with setup and handoff for actual users.",
    image: new URL("../assets/gallery/System deployment.jpg", import.meta.url)
      .href,
  },

  {
    kicker: "Conference",
    title: "ICARI participation",
    caption:
      "A snapshot from the International Conference on Agricultural Research and Innovation.",
    image: new URL("../assets/gallery/ICARI.jpg", import.meta.url).href,
  },
];

const currentIndex = ref(0);
const currentSlide = computed(() => slides[currentIndex.value]);

let autoplayId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
  restartAutoplay();
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
  restartAutoplay();
};

const goToSlide = (index) => {
  currentIndex.value = index;
  restartAutoplay();
};

const startAutoplay = () => {
  stopAutoplay();
  autoplayId = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length;
  }, 4500);
};

const stopAutoplay = () => {
  if (autoplayId !== null) {
    window.clearInterval(autoplayId);
    autoplayId = null;
  }
};

const restartAutoplay = () => {
  startAutoplay();
};

onMounted(() => {
  startAutoplay();
});

onBeforeUnmount(() => {
  stopAutoplay();
});
</script>

<style scoped>
.gallery-frame {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(15, 23, 42, 0.04), rgba(15, 23, 42, 0.5)),
    rgba(8, 15, 28, 0.78);
}

.gallery-media {
  aspect-ratio: 4 / 3;
  min-height: 300px;
}

.gallery-overlay {
  position: absolute;
  inset: auto 0 0 0;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem;
  background: linear-gradient(
    180deg,
    rgba(2, 6, 23, 0) 0%,
    rgba(2, 6, 23, 0.88) 72%
  );
}

.gallery-controls {
  display: flex;
  gap: 0.6rem;
  flex-shrink: 0;
}

.gallery-button {
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.52);
  color: white;
  font-size: 1.9rem;
  line-height: 1;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;
}

.gallery-button:hover {
  transform: translateY(-1px);
  background: rgba(249, 115, 22, 0.18);
  border-color: rgba(249, 115, 22, 0.34);
}

.gallery-dot {
  width: 0.8rem;
  height: 0.8rem;
  border: 0;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.35);
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.gallery-dot.is-active {
  transform: scale(1.15);
  background: rgb(249, 115, 22);
}

@media (max-width: 640px) {
  .gallery-media {
    min-height: 260px;
  }

  .gallery-overlay {
    flex-direction: column;
    align-items: stretch;
  }

  .gallery-controls {
    justify-content: flex-end;
  }
}
</style>
