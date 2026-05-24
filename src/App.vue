<template>
  <div class="site-shell">
    <div class="page-orb page-orb-a"></div>
    <div class="page-orb page-orb-b"></div>
    <div class="page-grid"></div>

    <NavBar :active-section="activeSection" />

    <main class="relative z-10 mx-auto max-w-6xl px-4 pt-6 pb-20 sm:px-5 sm:pt-8">
      <TitleSection />
      <section
        class="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start"
      >
        <aside class="lg:sticky lg:top-22 space-y-6">
          <ProfileCard />
        </aside>

        <div class="space-y-6">
          <AboutCard />
          <ExperienceSection />
          <TechStackSection />
          <ProjectsSection />
          <CertificationsSection />
          <div class="grid gap-6 lg:grid-cols-[1fr_.9fr] lg:items-stretch lg:[&>*]:h-full">
            <GallerySection class="h-full" />
            <ContactSection class="h-full" />
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import NavBar from "./components/NavBar.vue";
import TitleSection from "./components/TitleSection.vue";
import ProfileCard from "./components/ProfileCard.vue";
import AboutCard from "./components/AboutCard.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import TechStackSection from "./components/TechStackSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import CertificationsSection from "./components/CertificationsSection.vue";
import GallerySection from "./components/GallerySection.vue";
import ContactSection from "./components/ContactSection.vue";
import Footer from "./components/Footer.vue";

const activeSection = ref("about");
let observers = [];

const scrollTo = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

onMounted(() => {
  const sectionIds = [
    "about",
    "experience",
    "tech-stack",
    "projects",
    "certifications",
    "contact",
  ];

  observers = sectionIds
    .map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) activeSection.value = id;
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 },
      );

      observer.observe(element);
      return observer;
    })
    .filter(Boolean);
});

onUnmounted(() => {
  observers.forEach((observer) => observer.disconnect());
});
</script>
