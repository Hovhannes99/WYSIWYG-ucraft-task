<template>
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
</template>

<script setup>
import {defineProps} from "vue";
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

defineProps({
  isBold: {
    type: Boolean,
    required: true
  },
  isItalic: {
    type: Boolean,
    required: true

  },
  isUnderlined: {
    type: Boolean,
    required: true

  },
  isStrikedThrough: {
    type: Boolean,
    required: true

  },
  isHeading: {
    type: Boolean,
    required: true

  },
  showColorPicker: {
    type: Boolean,
    required: true

  },
  showLinkForm: {
    type: Boolean,
    required: true
  },
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

#toolbar {
  min-height: 29px;
  border-bottom: 1px solid lightgrey;
  background-color: rgb(247, 247, 247);
}


.toolbar-section {
  position: relative;
  float: left;
  border-right: 1px solid lightgrey;
  margin-right: 3px;
  margin-bottom: 3px;
}

</style>
