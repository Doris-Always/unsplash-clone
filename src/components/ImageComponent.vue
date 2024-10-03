
<template>
    <div class="relative cursor-pointer mx-8 my-8" @click="handleClick">
      <div v-if="loading" class="skeleton-loader">
       
      </div>
      <img :src="url" :alt="name" class="object-cover" 
       @load="handleImageLoad" 
        @error="handleImageError"
      />
      <div class="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black text-white p-4 z-10">
        <p class="font-semibold">{{ name }}</p>
        <p>{{ location }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageComponent',
    data(){
      return {
        loading : true,
      }
    },
    props: {
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
    handleClick() {
 
      this.$emit('click');
    },
    handleImageLoad() {
   
      this.loading = false;
    },
    handleImageError() {
      console.error("Image failed to load.");
      this.loading = false; 
    },
  },
  };
  </script>
  
  <style scoped>
  img {
    width: 450px;
    border-radius: 5px;
    /* height: 300px; */
  }


.skeleton-loader {
  border: 1px solid rgb(237, 237, 237);
  box-shadow: 2px 2px white;
  width: 450px;
  height: 300px;
  background: #e0e0e0;
  border-radius: 5px;
  animation: pulse 1.5s infinite;

}



@keyframes pulse {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }}
  </style>
  