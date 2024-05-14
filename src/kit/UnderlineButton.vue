<template>
  <button  class="wysiwyg-button" :class="isUnderlined ? 'wysiwyg-button-active' : ''" @click.prevent="underline">
    <FormatUnderline/>
  </button>
</template>
<script setup>
import {defineProps, ref, watch} from "vue"
import executeCommand from "@/helper/executeCommand";
import FormatUnderline from 'vue-material-design-icons/FormatUnderline.vue';


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
