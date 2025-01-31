<template>
    <section class="v-infomaniak-form"
    >
      <form method="post"
            action="https://newsletter.infomaniak.com/v3/api/1/newsletters/webforms/19771/submit"
            >
        <input type="email"
               name="email"
               style="display:none"
        />
        <input type="hidden"
               name="key"
               value="eyJpdiI6Imt6c3dNUnJNQ1F4XC9cLzdtVlRSTWRFRU5cL1wvdWJ1MFF2MDdcL3dxbWpVYkRobz0iLCJtYWMiOiJjNzEyZjRiMjNmZjEzYjMxMzMzMTcwYTNlYjI1MmMwOWJlMGQxNWE3OTUyNTIwMWEwZTRlYmJhMjM0MDdhM2JiIiwidmFsdWUiOiIraklNc1hWS09vMHlUN0sxWXNIM2pCM0FxXC9qQjZRRUpHak1KOTZvWmMxND0ifQ=="
        >
        <input type="hidden"
               name="webform_id"
               value="19771"
        >
        <div class="app-grid-coll-container app-grid-coll-container--center">
          <div class="v-infomaniak-form__input-mail app-grid-coll-18-24">
            <input type="email"
                   name="inf[1]"
                   data-inf-meta="1"
                   data-inf-error=""
                   required="required"
                   placeholder="Email *"
            >
          </div>
          <div class="v-infomaniak-form__submit app-grid-coll-6-24">
            <input type="submit"
                   name=""
                   value="Valider"
            >
          </div>

          <div class="app-grid-coll-18-24"></div>
          <div class="v-infomaniak-form__recapcha app-grid-coll-6-24">
            <label data-mcaptcha_url="https://captcha.infomaniak.com/widget/?sitekey=wKJaAigS1e48fWgqtjvg5w7rKA6QIwmy"
                   for="mcaptcha__token" id="mcaptcha__token-label">
              <input type="text" name="mcaptcha__token" id="mcaptcha__token"/>
            </label>
            <div id="mcaptcha__widget-container"></div>
            <div ref="jsContainer"></div>
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
  background: #FFE103;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 1rem;
}

#mcaptcha__widget-container {
  height: 3rem;
}

.v-infomaniak-form__input-mail {
  padding-right: 1rem;

  input {
    box-sizing: border-box;
    display: block;
    border: none;
    width: 100%;
    line-height: 1rem;
    height: 2rem;
    border-radius: 1rem;
    padding: .5rem;
  }
}

.v-infomaniak-form__submit {
  input {
    display: block;
    width: 100%;
    height: 2rem;
    border: none;
    border-radius: 1rem;
    color: black;
    background-color: #BFA379;
  }
}

.v-infomaniak-form__recapcha {
  padding-top: 1rem;
}


</style>
