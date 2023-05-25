<template>
  <div class="w-16 p-4 m-2 bg-gray-800 rounded-lg h-5/6 my-auto flex flex-col">
    <button @click="onNewConversation" title="Start a new conversation">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="my-6 w-8 h-8 mx-auto hover:stroke-cyan-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>

    <button @click="onDeleteConversation" title="Delete current conversation">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="my-6 w-8 h-8 mx-auto hover:stroke-cyan-600">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    </button>

    <button @click="onNextConversation" title="Next conversation">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="my-6 w-8 h-8 mx-auto hover:stroke-cyan-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
      </svg>
    </button>

    <button @click="onPrevConversation" title="Previous conversation">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="my-6 w-8 h-8 mx-auto hover:stroke-cyan-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
      </svg>
    </button>

    <button @click="toggleBatchMode" title="Toggle answer/batch mode">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="my-6 w-8 h-8 mx-auto hover:stroke-cyan-600">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    </button>

    <button @click="exportToJson" title="Export results to JSON">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
        class="my-6 w-8 h-8 mx-auto hover:stroke-cyan-600">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    </button>

  </div>
</template>

<script>
import emitter from '@/eventBus';
export default {
  name: 'ToolbarContainer',
  methods: {
    onNewConversation() {
      emitter.emit("newConversation", {});
    },

    onNextConversation() {
      emitter.emit("nextConversation", {});
    },

    onPrevConversation() {
      emitter.emit("prevConversation", {});
    },

    onDeleteConversation() {
      emitter.emit("deleteConversation", {});
    },

    toggleBatchMode() {
      emitter.emit("toggleBatchMode", {});
    },
    exportToJson() {
      emitter.emit("exportToJson", {});
    }

  }






}
</script>