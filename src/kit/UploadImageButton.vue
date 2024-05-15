<template>
  <button   class="wysiwyg-button" :class="showImageUploader ? 'wysiwyg-button-active' : ''" @click.prevent="openImageUploader">
    Upload image
  </button>
  <input type="file" id="image-uploader" ref="imageInput" v-if="showImageUploader" @change="handleImageUpload" accept="image/*" />
</template>
<script setup>
import { ref} from "vue"
import ImageContainerFactory from "@/helper/ImageContainerFactory";



let imageInput = document.getElementById('image-uploader')
const showImageUploader = ref(false)

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (!file || !file.type.startsWith('image/')) {
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const imageUrl = e.target.result;
    showImageUploader.value = false
    insertImageContainer(imageUrl);
  };
  reader.readAsDataURL(file);
};

const insertImageContainer = (imageUrl) => {
  console.log(imageUrl, 'urll')
  ImageContainerFactory.create(imageUrl)
};
const openImageUploader = () => {
  showImageUploader.value = !showImageUploader.value;
  imageInput = null;
};

</script>

<style scoped>
#image-uploader {
  position: absolute;
  top: 30px;
  left: 0;
}

</style>
