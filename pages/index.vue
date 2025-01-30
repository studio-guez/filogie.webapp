<template>
    <section
        class="v-index"
    >
      Filogie
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    message?: string
}>()
</script>





<style lang="scss" scoped >
.v-index {
  font-family: sans-serif;
}
</style>
