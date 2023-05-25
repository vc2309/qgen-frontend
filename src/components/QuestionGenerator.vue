<template>
  <div class="container mx-auto p-4 text-white h-screen">
    <div class="flex justify-between h-5/6">
      <div class="w-1/2 mx-4 bg-gray-800 rounded-lg shadow-lg relative top-11">
        <TextboxInput ref="textInput" :currConversation="currConversation" :batchMode="batchMode" />
      </div>
      <div class="w-1/2 mx-4 bg-gray-800 rounded-lg shadow-lg relative top-11">
        <OutputContainer ref="outputContainer" :loading="loading" :currConversation="currConversation"></OutputContainer>
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
  data() {
    return {
      darkMode: false,
      input: '',
      output: '',
      totalConvos: 1,
      currConversation: 0,
      batchMode: true,
      loading: false
    }
  },
  mounted() {
    emitter.on("submit", this.onSubmit);
    axios.post("https://vbfsgcdwqd.execute-api.eu-west-2.amazonaws.com/Prod/generate_question/", {
      ans: '',
      cnt: 'data',
      batch: true
    }).then(console.log("warmed up"));

    emitter.on("newConversation", this.onNewConversation);
    emitter.on("nextConversation", this.onNextConversation);
    emitter.on("prevConversation", this.onPrevConversation);
    emitter.on("deleteConversation", this.onDeleteConversation);
    emitter.on("toggleBatchMode", this.toggleBatchMode);
    emitter.on("exportToJson", this.exportToJson);
  },
  beforeUnmount() {
    emitter.off("submit", this.onSubmit);
    emitter.off("newConversation", this.onNewConversation);
    emitter.off("nextConversation", this.onNextConversation);
    emitter.off("deleteConversation", this.onDeleteConversation);
    emitter.off("toggleBatchMode", this.toggleBatchMode);
    emitter.off("exportToJson", this.exportToJson);
  },
  methods: {
    onSubmit(data) {
      data['batch'] = this.batchMode;
      const conversationIdx = this.currConversation;
      if (data.cnt.length > 2500) {
        alert("Maximum article length is 2500 characters!")
        return;
      }

      if (data.ans.length == 0 && !this.batchMode) {
        alert("Answer cannot be empty!");
        return;
      }
      this.loading = true;
      axios.post("https://vbfsgcdwqd.execute-api.eu-west-2.amazonaws.com/Prod/generate_question/", data).then(response => {
        this.loading = false;
        response.data.questions.forEach(q => {
          emitter.emit("questionGenerated", { question: q, conversationIdx: conversationIdx });
        });
      }).catch(error => { console.error(error); })
    },

    onNewConversation() {
      if (this.totalConvos <= 5) {
        this.totalConvos++;
        this.$refs.outputContainer.startNewConversation();
        this.$refs.textInput.startNewConversation();
        this.currConversation++;
      }
      else {
        alert("A maximum of 5 articles are permitted!");
      }
    },

    onNextConversation() {
      if (this.currConversation < this.totalConvos - 1) {
        this.currConversation++;
      }
    },

    onPrevConversation() {
      if (this.currConversation > 0) {
        this.currConversation--;
      }
    },

    onDeleteConversation() {
      if (this.totalConvos > 1) {
        if (this.currConversation == this.totalConvos - 1) {
          this.currConversation--;
        }
        this.$refs.outputContainer.deleteCurrentConversation();
        this.$refs.textInput.deleteCurrentConversation();
        this.totalConvos--;
      }
    },

    toggleBatchMode() {
      this.batchMode = !this.batchMode;
    },

    exportToJson() {
      const contexts = this.$refs.textInput.input;
      const questions = this.$refs.outputContainer.questions;

      let docs = [];
      for (let i = 0; i < this.totalConvos; i++) {
        if (contexts[i].length > 0 && questions[i][0].length > 0) {
          docs.push(
            {
              context: contexts[i],
              questions: questions[i]
            }
          )
        }
      }
      const jsonData = JSON.stringify(docs, null, 2);
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'question_generator_results.json';
      a.click();

      URL.revokeObjectURL(url);
    }
  }
}
</script>
