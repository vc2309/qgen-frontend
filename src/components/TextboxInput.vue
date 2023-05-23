<template>
  <div class="h-full mx-auto p-4 from-slate-950 rounded-md text-black text-lg justify-items-center ">
    <textarea v-model="input" class="p-2 h-5/6 w-11/12 rounded-md border border-solid text-left placeholder-gray-700" placeholder="Enter the article here..." ></textarea>
    <input v-model="answer" class="p-2 mt-4 w-11/12 rounded-md border border-solid text-left placeholder-gray-700" placeholder="Enter the answer to the question here..."/>
  </div>
  <button @click="onSubmit" class="button w-full bg-white rounded-lg border-stone-600 text-gray-900 text-2xl hover:bg-gray-900 hover:text-white">Submit</button>
</template>
<script>
import emitter from '@/eventBus';

export default {
  name: 'TextboxInput',
  components: {
  },
  data () {
    return {
      input: '',
      answer: ''
    }
  },
  mounted () {
    
  },
  methods: {
    toggleDarkMode () {
      this.darkMode = !this.darkMode
    },
    onSubmit(){
      emitter.emit("submit", {cnt : this.input, ans : this.answer});
    }
  }
}
</script>
