<template>
  <div class="w-full bg-white rounded-lg text-gray-900 text-2xl">Generations</div>
  <div ref="scrollContainer" class="p-2 mx-auto my-auto h-5/6 w-11/12 rounded-md from-slate-950 text-left overflow-y-scroll ">
          <div v-show="questions.length == 0" class="text-center text-white text-3xl">Submit your article to generate questions!</div>
          <div v-show="questions.length > 0" v-for="item in questions" class="p-2 scroll-smooth">
            <div class="p-4 w-full h-fit border-white border-solid border rounded-xl hover:bg-white hover:text-black ">{{ item }}</div>
          </div>
          <div class="p-2 scroll-smooth" v-show="loading">
          <div  class="p-4 flex Loading... justify-between h-fit border-white border-solid border rounded-xl">
            <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>Loading...</div>
          </div>
  </div>
</template>
<script>
import emitter from '@/eventBus';
export default {
  name: 'OutputContainer',
  components: {
  },
  data () {
    return {
      questions : [],
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
    })
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
      console.log(this.questions);
      this.questions.push(data);

      console.log(this.questions);
    },
    scrollToBottom() {
      const container = this.$refs.scrollContainer;
      container.scrollTop = container.scrollHeight;
    }
  }
}

</script>
<style>
li {
  list-style: none;
}
</style>