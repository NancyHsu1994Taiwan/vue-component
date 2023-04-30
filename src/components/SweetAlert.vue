<script>
import Swal from 'sweetalert2'
// import { onMounted } from 'vue'
export default {
  setup() {
    function showSweetAlert() {
      Swal.fire({
        title: 'Yes!',
        text: 'You made it',
        confirmButtonText: 'Cool'
      })
    }

    // onMounted(() => {
    //   showSweetAlert
    // })
    return {
      showSweetAlert
    }
  }
}
</script>
<template>
  <button class="btn-sweetAlert" v-on:click="showSweetAlert">click to see sweetAlert</button>
</template>
<style scoped>
.btn-sweetAlert {
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 4px;
  margin: 8px;
}
</style>
