<template>
  <button  class="wysiwyg-button" :class="isBold ? 'wysiwyg-button-active' : ''" @click.prevent="bold">
    <FormatBold/>
  </button>
</template>
<script setup>
import FormatBold from "vue-material-design-icons/FormatBold.vue";
import {defineProps, ref, watch} from "vue"
import executeCommand from "@/helper/executeCommand";


const isBold = ref(false)
const props = defineProps({
  isActive:{
    type: Boolean,
    default: false
  }
})

watch(()=>props.isActive, ()=>{
  isBold.value = props.isActive
})

const bold = () => {
  isBold.value = !isBold.value;
  executeCommand('bold');
}
</script>
