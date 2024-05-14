<template>
  <button  class="wysiwyg-button" @click.prevent="insertUnorderedList">
    <FormatListBulleted/>
  </button>
</template>
<script setup>
import executeCommand from "@/helper/executeCommand";
import FormatListBulleted from "vue-material-design-icons/FormatListBulleted.vue";
const insertUnorderedList = () => {
  executeCommand('insertUnorderedList');
}
</script>
