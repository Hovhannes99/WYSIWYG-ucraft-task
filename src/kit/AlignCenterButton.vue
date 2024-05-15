<template>
  <button  class="wysiwyg-button" @click.prevent="alignCenter">
     Align Center
  </button>
</template>
<script setup>
import executeCommand from "@/helper/executeCommand";


const alignCenter = () => {
  executeCommand('justifyCenter');
}
</script>
