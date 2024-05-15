<template>
  <button name="strike-btn" class="wysiwyg-button" :class="isStrikedThrough ? 'wysiwyg-button-active' : ''" @click.prevent="strikeThrough">
   Strikethrough
  </button>
</template>
<script setup>
import {defineProps, ref, watch} from "vue"
import executeCommand from "@/helper/executeCommand";




const isStrikedThrough = ref(false)
const props = defineProps({
  isActive:{
    type: Boolean,
    default: false
  }
})

watch(()=>props.isActive, ()=>{
  isStrikedThrough.value = props.isActive
})

const strikeThrough = () => {
  isStrikedThrough.value = !isStrikedThrough.value;
  executeCommand('strikeThrough');
}
</script>
