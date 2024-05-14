<template>
  <button  class="wysiwyg-button" @click.prevent="undo">
     Undo
  </button>
</template>
<script setup>
import executeCommand from "@/helper/executeCommand";


const undo = () => {
  executeCommand('undo');
};
</script>
