<template>
  <button  class="wysiwyg-button" @click.prevent="alignLeft">
    <FormatAlignLeft/>
  </button>
</template>
<script setup>
import executeCommand from "@/helper/executeCommand";
import FormatAlignLeft from "vue-material-design-icons/FormatAlignLeft.vue";


const alignLeft = () => {
  executeCommand('justifyLeft');
}
</script>
