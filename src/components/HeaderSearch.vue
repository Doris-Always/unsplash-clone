<template>
    <div class="header">
       <SearchForm/>
     </div>
</template>

<script>
import SearchForm from './SearchForm.vue';

    export default {
        name: 'HeaderSearch',
        components: {
            SearchForm,
        }
        
    }
</script>

<style scoped>

    .header{
        background-color: rgb(140, 167, 178);
        height: 35%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8%;

    }
  
   

</style>