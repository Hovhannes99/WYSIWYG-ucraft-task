<template>
  <button  class="wysiwyg-button" @click.prevent="redo">
    Redo
  </button>
</template>
<script setup>
import executeCommand from "@/helper/executeCommand";


const redo = () => {
  executeCommand('redo');
};
</script>
