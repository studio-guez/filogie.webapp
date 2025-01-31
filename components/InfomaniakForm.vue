<template>
    <section class="v-infomaniak-form"
    >
      <form method="post"
            action="https://newsletter.infomaniak.com/v3/api/1/newsletters/webforms/19771/submit"
            class="inf-form"><input type="email" name="email" style="display:none"/><input type="hidden" name="key"
                                                                                           value="eyJpdiI6Imt6c3dNUnJNQ1F4XC9cLzdtVlRSTWRFRU5cL1wvdWJ1MFF2MDdcL3dxbWpVYkRobz0iLCJtYWMiOiJjNzEyZjRiMjNmZjEzYjMxMzMzMTcwYTNlYjI1MmMwOWJlMGQxNWE3OTUyNTIwMWEwZTRlYmJhMjM0MDdhM2JiIiwidmFsdWUiOiIraklNc1hWS09vMHlUN0sxWXNIM2pCM0FxXC9qQjZRRUpHak1KOTZvWmMxND0ifQ=="><input
              type="hidden" name="webform_id" value="19771">
        <div class="inf-main_4afa2aea8aa76eddf65a3b2c12a8f5f6">
          <div class="inf-success" style="display:none">
            <h4>Votre inscription a été enregistrée avec succès !</h4>
            <p><a href="#" class="inf-btn">&laquo;</a></p>
          </div>
          <div class="inf-content">
            <div class="inf-input inf-input-text"><input type="email" name="inf[1]" data-inf-meta="1"
                                                         data-inf-error="" required="required" placeholder="Email *">
            </div>
            <div class="inf-rgpd">Votre adresse de messagerie est uniquement utilisée pour vous envoyer notre lettre d&#039;information
              ainsi que des informations concernant nos activités. Vous pouvez à tout moment utiliser le lien de
              désabonnement intégré dans chacun de nos mails.
            </div>
            <div style=""><label
                    data-mcaptcha_url="https://captcha.infomaniak.com/widget/?sitekey=wKJaAigS1e48fWgqtjvg5w7rKA6QIwmy"
                    for="mcaptcha__token" id="mcaptcha__token-label"> <input type="text" name="mcaptcha__token"
                                                                             id="mcaptcha__token"/> </label>
              <div id="mcaptcha__widget-container"></div>
              <div ref="jsContainer"></div>
            </div>
            <div class="inf-submit"><input type="submit" style="margin-top: 25px;" name="" value="Valider"></div>
          </div>
        </div>
      </form>
    </section>
</template>





<script setup lang="ts">
const jsContainer: Ref<HTMLElement | null> = ref(null)

onMounted(() => {
    if( ! (jsContainer.value instanceof HTMLElement) ) return

    const script = document.createElement("script")
    script.src = "https://unpkg.com/@mcaptcha/vanilla-glue@0.1.0-rc2/dist/index.js"
    script.async = true
    jsContainer.value.appendChild(script)
})

</script>





<style lang="scss" scoped >
.v-infomaniak-form {
}
</style>
