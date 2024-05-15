<template>
  <div>
    <div id="container">
       <ToolBar
           :is-bold="isBold"
           :is-heading="isHeading"
           :is-italic="isItalic"
           :is-striked-through="isStrikedThrough"
           :show-link-form="showLinkForm"
           :show-color-picker="showColorPicker"
           :is-underlined="isUnderlined"
       />
      <EditorContent
          :height="height"
          @handle-activity="handleActiveButton"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref} from "vue";
import EditorContent from "@/components/EditorContent.vue";
import ToolBar from "@/components/ToolBar.vue";


const isBold = ref(false)
const isItalic = ref(false)
const isUnderlined = ref(false)
const isStrikedThrough = ref(false)
const isHeading = ref(false)
const showLinkForm = ref(false)
const showColorPicker = ref(false);



defineProps({
  height: {
    type: [Number, String],
    default: 700
  }
})

const handleActiveButton = (value) => {
  const size = value.fontSize.split("px")[0]
  const decoration = value.textDecoration.split(" ")[0]
  isUnderlined.value = decoration !== 'none'
  isStrikedThrough.value = decoration === 'line-through'
  isItalic.value = value.fontStyle !== 'normal';
  isBold.value = Number(value.fontWeight) > 400;
  isHeading.value = Number(size) > 16;
}

</script>

<style scoped>
#container {
  border: 1px solid lightgrey;
}
</style>
