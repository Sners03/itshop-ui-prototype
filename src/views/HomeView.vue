<script>
import HelloWorld from '../components/HelloWorld.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useCounterStore()

    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  }
}
</script>

<template>
  <main>
    Hallo
  </main>
</template>
