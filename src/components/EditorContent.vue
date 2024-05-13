<template>
  <div id="body" :style="{'height': `${height}px`}">
    <div id="editor" contenteditable :style="{'min-height': `${height}px`}"></div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'
defineProps({
  height:{
    type: Number,
    default: 0,
    required: true
  }
})
</script>

<style scoped>
#body {
  overflow: auto;
  display: inline-block;
  width: 100%
}
#editor {
  padding: 20px;
}
</style>
