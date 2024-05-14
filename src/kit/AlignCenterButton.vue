<template>
  <button  class="wysiwyg-button" @click.prevent="alignCenter">
    <FormatAlignCenter/>
  </button>
</template>
<script setup>
import executeCommand from "@/helper/executeCommand";
import FormatAlignCenter from "vue-material-design-icons/FormatAlignCenter.vue";


const alignCenter = () => {
  executeCommand('justifyCenter');
}
</script>
