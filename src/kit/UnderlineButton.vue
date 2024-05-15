<template>
  <button name="underline-btn" class="wysiwyg-button" :class="isUnderlined ? 'wysiwyg-button-active' : ''" @click.prevent="underline">
   Underline
  </button>
</template>
<script setup>
import {defineProps, ref, watch} from "vue"
import executeCommand from "@/helper/executeCommand";


const isUnderlined = ref(false)
const props = defineProps({
  isActive:{
    type: Boolean,
    default: false
  }
})

watch(()=>props.isActive, ()=>{
  isUnderlined.value = props.isActive
})

const underline = () => {
  isUnderlined.value = !isUnderlined.value;
  executeCommand('underline');
}
</script>
