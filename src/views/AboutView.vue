<script type="module">
import Card from '../components/CardArea.vue'
export default {
  components: {
    Card
  }
}
</script>
<template>
  <div class="about"><Card /></div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    width: 120%;
    left: -100px;
  }
}
</style>
