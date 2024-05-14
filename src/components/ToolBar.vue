<template>
  <div>
    <div id="container">
      <div id="toolbar">
        <div class="toolbar-section">
          <BoldButton :is-active="isBold"/>
          <ItalicButton :is-active="isItalic"/>
          <UnderlineButton :is-active="isUnderlined"/>
          <StrikeButton :is-active="isStrikedThrough"/>
          <ParagraphSizeButton :is-active="isHeading"/>
        </div>
        <div class="toolbar-section">
          <AlignLeftButton/>
          <AlignCenterButton/>
          <AlignRightButton/>
          <FormatListNumbersButton/>
          <FormatPointsButton/>
          <ColorTextButton :is-active="showColorPicker"/>
        </div>
        <div class="toolbar-section">
          <UploadImageButton/>
          <UndoButton/>
          <RedoButton/>
        </div>
        <AddURLbutton :is-active="showLinkForm"/>

      </div>
      <EditorContent
          :height="height"
          @handle-activity="handleActiveButton"
      />
    </div>
  </div>
</template>

<script setup>
import {nextTick, onMounted, defineProps, ref, defineEmits} from "vue";
import EditorContent from "@/components/EditorContent.vue";
import BoldButton from "@/kit/BoldButton.vue";
import ItalicButton from "@/kit/ItalicButton.vue";
import UnderlineButton from "@/kit/UnderlineButton.vue";
import StrikeButton from "@/kit/StrikeButton.vue";
import ParagraphSizeButton from "@/kit/ParagraphSizeButton.vue";
import AlignLeftButton from "@/kit/AlignLeftButton.vue";
import AlignCenterButton from "@/kit/AlignCenterButton.vue";
import AlignRightButton from "@/kit/AlignRightButton.vue";
import FormatListNumbersButton from "@/kit/FormatListNumbersButton.vue";
import FormatPointsButton from "@/kit/FormatPointsButton.vue";
import ColorTextButton from "@/kit/ColorTextButton.vue";
import AddURLbutton from "@/kit/AddURLbutton.vue";
import UndoButton from "@/kit/UndoButton.vue";
import RedoButton from "@/kit/RedoButton.vue";
import UploadImageButton from "@/kit/UploadImageButton.vue";


const isBold = ref(false)
const isItalic = ref(false)
const isUnderlined = ref(false)
const isStrikedThrough = ref(false)
const isHeading = ref(false)
const showLinkForm = ref(false)
const showColorPicker = ref(false);



const emits = defineEmits(['input'])
defineProps({
  height: {
    type: [Number, String],
    default: 700
  }
})

const getValue = () => {
  emits('input', document.getElementById('editor').innerHTML);
}

const handleActiveButton = (value) => {
  const size = value.fontSize.split("px")[0]
  const decoration = value.textDecoration.split(" ")[0]
  isUnderlined.value = decoration !== 'none'
  isStrikedThrough.value = decoration === 'line-through'
  isItalic.value = value.fontStyle !== 'normal';
  isBold.value = Number(value.fontWeight) > 400;
  isHeading.value = Number(size) > 16;
}

onMounted(() => {
  nextTick(() => {
    document.getElementById('editor').addEventListener('input', function () {
      getValue();
    }, false);
  });
})

</script>

<style scoped>
input {
  margin: 4px;
  padding: 2px;
  border: 1px solid lightgrey;
}

input:focus {
  outline: none;
}

#container {
  border: 1px solid lightgrey;
}


#toolbar {
  min-height: 29px;
  border-bottom: 1px solid lightgrey;
  background-color: rgb(247, 247, 247);
}

#editor:focus {
  outline: none;
}

.toolbar-section {
  position: relative;
  float: left;
  border-right: 1px solid lightgrey;
  margin-right: 3px;
  margin-bottom: 3px;
}

</style>
