<template>
  <button  class="wysiwyg-button" :class="isStrikedThrough ? 'wysiwyg-button-active' : ''" @click.prevent="strikeThrough">
    <FormatStrikethrough/>
  </button>
</template>
<script setup>
import {defineProps, ref, watch} from "vue"
import executeCommand from "@/helper/executeCommand";
import FormatStrikethrough from 'vue-material-design-icons/FormatStrikethrough.vue';




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
