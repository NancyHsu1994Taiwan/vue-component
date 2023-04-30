<script type="module">
// import TheWelcome from '../components/TheWelcome.vue'
import Card from '../components/CardArea.vue'

export default {
  components: {
    Card
  }
}
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <Card />
  </main>
</template>
<style>
@media (min-width: 1024px) {
  main {
    width: 120%;
    left: -100px;
  }
}
</style>
