<template>
  <title>Vishnu's Question Generator</title>
  <div class="h-screen bg-gradient-to-tr from-gray-900 to-blue-900 overflow-hidden">
    <header class="sticky py-1 border-gray-800 bg-gray-900 "><nav class="font-Cabin px-10 text-left text-cyan-600 font-thin text-2xl">QuestionGenerator</nav></header>
    <div class="flex flex-row h-full">
    <ToolbarContainer class="mt-14"/>
    <QuestionGenerator class="my-auto"/>
    </div>
</div>
</template>

<script>
import QuestionGenerator from './components/QuestionGenerator.vue'
import ToolbarContainer from './components/ToolbarContainer.vue';

export default {
  name: 'App',
  components: {
    QuestionGenerator,
    ToolbarContainer
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
