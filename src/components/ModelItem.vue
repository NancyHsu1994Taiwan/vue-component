<script>
// import { ref } from 'vue'
// import modal from '../../node_modules/bootstrap/js/dist/modal'
export default {
  props: ['title', 'content', 'footer'],
  setup() {
    let data = ''
    function showModel() {
      const model = document.querySelector('#model')
      // console.log(model.getAttribute('class'))
      let status = model.getAttribute('class')
      if (status == 'd-none') {
        model.setAttribute('class', 'd-block')
      } else {
        model.setAttribute('class', 'd-none')
      }
    }
    return {
      showModel,
      data
      //   sendMsg,
    }
  }
}
</script>
<template>
  <div>
    <div id="model" class="d-none">
      <slot> {{ title }} </slot>
      <slot>
        <p>{{ content }}</p>
      </slot>
      <slot>{{ footer }}</slot>
    </div>

    <input type="button" class="modelBtn" value="click to see model" @click="showModel" />
  </div>
</template>
<style>
.modelBtn {
  background-color: #fff !important;
  color: black;
  border-radius: 4px;
  padding: 4px;
  margin: 8px;
}

#model {
  padding: 16px;
  background-color: rgb(43, 43, 43);
  border: #707070 1px solid;
  border-radius: 4px;
  width: 500px;
  height: 500px;
  position: absolute;
  top: -500px;
  right: -600px;
  z-index: 10;
  font-size: 36px;
}
.d-none {
  display: none;
}
.d-block {
  display: block;
}
</style>
