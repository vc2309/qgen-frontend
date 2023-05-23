<template>
  <div class="container mx-auto p-4 bg-gradient-to-tr from-gray-900 to-blue-900 text-white h-screen">
    <div class="flex justify-between h-5/6">
      <div class="w-1/2 mx-4 bg-gray-800 rounded-lg shadow-lg relative top-11">
        <TextboxInput ref="textInput"/>
      </div>
      <div class="w-1/2 mx-4 bg-gray-800 rounded-lg shadow-lg relative top-11">
        <OutputContainer ref="outputContainer"></OutputContainer>
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
      output: ''
    }
  },
  mounted () {
    emitter.on("submit", this.onSubmit);
    axios.post("https://vbfsgcdwqd.execute-api.eu-west-2.amazonaws.com/Prod/generate_question/", {
        ans : '',
        cnt : 'data'
      }).then(console.log("warmed up")); 
  },
  beforeUnmount() {
    emitter.off("submit", this.onSubmit)
  },
  methods: {
    onSubmit(data) {
      axios.post("https://vbfsgcdwqd.execute-api.eu-west-2.amazonaws.com/Prod/generate_question/", data).then(response => {
        console.log("received")
        console.log(response)
        emitter.emit("questionGenerated", response.data.questions[0])
      }).catch(error => {console.error();})
    }
  }
}
</script>
