<script setup>
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next'

const openIndex = ref(0)
const faqs = [
  { question: 'Como funciona a primeira sessão?', answer: 'A primeira sessão é um momento de acolhimento e conhecimento mútuo. É onde você poderá compartilhar o que te trouxe à terapia e eu poderei explicar como meu trabalho pode te ajudar. Não há roteiro rígido, é uma conversa fluida e sem julgamentos.' },
  { question: 'Você atende por convênio/plano de saúde?', answer: 'Atuo exclusivamente na modalidade particular para garantir a qualidade e a personalização do atendimento. No entanto, emito recibo para que você possa solicitar o reembolso junto ao seu plano de saúde (verifique as regras do seu convênio).' },
  { question: 'Qual a diferença entre atendimento online e presencial?', answer: 'A eficácia é a mesma. O online oferece praticidade e conforto para quem tem rotina corrida ou mora em outras cidades. O presencial oferece a experiência do ambiente físico do consultório. A escolha depende unicamente da sua preferência e disponibilidade.' },
  { question: 'Qual a duração e frequência das sessões?', answer: 'As sessões têm duração de 50 minutos e, geralmente, ocorrem uma vez por semana. A frequência pode ser ajustada conforme a necessidade clínica e o momento do tratamento.' },
]

function toggle(index) { openIndex.value = openIndex.value === index ? -1 : index }
</script>

<template>
  <section id="faq" class="casa-faq motion-reveal">
    <header class="casa-faq-intro">
      <p class="casa-label"><span></span> Dúvidas comuns</p>
      <h2>Antes de começar, é natural querer entender melhor.</h2>
      <p>Reuni aqui algumas das perguntas que recebo com mais frequência.</p>
      <a href="#contato">Tenho outra dúvida <span aria-hidden="true">↘</span></a>
    </header>
    <div class="casa-faq-list">
      <article v-for="(item, index) in faqs" :key="item.question" :class="{ 'is-open': openIndex === index }">
        <h3><button type="button" :aria-expanded="openIndex === index" :aria-controls="`faq-answer-${index}`" @click="toggle(index)"><span>{{ item.question }}</span><i aria-hidden="true"><Plus :size="17" /></i></button></h3>
        <div :id="`faq-answer-${index}`" class="casa-faq-answer"><div><p>{{ item.answer }}</p></div></div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.casa-faq { display:grid; grid-template-columns:.78fr 1.22fr; gap:10vw; padding:10vw; color:var(--brown); background:#f7f0e5; }
.casa-faq-intro { align-self:start; position:sticky; top:40px; }
.casa-label { margin:0; color:var(--green); font-size:11px; font-weight:700; letter-spacing:.6px; text-transform:uppercase; }
.casa-label span { display:inline-block; width:7px; height:7px; margin:0 8px 1px 0; border-radius:50%; background:var(--clay); }
.casa-faq h2 { max-width:480px; margin:22px 0; font:400 clamp(38px,4vw,57px)/1.03 'DM Serif Display',serif; letter-spacing:-2px; }
.casa-faq-intro>p:last-of-type { max-width:390px; color:#625b52; font-size:14px; line-height:1.7; }
.casa-faq-intro>a { display:inline-flex; align-items:center; gap:8px; margin-top:14px; padding-bottom:4px; border-bottom:1px solid var(--clay); color:var(--clay); font-size:12px; font-weight:700; }
.casa-faq-list { border-top:1px solid #3a332c26; }
.casa-faq-list article { border-bottom:1px solid #3a332c26; }
.casa-faq-list h3 { margin:0; }
.casa-faq-list button { display:flex; width:100%; min-height:88px; align-items:center; justify-content:space-between; gap:24px; padding:20px 2px; border:0; color:var(--brown); background:transparent; text-align:left; }
.casa-faq-list button>span { font:400 clamp(20px,2vw,27px)/1.2 'DM Serif Display',serif; }
.casa-faq-list button i { flex:0 0 34px; width:34px; height:34px; display:grid; place-items:center; border:1px solid #3a332c2b; border-radius:50%; color:var(--clay); font-style:normal; transition:transform 200ms cubic-bezier(.23,1,.32,1),background-color 200ms ease,color 200ms ease; }
.casa-faq-list article.is-open button i { transform:rotate(45deg); color:#fff; background:var(--clay); }
.casa-faq-answer { display:grid; grid-template-rows:0fr; opacity:0; transition:grid-template-rows 220ms cubic-bezier(.23,1,.32,1),opacity 180ms ease-out; }
.casa-faq-answer>div { overflow:hidden; }
.casa-faq-answer p { max-width:650px; margin:0; padding:0 54px 25px 2px; color:#625b52; font-size:14px; line-height:1.75; }
.casa-faq-list article.is-open .casa-faq-answer { grid-template-rows:1fr; opacity:1; }
@media (hover:hover) and (pointer:fine) { .casa-faq-list button:hover i { color:#fff; background:var(--clay); transform:rotate(8deg); }.casa-faq-list article.is-open button:hover i { transform:rotate(45deg); } }
@media (max-width:760px) { .casa-faq { grid-template-columns:1fr; gap:48px; padding:16vw 8vw; }.casa-faq-intro { position:static; }.casa-faq h2 { font-size:39px; letter-spacing:-1.5px; }.casa-faq-list button { min-height:76px; }.casa-faq-list button>span { font-size:20px; }.casa-faq-answer p { padding-right:20px; } }
@media (prefers-reduced-motion:reduce) { .casa-faq-list button i,.casa-faq-answer { transition:none; } }
</style>
