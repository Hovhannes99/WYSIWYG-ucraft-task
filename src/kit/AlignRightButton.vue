<template>
  <button  class="wysiwyg-button" @click.prevent="alignRight">
    <FormatAlignRight/>
  </button>
</template>
<script setup>
import executeCommand from "@/helper/executeCommand";
import FormatAlignRight from "vue-material-design-icons/FormatAlignRight.vue";


const alignRight = () => {
  executeCommand('justifyRight');
}
</script>
