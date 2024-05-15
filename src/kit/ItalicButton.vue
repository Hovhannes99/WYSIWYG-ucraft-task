<template>
  <button  name="italic-btn"  class="wysiwyg-button" :class="isItalic ? 'wysiwyg-button-active' : ''" @click.prevent="italic">
    Italic
  </button>
</template>
<script setup>
import {defineProps, ref, watch} from "vue"
import executeCommand from "@/helper/executeCommand";


const isItalic = ref(false)
const props = defineProps({
  isActive:{
    type: Boolean,
    default: false
  }
})

watch(()=>props.isActive, ()=>{
  isItalic.value = props.isActive
})

const italic = () => {
  isItalic.value = !isItalic.value;
  executeCommand('italic');
}
</script>
