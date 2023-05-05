<script type="module">
import { onMounted, reactive } from 'vue'
import axios from 'axios'
export default {
  setup() {
    const data = reactive({
      newData: []
    })
    function test() {
      // console.log(1, data)
    }

    function getData() {
      axios
        .get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
        .then((res) => {
          // console.log(res)
          data.newData = res.data.data
          // console.log(2, data)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    onMounted(() => {
      getData()
    })
    onMounted(() => {
      test()
    })
    return {
      data,
      getData,
      test
    }
  }
}
</script>
<template>
  <div class="grid grid-cols-3 gap-7">
    <div class="col" v-for="(item, index) in data.newData" :key="index">
      <div class="card drop-shadow relative h-[476px]">
        <a href="#">
          <img :src="item.imgUrl" alt="" srcset="" class="h-[180px] rounded-t" />
        </a>
        <div
          class="region absolute top-[-10px] bg-primary text-white rounded-r py-2 px-[20px] z-10"
        >
          {{ item.area }}
        </div>
        <div
          class="rank absolute top-[8rem] w-[40px] rounded-r bg-secondary text-white text-center p-1 z-10"
        >
          {{ item.rate }}
        </div>
        <div class="p-[20px] bg-white rounded-b flex flex-col justify-between h-[296px]">
          <div class="content">
            <h3 class="border-b-2 border-secondary">
              <a href="#" class="name text-2xl text-secondary">{{ item.name }}</a>
            </h3>
            <p class="description text-text">{{ item.description }}</p>
          </div>
          <div class="info flex justify-between">
            <p class="num text-secondary mr-2">
              剩下最後 <span id="ticketCard-num"> {{ item.group }}</span> 組
            </p>
            <p class="price text-secondary">
              TWD <span id="ticketCard-price" class="text-4xl">${{ item.price }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
