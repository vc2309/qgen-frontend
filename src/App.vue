<template>
  <title>Vishnu's Question Generator</title>
  <div class="h-screen bg-gradient-to-b from-gray-600 to-stone-500 overflow-hidden">
    <header class="sticky py-1 border-gray-800 bg-gray-900 ">
      <nav class="font-Cabin px-10 text-left flex text-cyan-600 font-thin text-2xl"><svg
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-8 h-8 mx-2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>QuestionGen</nav>
    </header>
    <div class="flex flex-row h-full">
      <ToolbarContainer class="mt-14" />
      <QuestionGenerator class="my-auto" />
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
}</style>
