<template>
<div class="w-16 p-4 m-2 bg-gray-800 rounded-lg h-5/6 my-auto flex flex-col">
  <button @click="onNewConversation" >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="my-6 w-8 h-8 mx-auto hover:stroke-cyan-600" title="Start a new conversation">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </button>

  <button @click="onDeleteConversation">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="my-6 w-8 h-8 mx-auto hover:stroke-cyan-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  </button>

  <button @click="onNextConversation">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="my-6 w-8 h-8 mx-auto hover:stroke-cyan-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
    </svg>
  </button>

  <button @click="onPrevConversation">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="my-6 w-8 h-8 mx-auto hover:stroke-cyan-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
    </svg>
  </button>
</div>
</template>

<script>
import emitter from '@/eventBus';
export default {
  name : 'ToolbarContainer',
  methods : {
    onNewConversation(){
      emitter.emit("newConversation", {});
    },

    onNextConversation(){
      emitter.emit("nextConversation", {}); 
    },

    onPrevConversation(){
      emitter.emit("prevConversation", {}); 
    },

    onDeleteConversation(){
      emitter.emit("deleteConversation", {});
    }

  }






}
</script>