<template>
  <div class="h-full mx-auto p-4 from-slate-950 rounded-md text-black text-lg justify-items-center ">
    <textarea v-model="input[currConversation]" class="p-2 h-5/6 w-11/12 rounded-md border border-solid text-left placeholder-gray-700" placeholder="Enter the article here..." ></textarea>
    <input v-show="!batchMode" v-model="answer[currConversation]" class="p-2 mt-4 w-11/12 rounded-md border border-solid text-left placeholder-gray-700" placeholder="Enter the answer to the question here..."/>
  </div>
  <button @click="onSubmit" class="button w-1/2 border-solid border border-white rounded-lg mt-2 text-white text-2xl hover:bg-cyan-600">Submit</button>
</template>
<script>
import emitter from '@/eventBus';

export default {
  name: 'TextboxInput',
  components: {
  },
  props : ['currConversation', 'batchMode']
  ,
  data () {
    return {
      input: [''],
      answer: ['']
    }
  },
  mounted () {
    
  },
  methods: {
    toggleDarkMode () {
      this.darkMode = !this.darkMode
    },
    onSubmit(){
      emitter.emit("submit", {cnt : this.input[this.currConversation], ans : this.answer[this.currConversation]});
    },
    startNewConversation(){
      this.input.push('');
      this.answer.push('');
    },
    getCurrInput(){
      return this.input[this.currConversation];
    },
    deleteCurrentConversation(){
      this.input.splice(this.currConversation,1);
      this.answer.splice(this.currConversation,1);
    }
  }
}
</script>
