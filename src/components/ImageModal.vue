
<template>
    <div
      v-if="show"
      @click="closeModal"
      class="absolute fixed inset-0 z-50 flex items-center justify-center modal-container"
    >
    
      <div class="bg-white shadow-lg max-w-lg w-full overflow-y-auto  "   @click="closeModal">
        <!-- Close button -->
        <button @click="closeModal" class="absolute top-2 right-2 text-black ">
          &times;
        </button>
  
        <!-- Image, Name, Location -->
        <div class="flex flex-col items-center">
          <img :src="url" alt="Image" class="w-full h-4/5 object-cover mb-4" />
          <h2 class="text-lg font-bold mb-2">{{ name }}</h2>
          <p class="text-gray-600">{{ location }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageModal',
    props: {
      show: {
        type: Boolean,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-container{
    border: 2px solid red;
    /* width: 100%;
   
    background-color: rgb(181, 177, 177);
    opacity: 70%; */
    width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  }
  .bg-white {
  z-index: 100;
  border-radius: 8px;
}
  </style>
  