<template>
  <button  class="wysiwyg-button" @click.prevent="alignLeft">
     Align Left
  </button>
</template>
<script setup>
import executeCommand from "@/helper/executeCommand";


const alignLeft = () => {
  executeCommand('justifyLeft');
}
</script>
