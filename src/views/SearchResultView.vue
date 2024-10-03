<template>
    <div class="header">
        <p class="search-text">Search Results for <span class="search-text text-color"> "{{ this.word }}"</span></p>
    </div>
    <div class=" w-full small-screen-container">
    <div class="contain ">
      <ImageComponent
            v-for="(item, index) in results[0]"
            :key="index"
            :url="item.urls.raw"
            :name="item.user.name"
            :location="item.user.location"
            @click="openModal(item)"
          />
          <ImageComponent
            v-for="(item, index) in results[1]"
            :key="index"
            :url="item.urls.full"
            :name="item.user.name"
            :location="item.user.location"
            
            @click="openModal(item)"
          />
          <ImageComponent
            v-for="(item, index) in results[2]"
            :key="index"
            :url="item.urls.raw"
            :name="item.user.name"
            :location="item.user.location"
            @click="openModal(item)"
          />
    </div>
  </div>

   
    <div class="search-result flex justify-center w-full image-display-container">
      <div class="flex gap-5">
     
        <div class="space-y-5">
          <ImageComponent
            v-for="(item, index) in results[0]"
            :key="index"
            :url="item.urls.full"
            :name="item.user.name"
            :location="item.user.location"
          />
        </div>
  
     
        <div class="space-y-5">
          <ImageComponent
            v-for="(item, index) in results[1]"
            :key="index"
            :url="item.urls.full"
            :name="item.user.name"
            :location="item.user.location"
          />
        </div>

        <div class="space-y-5">
          <ImageComponent
            v-for="(item, index) in results[2]"
            :key="index"
            :url="item.urls.full"
            :name="item.user.name"
            :location="item.user.location"
          />
        </div>
      </div>
    
   
    </div>
    <ImageModal
      :show="isModalOpen"
      :url="selectedImage.url"
      :name="selectedImage.name"
      :location="selectedImage.location"
      @close="closeModal"
    />
  
</template>

<script>
import ImageComponent from '@/components/ImageComponent.vue';
import ImageModal from '@/components/ImageModal.vue';


    export default{
        name: 'SearchResultView',
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
        results: [],
        word: '',
      };
    },
    methods: {
    handleClick() {
      console.log("searched view")
      const savedResults = localStorage.getItem('searchResult');
      this.word = localStorage.getItem('searchWord');
             this.results = JSON.parse(savedResults);
            console.log('Results loaded from local storage:', this.results[0]);
      this.$emit('click');
    },
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
  mounted(){
    this.handleClick();
  }
          

    }
</script>

<style scoped>
     .header{
        background-color: rgb(140, 167, 178);
        height: 15%;
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 8%;
        position: relative;

    }
    .image-display-container{
    /* display: flex; */
    position: absolute;
      top: 24%;
      left: 0;
      align-items: center;
  }
  .small-screen-container{
    display: none;
  }
 
    /* .search-result{  
      position: absolute;
      top: 24%;
      display: flex;
      align-items: center;
   
    } */
    .search-text{
        font-size: 30px;
    }
    .text-color{
        color:rgb(57, 77, 85);
    }
   .search-text{
    font-size: 35px;
    font-weight: 500;
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
    position: absolute;
    top: 7%;
   
  }
  .search-text{
        font-size: 20px;
    }
    .header{
      height: 13%;
      padding: 4px;
      display: flex;
        justify-content: center;
        align-items: center;
        padding: 8%;
    }

}
 
 
    
</style>