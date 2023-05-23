<template>
  <div class="h-screen ">
    <header class="sticky py-1 border-gray-800 bg-gray-900"><nav class="font-Cabin px-10 text-left text-blue-400 font-bold text-2xl">QuestionGenerator</nav></header>
    <QuestionGenerator />
</div>
</template>

<script>
import QuestionGenerator from './components/QuestionGenerator.vue'

export default {
  name: 'App',
  components: {
    QuestionGenerator
  }
}
</script>

<style>
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
