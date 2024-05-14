<template>
  <div id="body" :style="{'height': `${height}px`}">
    <div id="editor" contenteditable :style="{'min-height': `${height}px`}" v-on:mouseup="handleText">
      <p>Type your text</p>
    </div>
  </div>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'
defineProps({
  height:{
    type: Number,
    default: 0,
    required: true
  }
})
const emits =  defineEmits(['handleActivity'])

const handleText = () => {
  const selection = window.getSelection();
  if (selection && !selection.isCollapsed) {
    const range = selection.getRangeAt(0);
    const computedStyle = window.getComputedStyle(range.commonAncestorContainer.parentNode);
    const fontStyle = computedStyle.getPropertyValue('font-style');
    const fontWeight = computedStyle.getPropertyValue('font-weight');
    const fontSize = computedStyle.getPropertyValue('font-size');
    const textDecoration = computedStyle.getPropertyValue('text-decoration');
    emits('handleActivity', {fontStyle, fontWeight, fontSize, textDecoration})
  }
}
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
