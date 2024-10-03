
<template>
  <div class=" w-full small-screen-container">
    <div class="contain ">
      <ImageComponent
            v-for="(item, index) in this.list[1]"
            :key="index"
            :url="item.urls.raw"
            :name="item.user.name"
            :location="item.user.location"
            @click="openModal(item)"
          />
          <ImageComponent
            v-for="(item, index) in this.list[0]"
            :key="index"
            :url="item.urls.full"
            :name="item.user.name"
            :location="item.user.location"
            
            @click="openModal(item)"
          />
          <ImageComponent
            v-for="(item, index) in this.list[2]"
            :key="index"
            :url="item.urls.raw"
            :name="item.user.name"
            :location="item.user.location"
            @click="openModal(item)"
          />
    </div>
  </div>

 
    <div class="flex justify-center w-full image-display-container" @close="closeModal">
    
 
      <div class="flex gap-x-10 ">
    
        <div class="space-y-5 middle-image">
          <ImageComponent
            v-for="(item, index) in this.list[1]"
            :key="index"
            :url="item.urls.raw"
            :name="item.user.name"
            :location="item.user.location"
            @click="openModal(item)"
          />
        </div>
  
     
        <div class="space-y-5 middle-image">
          <ImageComponent
            v-for="(item, index) in this.list[0]"
            :key="index"
            :url="item.urls.full"
            :name="item.user.name"
            :location="item.user.location"
            
            @click="openModal(item)"
          />
        
         
        </div>

        <div class="space-y-5 middle-image">
          <ImageComponent
            v-for="(item, index) in this.list[2]"
            :key="index"
            :url="item.urls.raw"
            :name="item.user.name"
            :location="item.user.location"
            @click="openModal(item)"
          />
         
        </div>
      </div>
    
      <ImageModal
      :show="isModalOpen"
      :url="selectedImage.url"
      :name="selectedImage.name"
      :location="selectedImage.location"
      @close="closeModal"
    />
    </div>

   
   
  </template>
  
  <script>
import ImageComponent from './ImageComponent.vue';
import ImageModal from './ImageModal.vue';

 
  
  export default {
    name: 'ImageDisplay',
    props: {
            list: {
            type: Array,
            required: true
            }
        },
    components: {
      ImageComponent,
      ImageModal
    },
    data() {
      return {
        isModalOpen: false,
        selectedImage: {
        url: '',
        name: '',
        location: '',
      },
        
      };
    },
    methods: {
    openModal(item) {
      this.selectedImage = { 
        url: item.urls.full,  
      name: item.user.name, 
      location: item.user.location
      };
      this.isModalOpen = true;
      console.log("from image display")
      console.log(this.list[0][0]);
      
    },
    closeModal() {
      this.isModalOpen = false;
    },

  },
  };
  </script>
  <style scoped>
  .image-display-container{
    display: flex;
  }
  .small-screen-container{
    display: none;
  }
 
  @media only screen and (max-width: 600px){
    .image-display-container{
    display: none;
  }
  .contain{
   
  }
  .small-screen-container{
    display: block;
    margin: 0;
    padding: 0;
  }

}
 
  @media only screen and (max-width: 768px){
    
  }
 </style>
  