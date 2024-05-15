<template>
  <button  class="wysiwyg-button" @click.prevent="alignRight">
   Align Right
  </button>
</template>
<script setup>
import executeCommand from "@/helper/executeCommand";


const alignRight = () => {
  executeCommand('justifyRight');
}
</script>
