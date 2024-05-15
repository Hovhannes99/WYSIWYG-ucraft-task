<template>
    <button name="size-btn" class="wysiwyg-button" :class="isHeading ? 'wysiwyg-button-active' : ''" @click.prevent="showHeadings">
       Font Size
    </button>
    <div v-if="showHeadingOptions" class="buttons">
      <div class="wysiwyg-button-loop">
        <button class="wysiwyg-button button" v-for="size in paragraphSize" :key="size"
              :name="`size-btn-${size}`" @click.prevent="heading(size)">{{ size }}
        </button>
      </div>

    </div>
</template>
<script setup>
import {computed, defineProps, ref, watch} from "vue"
import executeCommand from "@/helper/executeCommand";




const isHeading = ref(false)
const showHeadingOptions = ref(false)
const props = defineProps({
  isActive:{
    type: Boolean,
    default: false
  }
})
const paragraphSize = computed(() => {
  let sizes = [];
  for (let x = 1; x <= 6; x++) {
    sizes.push(`H${x}`);
  }
  sizes.push('Clear');
  return sizes;
})

watch(()=>props.isActive, ()=>{
  isHeading.value = props.isActive
})

const heading = (size) => {
  showHeadingOptions.value = false
  executeCommand('formatBlock', false, size === 'Clear' ? 'p' : size);
}


const showHeadings = () => {
  isHeading.value = !isHeading.value;
  showHeadingOptions.value = !showHeadingOptions.value;
}
</script>

<style scoped>
.buttons {
  position: relative;
  background: white;
  width: 100%;
}
.buttons .wysiwyg-button-loop {
   position: absolute;
   left: 120px;
   bottom: -40px;
   display: flex;
}
.button {
  margin-left: 4px;
  margin-bottom: 4px;
  background: white;
  cursor: pointer;
}

</style>
