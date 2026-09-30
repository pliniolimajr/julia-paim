<script setup>
import { reactive, ref } from 'vue'
import { Check, Loader2, MapPin, MessageCircle, Send } from 'lucide-vue-next'
defineProps({ whatsapp:{ type:String, required:true } })
const config = useRuntimeConfig()
const form = reactive({ name:'', email:'', phone:'', message:'' })
const formState = ref('idle')
async function submitForm() {
  formState.value = 'loading'
  try {
    const response = await fetch(config.public.formspreeEndpoint, { method:'POST', headers:{ 'Content-Type':'application/json', Accept:'application/json' }, body:JSON.stringify({ nome:form.name, email:form.email, telefone:form.phone, mensagem:form.message }) })
    if (!response.ok) throw new Error('Falha no envio')
    formState.value = 'success'; Object.assign(form, { name:'', email:'', phone:'', message:'' })
  } catch { formState.value = 'error' }
}
</script>
<template><section id="contato" class="casa-contact"><div class="motion-reveal"><p class="casa-label"><span></span> Um primeiro passo</p><h2>Vamos entender juntos<br>o que você está vivendo?</h2><p class="casa-contact-intro">Preencha os campos abaixo. Com cuidado e discrição, eu retorno para entender o melhor caminho para sua família.</p><form class="casa-form" @submit.prevent="submitForm"><label>Seu nome<input v-model.trim="form.name" required autocomplete="name" placeholder="Como posso te chamar?" /></label><div class="casa-form-pair"><label>E-mail<input v-model.trim="form.email" required type="email" autocomplete="email" placeholder="voce@email.com" /></label><label>WhatsApp<input v-model.trim="form.phone" required type="tel" autocomplete="tel" placeholder="(71) 99999-9999" /></label></div><label>Conte brevemente o que está acontecendo<textarea v-model.trim="form.message" required rows="4" placeholder="Fique à vontade para compartilhar o que motivou este contato."></textarea></label><button type="submit" :disabled="formState === 'loading'"><template v-if="formState === 'success'"><Check :size="18" /> Mensagem recebida</template><template v-else-if="formState === 'loading'"><Loader2 class="casa-spinner" :size="18" /> Enviando…</template><template v-else><Send :size="17" /> Enviar mensagem</template></button><p v-if="formState === 'success'" class="casa-form-note casa-form-success">Obrigada! Recebi sua mensagem. Em breve, entro em contato.</p><p v-else-if="formState === 'error'" class="casa-form-note casa-form-error">Não foi possível enviar agora. Tente novamente ou fale comigo pelo WhatsApp.</p></form></div><div class="casa-location motion-reveal" style="--delay:100ms"><MapPin :size="25" /><h3>Presencial e online</h3><p>O endereço do consultório presencial será informado em breve. Enquanto isso, podemos conversar para entender a melhor modalidade.</p><a class="casa-whatsapp-link" :href="whatsapp" target="_blank"><MessageCircle :size="17" /> Prefere falar comigo pelo WhatsApp?</a></div></section></template>
