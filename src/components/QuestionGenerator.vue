<template>
  <div class="container mx-auto p-4 text-white h-screen">
    <div class="flex justify-between h-5/6">
      <div class="w-1/2 mx-4 bg-gray-800 rounded-lg shadow-lg relative top-11">
        <TextboxInput ref="textInput" :currConversation="currConversation"/>
      </div>
      <div class="w-1/2 mx-4 bg-gray-800 rounded-lg shadow-lg relative top-11">
        <OutputContainer ref="outputContainer" :currConversation="currConversation"></OutputContainer>
      </div>
    </div>
  </div>
</template>

<script>

import TextboxInput from './TextboxInput.vue'
import OutputContainer from './OutputContainer.vue'
import emitter from '@/eventBus'
import axios from 'axios';
export default {
  name: 'QuestionGenerator',
  components: {
    TextboxInput,
    OutputContainer
},
  data () {
    return {
      darkMode: false,
      input: '',
      output: '',
      totalConvos : 1,
      currConversation : 0
    }
  },
  mounted () {
    emitter.on("submit", this.onSubmit);
    axios.post("https://vbfsgcdwqd.execute-api.eu-west-2.amazonaws.com/Prod/generate_question/", {
        ans : '',
        cnt : 'data'
      }).then(console.log("warmed up")); 
    
    emitter.on("newConversation", this.onNewConversation);
    emitter.on("nextConversation", this.onNextConversation);
    emitter.on("prevConversation", this.onPrevConversation);
    emitter.on("deleteConversation", this.onDeleteConversation);
  },
  beforeUnmount() {
    emitter.off("submit", this.onSubmit);
    emitter.off("newConversation", this.onNewConversation);
    emitter.off("nextConversation", this.onNextConversation);
    emitter.on("deleteConversation", this.onDeleteConversation);

  },
  methods: {
    onSubmit(data) {
      axios.post("https://vbfsgcdwqd.execute-api.eu-west-2.amazonaws.com/Prod/generate_question/", data).then(response => {
        console.log("received")
        console.log(response)
        emitter.emit("questionGenerated", response.data.questions[0])
      }).catch(error => {console.error();})
    },

    onNewConversation() {
      if (this.totalConvos<=5) {
        this.totalConvos++;
        this.$refs.outputContainer.startNewConversation();
        this.$refs.textInput.startNewConversation();
        this.currConversation++;
      }
      else{
        alert("A maximum of 5 articles are permitted!");
      }
    },

    onNextConversation() {
      if (this.currConversation < this.totalConvos-1){
        this.currConversation++;
      }
    },

    onPrevConversation() {
      if (this.currConversation > 0){
        this.currConversation--;
      }
    },

    onDeleteConversation() {
      if (this.totalConvos>1){
        if (this.currConversation == this.totalConvos-1){
          this.currConversation--;
        }
        this.$refs.outputContainer.deleteCurrentConversation();
        this.$refs.textInput.deleteCurrentConversation();
        this.totalConvos--;
      }
    }
  }
}
</script>
