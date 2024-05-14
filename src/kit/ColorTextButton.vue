<template>
  <button class="wysiwyg-button" :class="showColorPicker ? 'wysiwyg-button-active' : ''"
          @click.prevent="showColorPickerCall">
    Color
  </button>
  <div v-if="showColorPicker" id="color-picker" class="buttons">
    <input type="color" class="wysiwyg-button-color" v-model="selectedColor" @change="changeTextColor"/>
  </div>
</template>
<script setup>
import {defineProps, ref, watch} from "vue"
import executeCommand from "@/helper/executeCommand";


const showColorPicker = ref(false);
const selectedColor = ref('#000000');

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})


watch(() => props.isActive, () => {
  showColorPicker.value = props.isActive
})

const showColorPickerCall = () => {
  showColorPicker.value = !showColorPicker.value;
};
const changeTextColor = () => {
  executeCommand('foreColor', false, selectedColor.value);
};
</script>

<style scoped>
.buttons {
  position: relative;
  background: white;
  width: 100%;
}
.buttons .wysiwyg-button-color {
  position: absolute;
  right: 0;
}


</style>
