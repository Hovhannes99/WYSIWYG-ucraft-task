<template>
  <div>
    <div id="container">
      <div id="toolbar">
        <div class="toolbar-section">
          <button  class="wysiwyg-button" :class="isBold ? 'wysiwyg-button-active' : ''"
                  @click.prevent="bold">
            <FormatBold/>
          </button>
          <button   class="wysiwyg-button" :class="isItalic ? 'wysiwyg-button-active' : ''"
                  @click.prevent="italize">
            <FormatItalic/>
          </button>
          <button class="wysiwyg-button" :class="isUnderlined ? 'wysiwyg-button-active' : ''"
                  @click.prevent="underline">
            <FormatUnderline/>
          </button>
          <button   class="wysiwyg-button"
                  :class="isStrikedThrough ? 'wysiwyg-button-active' : ''" @click.prevent="strikeThrough">
            <FormatStrikethrough/>
          </button>
          <button   class="wysiwyg-button" :class="isHeading ? 'wysiwyg-button-active' : ''"
                  @click.prevent="showHeadings">
            <FormatHeader1/>
          </button>
        </div>
        <div class="toolbar-section">
          <button  class="wysiwyg-button" :class="isAlignedLeft ? 'wysiwyg-button-active' : ''"
                  @click.prevent="alignLeft">
            <FormatAlignLeft/>
          </button>
          <button   class="wysiwyg-button"
                  :class="isAlignedCenter ? 'wysiwyg-button-active' : ''" @click.prevent="alignCenter">
            <FormatAlignCenter/>
          </button>
          <button class="wysiwyg-button" :class="isAlignedRight ? 'wysiwyg-button-active' : ''"
                  @click.prevent="alignRight">
            <FormatAlignRight/>
          </button>
          <button   class="wysiwyg-button" @click.prevent="orderedList">
            <FormatListNumbered/>
          </button>
          <button   class="wysiwyg-button" @click.prevent="insertUnorderedList">
            <FormatListBulleted/>
          </button>
          <button  class="wysiwyg-button" :class="showColorPicker ? 'wysiwyg-button-active' : ''"
                  @click.prevent="showColorPickerCall">
            Color
          </button>
          <div v-if="showColorPicker" >
            <div id="color-picker" class="wysiwyg-color">
              <input type="color" class="color-input" v-model="selectedColor" @change="changeTextColor"/>
            </div>
          </div>
        </div>
        <div class="toolbar-section">
          <button  class="wysiwyg-button" :class="showLinkForm ? 'wysiwyg-button-active' : ''"
                  @click.prevent="showLinkOptions">
            <b style="font-size: 10px;">URL</b>
          </button>
            <button   class="wysiwyg-button" :class="showLinkForm ? 'wysiwyg-button-active' : ''" @click.prevent="openImageUploader">
              Image
            </button>
          <input type="file" id="image-uploader" ref="imageInput" v-if="showImageUploader" @change="handleImageUpload" accept="image/*" />
          <button class="wysiwyg-button" @click.prevent="undo">
            Undo
          </button>
          <button class="wysiwyg-button" @click.prevent="redo">
            Redo
          </button>
        </div>
      </div>
      <div v-if="showHeadingOptions" id="toolbar-options">
        <button class="wysiwyg-button wysiwyg-button-loop" v-for="size in hSizes" :key="size"
                @click.prevent="heading(size)">{{ size }}
        </button>
      </div>
      <div v-if="showLinkForm" id="toolbar-options">
        <form @submit.prevent="createLink">
          <input v-model="linkText" type="text" placeholder="Link Text" required/>
          <input v-model="linkURL" type="text" placeholder="URL" required/>
          <button type="submit" class="wysiwyg-button">Insert</button>
          <button @click.prevent="linkText = ''; linkURL = ''" class="wysiwyg-button">Clear</button>
        </form>
      </div>
      <EditorContent :height="height"/>
    </div>
  </div>
</template>

<script setup>
import FormatAlignCenter from 'vue-material-design-icons/FormatAlignCenter.vue';
import FormatAlignLeft from 'vue-material-design-icons/FormatAlignLeft.vue';
import FormatAlignRight from 'vue-material-design-icons/FormatAlignRight.vue';
import FormatBold from 'vue-material-design-icons/FormatBold.vue';
import FormatHeader1 from 'vue-material-design-icons/FormatHeader1.vue';
import FormatItalic from 'vue-material-design-icons/FormatItalic.vue';
import FormatListBulleted from 'vue-material-design-icons/FormatListBulleted.vue';
import FormatListNumbered from 'vue-material-design-icons/FormatListNumbered.vue';
import FormatStrikethrough from 'vue-material-design-icons/FormatStrikethrough.vue';
import FormatUnderline from 'vue-material-design-icons/FormatUnderline.vue';
import {nextTick, onMounted, defineProps, ref, computed, defineEmits, watch} from "vue";
import EditorContent from "@/components/EditorContent.vue";

const isBold = ref(false)
const isItalic = ref(false)
const isUnderlined = ref(false)
const isStrikedThrough = ref(false)
const isHeading = ref(false)
const isAlignedLeft = ref(false)
const isAlignedCenter = ref(false)
const isAlignedRight = ref(false)
const showHeadingOptions = ref(false)
const showLinkForm = ref(false)
const showColorPicker = ref(false);
const selectedColor = ref('#000000');
const showImageUploader = ref(false);

let imageInput = document.getElementById('image-uploader')
const linkText = ref('')
const linkURL = ref('')
const emits = defineEmits(['input'])

const getValue = () => {
  emits('input', document.getElementById('editor').innerHTML);
}

const showColorPickerCall = () => {
  showColorPicker.value = !showColorPicker.value;
};
const openImageUploader = () => {
  showImageUploader.value = !showImageUploader.value;
  imageInput = null;
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (!file || !file.type.startsWith('image/')) {
    console.warn('Invalid image file uploaded.');
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const imageUrl = e.target.result;
    insertImage(imageUrl);
  };
  reader.readAsDataURL(file);
};

const insertImage = (imageUrl) => {
  const img = document.createElement('img');
  img.src = imageUrl;
  img.style.maxWidth = '450px';
  img.style.maxHeight = '450px';
  document.getElementById('editor').appendChild(img);
  getValue();
};

onMounted(() => {
  nextTick(() => {
    document.getElementById('editor').addEventListener('input', function () {
      getValue();
    }, false);
  });
})
const props = defineProps({
  value: {
    type: String,
    default:'Type here'
  },
  height: {
    type: [Number, String],
    default: 700
  }
})

const hSizes = computed(() => {
  let sizes = [];
  for (let x = 1; x <= 6; x++) {
    sizes.push(`H${x}`);
  }
  sizes.push('Clear');
  return sizes;
})


const exec = (...args) => {
  document.execCommand(...args);
}

const changeTextColor = () => {
  exec('foreColor', false, selectedColor.value);
};
const undo = () => {
  exec('undo');
};

const redo = () => {
  exec('redo');
};
const bold = () => {
  isBold.value = !isBold.value;
  exec('bold');
}
const italize = () => {
  isItalic.value = !isItalic.value;
  exec('italic');
}
const underline = () => {
  isUnderlined.value = !isUnderlined.value;
  exec('underline');
}
const strikeThrough = () => {
  isStrikedThrough.value = !isStrikedThrough.value;
  exec('strikeThrough');
}
const heading = (size) => {
  exec('formatBlock', false, size === 'Clear' ? 'p' : size);
}

const showHeadings = () => {
  isHeading.value = !isHeading.value;
  showHeadingOptions.value = !showHeadingOptions.value;
}
const alignLeft = () => {
  isAlignedLeft.value = !isAlignedLeft.value;
  exec('justifyLeft');
}
const alignCenter = () => {
  isAlignedCenter.value = !isAlignedCenter.value;
  exec('justifyCenter');
}
const alignRight = () => {
  isAlignedRight.value = !isAlignedRight.value;
  exec('justifyRight');
}
const showLinkOptions = () => {
  showLinkForm.value = !showLinkForm.value;
}
const createLink = () => {
  let selected = document.getSelection();
  if (selected.anchorOffset === selected.extentOffset)
    selected = linkText.value;
  exec('insertHTML', false, `<a href='${linkURL.value}' style="cursor: pointer">${selected}</a>`);
}
const orderedList = () => {
  exec('insertOrderedList');
}
const insertUnorderedList = () => {
  exec('insertUnorderedList');
}

watch(
    props.value,
    (val) => {
      if (val) {
        setTimeout(() => {
          const editor = document.getElementById('editor');
          if (editor && !editor.innerHTML) {
            editor.innerHTML = val;
          }
        }, 100);
      }
    },
    {immediate: true}
);

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

#toolbar-options {
  min-height: 29px;
  border-bottom: 1px solid lightgrey;
  overflow: hidden;
}

#editor:focus {
  outline: none;
}

.toolbar-section {
  position: relative;
  float: left;
  border-right: 1px solid lightgrey;
}
#image-uploader {
  position: absolute;
  top: 30px;
  left: 0;
}

.wysiwyg-button {
  height: 28px;
  min-width: 30px;
  background-color: transparent;
  text-align: center;
  padding: 2px;
}

.wysiwyg-button:hover {
  background-color: lightblue;
}

.wysiwyg-button-active {
  background-color: lightblue;
}

.wysiwyg-color {
  position: relative;
  height: 10px;
}
.wysiwyg-color .color-input {
  position: absolute;
  right: 0;
}

.wysiwyg-button-loop {
  margin-right: 4px;
}
</style>
