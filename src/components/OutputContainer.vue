<template>
  <div ref="scrollContainer" class="p-2 mx-auto my-auto h-5/6 w-11/12 rounded-md from-slate-950 text-left overflow-y-auto ">
          <div v-show="(currConversationLength() == 0) && !loading" class=" mt-20 text-center text-white text-xl">Submit your article to generate questions!</div>
          <div v-show="currConversationLength() > 0" v-for="item in getCurrentConversationQuestions()" class="p-2">
            <div class="p-4 w-full h-fit border-white border-solid border rounded-xl hover:bg-white hover:text-black ">{{ item }}</div>
          </div>
          <div class="p-2 scroll-smooth" v-show="loading">
          <div  class="p-4 flex Loading... justify-between h-fit border-white border-solid border rounded-xl">
            <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>Loading...</div>
          </div>
  </div>
  <div class="mt-10">{{ currConversation+1 }}</div>
</template>
<script>
import emitter from '@/eventBus';
export default {
  name: 'OutputContainer',
  components: {
  },
  props: ['currConversation'],
  data () {
    return {
      questions : [[]],
      loading : false
    }
  },
  mounted () {
    emitter.on("questionGenerated", (data) => {
    this.loading = false;
    this.onInput(data);
    });

    emitter.on("submit", () => {
      this.loading = true;
    });

  },
  beforeUnmount() {
    emitter.off("submit");
    emitter.off("questionGenerated");

  },
  updated() {
    this.scrollToBottom();
  },
  methods: {
    onInput (data) {
      this.questions[this.currConversation].push(data);
    },
    scrollToBottom() {
      const container = this.$refs.scrollContainer;
      container.scrollTop = container.scrollHeight;
    },
    startNewConversation(){
      this.questions.push([]);

    },
    currConversationLength(){
      return this.questions[this.currConversation].length;
    },
    getCurrentConversationQuestions(){
      return this.questions[this.currConversation];
    },
    deleteCurrentConversation(){
      this.questions.splice(this.currConversation,1);
    }
  }
}

</script>
<style>
li {
  list-style: none;
}
</style>