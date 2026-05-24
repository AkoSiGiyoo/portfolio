import { ref } from 'vue'

export function useReveal() {
  const elements = ref([])

  const addRevealRef = (el, index) => {
    if (el) {
      elements.value[index] = el
    }
  }

  const initReveal = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    elements.value.forEach((el) => {
      if (el) {
        observer.observe(el)
      }
    })

    return observer
  }

  return {
    addRevealRef,
    initReveal,
  }
}
