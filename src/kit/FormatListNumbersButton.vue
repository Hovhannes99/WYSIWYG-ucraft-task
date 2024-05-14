<template>
  <button  class="wysiwyg-button" @click.prevent="orderedList">
    <FormatListNumbered/>
  </button>
</template>
<script setup>
import executeCommand from "@/helper/executeCommand";
import FormatListNumbered from "vue-material-design-icons/FormatListNumbered.vue";
const orderedList = () => {
  executeCommand('insertOrderedList');
}
</script>
