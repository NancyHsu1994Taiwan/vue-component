<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import SweetAlert from './components/SweetAlert.vue'
import LoadingOverlay from './components/LoadingOverlay.vue'
import Model from './components/ModelItem.vue'
components: {
  SweetAlert, LoadingOverlay, Model
}

let langData = [
  {
    name: '中文',
    value: 'ch',
    title: '中文表頭',
    content: '中文內容',
    footer: '中文表尾'
  },
  {
    name: 'English',
    value: 'eng',
    title: 'English Title',
    content: 'English Content',
    footer: 'English Footer'
  },
  {
    name: '日本語',
    value: 'jap',
    title: '日本語ヘッダー',
    content: '日本語コンテンツ',
    footer: '日本語エンディング'
  }
]

let langSelected = ref('')

let lang = computed(() => {
  let arr = langData.filter((item) => {
    return item.value == langSelected.value
  })
  return arr
})
</script>

<template>
  <header class="w-[100%]">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <div class="">
        <h1>sweetAlert實做</h1>
        <SweetAlert />
      </div>
      <div class="">
        <h1>LoadingOverlay實做</h1>
        <LoadingOverlay />
      </div>
      <div class="">
        <h1>model實做</h1>
        <p>請選擇語言</p>
        <select class="selectBtn" v-model="langSelected">
          <option v-for="(item, index) in langData" :key="index" :value="item.value">
            {{ item.name }}
          </option>
        </select>
        <Model
          v-for="item in lang"
          :key="item.id"
          :title="item.title"
          :content="item.content"
          :footer="item.footer"
        />
        <!-- <input type="button" value="問題討論1" class="model-btn" />
        <input type="button" value="問題討論2" class="model-btn" />
        <Model>
          <template v-slot:title>問題討論1</template>
          <template v-slot:content>專題要做什麼主題</template>
          <template v-slot:footer>2023-05-01</template>
        </Model>
        <Model>
          <template v-slot:title>問題討論2</template>
          <template v-slot:content>下周值日生怎麼安排</template>
          <template v-slot:footer>2023-05-02</template>
        </Model> -->
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
h1 {
  font-size: 1rem;
  color: #fff;
}
.model-btn {
  padding: 4px;
  color: black;
  background-color: white;
  border-radius: 4px;
  margin: 4px;
}
.selectBtn {
  color: black !important;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
