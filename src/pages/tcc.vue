<script setup>
import { ArrowLeft, ArrowUpRight, Brain, Check, HeartHandshake, MessageCircle, Puzzle } from 'lucide-vue-next'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const whatsapp = 'https://wa.me/5571999999999?text=Olá!%20Quero%20entender%20se%20a%20TCC%20pode%20ser%20adequada%20para%20minha%20família.'
const cycle = ref(null)
const cycleVisible = ref(false)
let cycleObserver

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    cycleVisible.value = true
    return
  }
  cycleObserver = new IntersectionObserver(([entry]) => {
    cycleVisible.value = entry.isIntersecting
  }, { threshold: .15 })
  if (cycle.value) cycleObserver.observe(cycle.value)
})

onBeforeUnmount(() => cycleObserver?.disconnect())

useSeoMeta({
  title: 'TCC para crianças e adolescentes | Júlia Paim',
  description: 'Entenda como a Terapia Cognitivo-Comportamental pode apoiar crianças e adolescentes a compreender pensamentos, emoções e comportamentos.',
  ogTitle: 'TCC para crianças e adolescentes | Júlia Paim',
  ogDescription: 'Uma explicação clara e acolhedora sobre a Terapia Cognitivo-Comportamental.',
  ogType: 'article',
  ogImage: '/share-img.jpg',
})
</script>

<template>
  <main class="tcc-page">
    <section class="tcc-hero">
      <nav class="tcc-nav">
        <NuxtLink to="/" class="tcc-brand">Júlia Paim <small>PSICÓLOGA</small></NuxtLink>
        <NuxtLink to="/" class="tcc-back"><ArrowLeft :size="16" /> Voltar ao site</NuxtLink>
      </nav>
      <div class="tcc-hero-content">
        <p class="tcc-kicker">TERAPIA COGNITIVO-COMPORTAMENTAL</p>
        <h1>Entender o que acontece <i>por dentro</i> abre espaço para novos caminhos.</h1>
        <p class="tcc-lead">A TCC é uma forma de psicoterapia que ajuda crianças e adolescentes a compreender como pensamentos, emoções e comportamentos se conectam no dia a dia.</p>
        <a :href="whatsapp" target="_blank" class="tcc-button">Conversar comigo <ArrowUpRight :size="18" /></a>
      </div>
      <div class="tcc-hero-picture"><img src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=85" alt="Caderno e materiais de estudo em um momento de reflexão" /></div>
    </section>

    <section class="tcc-intro">
      <p class="tcc-number">01</p>
      <div><p class="tcc-kicker tcc-kicker--dark">COMEÇANDO PELO BÁSICO</p><h2>O que uma psicóloga faz?</h2></div>
      <div class="tcc-rich-text"><p>Psicólogas são profissionais formadas para compreender aspectos emocionais, comportamentais e relacionais. No atendimento clínico, elas oferecem um espaço de escuta qualificada, fazem uma avaliação cuidadosa da demanda e constroem, junto da pessoa e da família quando apropriado, formas de lidar com o que está difícil.</p><p>Não existe uma fórmula pronta: o plano de cuidado considera idade, contexto, história, necessidades e objetivos. A psicoterapia não substitui atendimento médico ou de urgência quando ele é necessário.</p></div>
    </section>

    <section class="tcc-loop">
      <div class="tcc-loop-copy"><p class="tcc-kicker">A IDEIA CENTRAL DA TCC</p><h2>Pensamos, sentimos e agimos em constante conversa.</h2><p>Uma situação pode despertar pensamentos rápidos, que influenciam como nos sentimos e o que fazemos em seguida. Na TCC, esse ciclo é observado com curiosidade — não para culpar, mas para encontrar possibilidades de resposta mais úteis.</p></div>
      <div ref="cycle" class="tcc-cycle" :class="{ 'is-visible': cycleVisible }" aria-label="Ciclo entre pensamentos, emoções e comportamentos"><span class="tcc-cycle-center">Uma situação<br>do dia a dia</span><div class="tcc-cycle-orbit"><div class="tcc-cycle-item tcc-cycle-thought"><span class="tcc-cycle-content"><Brain :size="23" /><strong>Pensamentos</strong><small>O que passou pela cabeça?</small></span></div><div class="tcc-cycle-item tcc-cycle-feeling"><span class="tcc-cycle-content"><HeartHandshake :size="23" /><strong>Emoções</strong><small>Como isso foi sentido?</small></span></div><div class="tcc-cycle-item tcc-cycle-action"><span class="tcc-cycle-content"><Puzzle :size="23" /><strong>Comportamentos</strong><small>O que aconteceu depois?</small></span></div></div></div>
    </section>

    <section class="tcc-practice">
      <div class="tcc-practice-image"><img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=85" alt="Criança desenhando e explorando materiais criativos" /></div>
      <div class="tcc-practice-copy"><p class="tcc-kicker tcc-kicker--dark">NA PRÁTICA</p><h2>Como isso aparece nas sessões?</h2><p>Com crianças e adolescentes, o processo precisa fazer sentido para a etapa de vida. Conversas, jogos, desenhos, recursos visuais e experimentos do cotidiano podem ajudar a transformar assuntos complexos em algo que se possa nomear, observar e praticar.</p><ul><li><Check :size="18" /> Definimos juntos o que está sendo difícil.</li><li><Check :size="18" /> Percebemos padrões e gatilhos no cotidiano.</li><li><Check :size="18" /> Experimentamos estratégias possíveis entre uma sessão e outra.</li><li><Check :size="18" /> Revemos o que funcionou, com gentileza e sem julgamento.</li></ul></div>
    </section>

    <section class="tcc-benefits">
      <div><p class="tcc-kicker">O QUE A TCC PROCURA CONSTRUIR</p><h2>Menos respostas automáticas.<br>Mais repertório para escolher.</h2></div>
      <div class="tcc-benefit-grid"><article><b>01</b><h3>Mais clareza</h3><p>Reconhecer pensamentos, emoções e sinais do corpo que antes pareciam confusos.</p></article><article><b>02</b><h3>Estratégias práticas</h3><p>Construir recursos para lidar com situações específicas do cotidiano.</p></article><article><b>03</b><h3>Autonomia gradual</h3><p>Ampliar a confiança para usar essas ferramentas também fora da sessão.</p></article><article><b>04</b><h3>Participação da família</h3><p>Quando faz sentido, orientar responsáveis para apoiar esse processo com coerência.</p></article></div>
    </section>

    <section class="tcc-note"><div><p class="tcc-kicker tcc-kicker--dark">IMPORTANTE</p><h2>TCC não é uma resposta igual para todo mundo.</h2></div><p>Ela é uma abordagem baseada em evidências, mas a indicação e o formato do tratamento dependem de uma avaliação individual. A primeira conversa serve justamente para entender a demanda e pensar, com responsabilidade, no cuidado mais adequado.</p></section>

    <section class="tcc-cta"><div><p class="tcc-kicker">UM PRIMEIRO PASSO</p><h2>Quer entender se este caminho faz sentido para sua família?</h2><a :href="whatsapp" target="_blank"><MessageCircle :size="19" /> Falar comigo</a></div><img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1000&q=85" alt="Mãe e filha conversando em um momento de afeto" /></section>

    <footer class="tcc-footer"><span>Júlia Paim · Psicóloga Infantojuvenil</span><span>CRP 03/12345</span><span>Conteúdo informativo. Referências: <a href="https://www.nhs.uk/tests-and-treatments/cognitive-behavioural-therapy-cbt/" target="_blank">NHS</a> · <a href="https://www.apa.org/depression-guideline/children-and-adolescents/index" target="_blank">APA</a></span></footer>
  </main>
</template>

<style>
.tcc-page { --tcc-ink:#303129; --tcc-sage:#60745e; --tcc-cream:#f8f4ec; --tcc-clay:#ba715f; --tcc-pale:#e8eee3; min-height:100vh; color:var(--tcc-ink); background:var(--tcc-cream); font-family:'Manrope',sans-serif; }.tcc-page * { box-sizing:border-box; }.tcc-page a { color:inherit; text-decoration:none; }.tcc-hero { position:relative; min-height:790px; overflow:hidden; padding:0 8vw 8vw; color:#fff; background:var(--tcc-sage); }.tcc-hero::after { content:''; position:absolute; width:630px; height:630px; right:-220px; top:-320px; border:1px solid #fff3; border-radius:50%; box-shadow:0 0 0 100px transparent,0 0 0 101px #fff2; }.tcc-nav { position:relative; z-index:2; display:flex; justify-content:space-between; align-items:center; min-height:92px; border-bottom:1px solid #ffffff30; }.tcc-brand { font:600 21px 'DM Serif Display',serif; }.tcc-brand small { display:block; margin-top:3px; font:600 8px 'Manrope'; letter-spacing:1.8px; }.tcc-back { display:flex; align-items:center; gap:8px; color:#f3eee5; font-size:11px; font-weight:700; }.tcc-hero-content { position:relative; z-index:1; max-width:700px; padding-top:13vh; }.tcc-kicker { display:flex; align-items:center; gap:8px; margin:0; color:#f5d1a6; font-size:10px; font-weight:700; letter-spacing:.9px; }.tcc-kicker--dark { color:var(--tcc-sage); }.tcc-hero h1,.tcc-intro h2,.tcc-loop h2,.tcc-practice h2,.tcc-benefits h2,.tcc-note h2,.tcc-cta h2 { margin:22px 0; font:400 clamp(48px,6vw,82px)/.97 'DM Serif Display',serif; letter-spacing:-3px; }.tcc-hero h1 i { color:#f5d1a6; }.tcc-lead { max-width:600px; color:#f4f0e8; font-size:17px; line-height:1.75; }.tcc-button,.tcc-cta a { display:inline-flex; align-items:center; gap:10px; margin-top:24px; border-radius:30px; padding:15px 20px; color:var(--tcc-ink)!important; background:#f6eee0; font-size:12px; font-weight:700; transition:transform 160ms cubic-bezier(.23,1,.32,1),box-shadow 200ms ease-out; }.tcc-hero-picture { position:absolute; right:8vw; bottom:0; width:min(31vw,450px); height:63%; overflow:hidden; border-radius:180px 180px 0 0; }.tcc-hero-picture img,.tcc-practice-image img,.tcc-cta>img { width:100%; height:100%; object-fit:cover; }.tcc-intro { display:grid; grid-template-columns:100px .85fr 1.15fr; gap:5vw; padding:12vw 10vw; }.tcc-number { margin:0; color:var(--tcc-clay); font-size:11px; font-weight:700; }.tcc-intro h2 { margin:0; font-size:clamp(39px,4.5vw,61px); }.tcc-rich-text { color:#5d6055; font-size:16px; line-height:1.8; }.tcc-rich-text p:first-child { margin-top:0; }.tcc-loop { display:grid; grid-template-columns:1fr 1fr; gap:9vw; align-items:center; padding:11vw 10vw; color:#f9f6ef; background:var(--tcc-sage); }.tcc-loop h2 { font-size:clamp(39px,4.4vw,61px); }.tcc-loop-copy>p:last-child { max-width:550px; color:#edf1e9; font-size:16px; line-height:1.8; }.tcc-cycle { position:relative; width:min(440px,80vw); aspect-ratio:1; margin:auto; border:1px solid #ffffff4d; border-radius:50%; }.tcc-cycle::before { content:''; position:absolute; inset:20%; border:1px dashed #ffffff55; border-radius:50%; }.tcc-cycle-center { position:absolute; inset:35%; display:grid; place-items:center; border-radius:50%; color:var(--tcc-ink); background:#f6eee0; text-align:center; font:400 18px/1.1 'DM Serif Display'; }.tcc-cycle-item { position:absolute; width:145px; text-align:center; color:#fff; }.tcc-cycle-item svg { margin:auto auto 8px; color:#f5d1a6; }.tcc-cycle-item strong,.tcc-cycle-item small { display:block; }.tcc-cycle-item strong { font-size:13px; }.tcc-cycle-item small { margin-top:4px; color:#e4ebe0; font-size:10px; }.tcc-cycle-thought { left:50%; top:-18px; transform:translateX(-50%); }.tcc-cycle-feeling { left:-42px; bottom:18%; }.tcc-cycle-action { right:-42px; bottom:18%; }.tcc-practice { display:grid; grid-template-columns:.9fr 1.1fr; align-items:stretch; background:#fbfaf6; }.tcc-practice-image { min-height:670px; }.tcc-practice-copy { padding:10vw 9vw; }.tcc-practice h2 { font-size:clamp(39px,4.4vw,60px); }.tcc-practice-copy>p:last-of-type { color:#5d6055; font-size:15px; line-height:1.8; }.tcc-practice ul { display:grid; gap:14px; margin:34px 0 0; padding:0; list-style:none; }.tcc-practice li { display:flex; gap:10px; align-items:flex-start; color:#4d554a; font-size:14px; line-height:1.5; }.tcc-practice li svg { flex:0 0 auto; color:var(--tcc-clay); }.tcc-benefits { padding:11vw 10vw; background:var(--tcc-pale); }.tcc-benefits h2 { max-width:760px; font-size:clamp(39px,4.8vw,66px); }.tcc-benefit-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; margin-top:58px; background:#60745e24; }.tcc-benefit-grid article { min-height:250px; padding:27px; background:var(--tcc-pale); }.tcc-benefit-grid b { color:var(--tcc-clay); font-size:11px; }.tcc-benefit-grid h3 { margin:45px 0 9px; font:400 25px 'DM Serif Display'; }.tcc-benefit-grid p { color:#5d6055; font-size:13px; line-height:1.65; }.tcc-note { display:grid; grid-template-columns:1fr 1fr; gap:10vw; padding:10vw; align-items:start; }.tcc-note h2 { font-size:clamp(38px,4vw,58px); }.tcc-note>p { margin-top:58px; color:#5d6055; font-size:16px; line-height:1.8; }.tcc-cta { display:grid; grid-template-columns:1.1fr .9fr; margin:0 5vw; overflow:hidden; color:#fff; background:var(--tcc-clay); }.tcc-cta>div { padding:8vw; }.tcc-cta h2 { font-size:clamp(39px,4.4vw,64px); }.tcc-cta>img { min-height:460px; }.tcc-footer { display:flex; justify-content:space-between; gap:20px; padding:36px 7vw; color:#667065; font-size:10px; }.tcc-footer a { text-decoration:underline; text-underline-offset:3px; } @media (hover:hover) and (pointer:fine) { .tcc-button:hover,.tcc-cta a:hover { transform:translateY(-2px); box-shadow:0 14px 23px #27312725; } }.tcc-button:active,.tcc-cta a:active { transform:scale(.97); } @media (max-width:760px) { .tcc-hero { min-height:760px; padding:0 8vw 10vw; }.tcc-hero-content { padding-top:10vh; }.tcc-hero-picture { right:8vw; width:62vw; height:39%; }.tcc-intro,.tcc-loop,.tcc-practice,.tcc-note,.tcc-cta { grid-template-columns:1fr; }.tcc-intro { gap:25px; padding:18vw 8vw; }.tcc-loop { padding:18vw 8vw; }.tcc-cycle { margin-top:35px; }.tcc-cycle-item { width:110px; }.tcc-cycle-feeling { left:-24px; }.tcc-cycle-action { right:-24px; }.tcc-practice-image { min-height:420px; }.tcc-practice-copy { padding:17vw 8vw; }.tcc-benefits { padding:17vw 8vw; }.tcc-benefit-grid { grid-template-columns:1fr 1fr; }.tcc-benefit-grid article { min-height:210px; padding:20px; }.tcc-benefit-grid h3 { margin-top:30px; }.tcc-note { padding:17vw 8vw; gap:0; }.tcc-note>p { margin-top:15px; }.tcc-cta { margin:0; }.tcc-cta>div { padding:17vw 8vw; }.tcc-cta>img { min-height:330px; }.tcc-footer { flex-direction:column; } }

.tcc-cycle { contain:layout style; overflow:visible; }
.tcc-cycle::after { content:''; position:absolute; inset:-2px; border-radius:50%; pointer-events:none; background:conic-gradient(from 25deg,transparent 0 74%,#f5d1a6 79% 82%,transparent 87%); -webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 2px),#000 calc(100% - 1px)); mask:radial-gradient(farthest-side,transparent calc(100% - 2px),#000 calc(100% - 1px)); animation:tcc-orbit-spin 28s linear infinite reverse; animation-play-state:paused; will-change:transform; }
.tcc-cycle-orbit { position:absolute; inset:0; border-radius:50%; animation:tcc-orbit-spin 42s linear infinite; animation-play-state:paused; will-change:transform; }
.tcc-cycle-content { display:block; animation:tcc-orbit-counter-spin 42s linear infinite; animation-play-state:paused; will-change:transform; }
.tcc-cycle.is-visible::after,.tcc-cycle.is-visible .tcc-cycle-orbit,.tcc-cycle.is-visible .tcc-cycle-content { animation-play-state:running; }
.tcc-cycle-center { z-index:2; }
.tcc-benefits .tcc-kicker { color:#854b3e; }
@keyframes tcc-orbit-spin { to { transform:rotate(1turn); } }
@keyframes tcc-orbit-counter-spin { to { transform:rotate(-1turn); } }
@media (prefers-reduced-motion:reduce) { .tcc-cycle::after,.tcc-cycle-orbit,.tcc-cycle-content { animation:none; } }
</style>
