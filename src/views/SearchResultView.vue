<template>
    <div class="header">
        <p class="search-text">Search Results for <span class="search-text text-color"> "{{ this.word }}"</span></p>
    </div>
   
    <div class="search-result flex justify-center w-full">
      <div class="flex gap-5">
     
        <div class="space-y-11 ">
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
  
</template>

<script>
import ImageComponent from '@/components/ImageComponent.vue';




    export default{
        name: 'SearchResultView',
        components: {
            ImageComponent
        },
      
        data() {
      return {
  
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
    .search-result{
        max-width: 1224px;
    width: 90%;
    position: absolute;
    top: 28%;
    left: 10%;
    }
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
    
</style>