<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'

defineProps({ whatsapp: { type: String, required: true } })
const menuOpen = ref(false)
const heroImage = ref(null)

function handleHeroPointer(event) {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const box = event.currentTarget.getBoundingClientRect()
  const x = ((event.clientX - box.left) / box.width - .5) * 2
  const y = ((event.clientY - box.top) / box.height - .5) * 2
  if (heroImage.value) heroImage.value.style.transform = `translate3d(${x * 9}px, ${y * 7}px, 0) scale(1.035)`
}
function resetHeroPointer() { if (heroImage.value) heroImage.value.style.transform = '' }
function handleKeydown(event) { if (event.key === 'Escape') menuOpen.value = false }

watch(menuOpen, (open) => { if (import.meta.client) document.documentElement.style.overflow = open ? 'hidden' : '' })
onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => { window.removeEventListener('keydown', handleKeydown); document.documentElement.style.overflow = '' })
</script>

<template>
  <section id="top" class="casa-hero">
    <nav class="casa-nav">
      <a href="#top" class="casa-brand">Júlia Paim <small>PSICÓLOGA</small></a>
      <div class="casa-nav-links"><a href="#sobre">sobre mim</a><a href="#cuidado">como posso ajudar</a><NuxtLink to="/tcc">entenda a TCC</NuxtLink><a class="casa-nav-cta" :href="whatsapp" target="_blank">Vamos conversar <ArrowUpRight :size="16" /></a></div>
      <button class="casa-menu-toggle" type="button" :class="{ 'is-open': menuOpen }" :aria-expanded="menuOpen" :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'" aria-controls="menu-mobile" @click="menuOpen = !menuOpen"><span></span><span></span></button>
      <Transition name="casa-menu"><div v-if="menuOpen" id="menu-mobile" class="casa-mobile-menu"><div class="casa-mobile-menu-links"><a href="#sobre" @click="menuOpen = false"><span>sobre mim</span></a><a href="#cuidado" @click="menuOpen = false"><span>como posso ajudar</span></a><NuxtLink to="/tcc" @click="menuOpen = false"><span>entenda a TCC</span></NuxtLink></div><a class="casa-mobile-menu-cta" :href="whatsapp" target="_blank" @click="menuOpen = false"><span>Vamos conversar</span><ArrowUpRight :size="18" /></a><p>Atendimento presencial e online</p></div></Transition>
    </nav>
    <div class="casa-hero-grid">
      <div class="casa-copy"><div class="casa-mobile-intro"><p class="casa-label"><span></span> Psicologia para crianças e adolescentes</p></div><h1>Crescer fica mais leve quando seu filho se sente compreendido.</h1><p class="casa-lead">Um espaço seguro para seu filho entender o que sente, desenvolver habilidades e ser quem é — no próprio tempo.</p><a class="casa-primary" :href="whatsapp" target="_blank">Quero conversar <ArrowUpRight :size="18" /></a></div>
      <div class="casa-image-wrap" @pointermove="handleHeroPointer" @pointerleave="resetHeroPointer"><div class="casa-sun"></div><picture><source media="(max-width: 760px)" srcset="/jc-paim.webp"><img ref="heroImage" src="/jc3.webp" alt="Psicóloga Júlia Paim" /></picture><span class="casa-note">“Crescer pode ser difícil.<br>Com apoio, fica mais leve.”</span></div>
    </div>
  </section>
</template>
