<template>
  <button  class="wysiwyg-button" @click.prevent="insertUnorderedList">
    Point List
  </button>
</template>
<script setup>
import executeCommand from "@/helper/executeCommand";
const insertUnorderedList = () => {
  executeCommand('insertUnorderedList');
}
</script>
