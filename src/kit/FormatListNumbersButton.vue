<template>
  <button  class="wysiwyg-button" @click.prevent="orderedList">
    List NUm
  </button>
</template>
<script setup>
import executeCommand from "@/helper/executeCommand";
const orderedList = () => {
  executeCommand('insertOrderedList');
}
</script>
