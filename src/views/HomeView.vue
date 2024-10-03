<template>
    <div class="page-container">
        
            <HeaderSearch/>
            <div class="image-div">
                <ImageDisplay :list="result" />
              
            </div>
            
           

       
    </div>
    
</template>

<script>
import HeaderSearch from '@/components/HeaderSearch.vue';
import ImageDisplay from '@/components/ImageDisplay.vue';
import axios from 'axios';


    export default {
        name: 'HomeView',
        components: {
           HeaderSearch,
           ImageDisplay,
        },
        data() {
            return {
            result: [], 
            };
        },
    methods: {
        async fetchData() {
            // console.log("button")
            this.$emit('click')

            try {
                const response = await axios.get(`https://api.unsplash.com/photos/?client_id=MkhV4aH707Fm12eeZkk7Hr1u-uRX0TIaW_4faSwGzAo`);
                console.log(response.data);
                
                this.result = [];
                let tempArray = [];
                for (let i = 0; i < response.data.length; i++) {
                    tempArray.push(response.data[i]);
                    console.log(response.data[i]);
                    if (tempArray.length === 3) {
                        this.result.push(tempArray);
                        tempArray = [];
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
      
    },
    mounted() {
        this.fetchData();
    }

}

</script>
<style scoped> 
.button{
    border: 1px solid blue;
    width: 200px;
    height: 50px;
}
.page-container{
    width: 100%;
    height: 100vh;
   
}
.image-div{
    position: absolute;
    top: 28%;
    display: flex;
  
    align-items: center;
    left: 0; 
}

.header{
    position: relative;
        background-color: rgb(140, 167, 178);
        height: 35%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
@media only screen and (max-width: 768px){
    .image-div{
        left: 0;
    }
}
@media only screen and (min-width: 1280px){
    .image-div{
        left: 0;
    }
}

</style>
