<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { MessageCircle } from 'lucide-vue-next'
defineProps({ link:{ type:String, required:true } })
const visible = ref(false)
const isDark = ref(false)
let scheduled = false

function isLightColor(color) {
  const values = color.match(/[\d.]+/g)?.map(Number)
  if (!values || values.length < 3 || (values.length > 3 && values[3] === 0)) return true
  const [r,g,b] = values
  return (r*299 + g*587 + b*114)/1000 > 155
}
function update() {
  scheduled = false
  const footer = document.querySelector('.casa-footer')
  const nearFooter = footer && footer.getBoundingClientRect().top <= window.innerHeight - 20
  visible.value = window.scrollY > 120 && !nearFooter
  const y = window.innerHeight - 52
  for (const section of document.querySelectorAll('.proposal--casa section')) {
    const rect = section.getBoundingClientRect()
    if (rect.top <= y && rect.bottom >= y) isDark.value = !isLightColor(getComputedStyle(section).backgroundColor)
  }
}
function scheduleUpdate() { if (!scheduled) { scheduled = true; requestAnimationFrame(update) } }
onMounted(() => { update(); addEventListener('scroll',scheduleUpdate,{ passive:true }); addEventListener('resize',scheduleUpdate) })
onBeforeUnmount(() => { removeEventListener('scroll',scheduleUpdate); removeEventListener('resize',scheduleUpdate) })
</script>
<template><Transition name="whatsapp-float"><a v-if="visible" class="whatsapp-float whatsapp-adaptive" :class="isDark ? 'is-on-dark' : 'is-on-light'" :href="link" target="_blank" rel="noopener noreferrer" aria-label="Falar com Júlia pelo WhatsApp"><span class="whatsapp-pulse"></span><MessageCircle :size="22" /><b>Fale comigo</b></a></Transition></template>
<style scoped>
.whatsapp-adaptive { transition:transform 160ms var(--ease-out),background-color 200ms ease,color 200ms ease,border-color 200ms ease,opacity 200ms ease; border:2px solid transparent; }
.whatsapp-adaptive.is-on-dark { color:#3a332c!important; background:#f5d1a6; border-color:#ffffff55; }
.whatsapp-adaptive.is-on-light { color:#fff!important; background:#60745e; border-color:#60745e22; }
.whatsapp-adaptive b { position:absolute; right:58px; padding:9px 13px; border-radius:999px; color:#fff; background:#3a332c; box-shadow:0 8px 22px #3a332c28; white-space:nowrap; font-size:10px; opacity:0; transform:translateX(8px); transition:opacity 160ms var(--ease-out),transform 160ms var(--ease-out); }
.whatsapp-pulse { position:absolute; inset:-7px; border:1px solid currentColor; border-radius:50%; opacity:.28; animation:whatsapp-breathe 2.8s ease-in-out infinite; }
.whatsapp-float-enter-active,.whatsapp-float-leave-active { transition:opacity 220ms var(--ease-out),transform 220ms var(--ease-out); }
.whatsapp-float-enter-from,.whatsapp-float-leave-to { opacity:0; transform:translateY(12px) scale(.94); }
@keyframes whatsapp-breathe { 50% { transform:scale(1.1); opacity:.08; } }
@media (hover:hover) and (pointer:fine) { .whatsapp-adaptive:hover { transform:translateY(-3px); }.whatsapp-adaptive:hover b { opacity:1; transform:none; } }
@media (prefers-reduced-motion:reduce) { .whatsapp-pulse { animation:none; }.whatsapp-float-enter-active,.whatsapp-float-leave-active { transition:opacity 180ms ease; }.whatsapp-float-enter-from,.whatsapp-float-leave-to { transform:none; } }
</style>
