<template>
  <button  class="wysiwyg-button" :class="showLinkForm ? 'wysiwyg-button-active' : ''"
           @click.prevent="showLinkOptions">
    <b style="font-size: 10px;">URL</b>
  </button>
  <div v-if="showLinkForm">
    <form @submit.prevent="createLink" class="forms">
      <div class="container">
        <input v-model="linkText" type="text" placeholder="Link Text" required/>
        <input v-model="linkURL" type="text" placeholder="URL" required/>
        <button type="submit" class="wysiwyg-button">Insert</button>
        <button @click.prevent="linkText = ''; linkURL = ''" class="wysiwyg-button">Clear</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import {defineProps, ref, watch} from "vue"
import executeCommand from "@/helper/executeCommand";


const showLinkForm = ref(false);
const linkText = ref('')
const linkURL = ref('')

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})


watch(() => props.isActive, () => {
  showLinkForm.value = props.isActive
})

const showLinkOptions = () => {
  showLinkForm.value = !showLinkForm.value;
}

const createLink = () => {
  let selected = document.getSelection();
  if (selected.anchorOffset === selected.extentOffset)
    selected = linkText.value;
  executeCommand('insertHTML', false, `<a href='${linkURL.value}' style="cursor: pointer">${selected}</a>`);
  showLinkForm.value = false

}
</script>

<style scoped>

#toolbar-options .forms {
  position: relative;
}
.container {
  position: relative;
  background: white;
  padding: 2px;
  margin-left: 3px;
  display: flex;
  column-gap: 2px;
}
@media screen and (max-width: 400px) {
  .container {
    display: grid;
    position: absolute !important;
    row-gap: 10px;
    left: 0;
  }
}
.forms.forms .container{
  position: relative;
}
</style>
