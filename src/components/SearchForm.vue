<template>
    <form class="search-form" @submit.prevent="handleSubmit">
        <span class="search-icon">
            <svg width="35px" height="30px" viewBox="-2.4 -2.4 28.80 28.80" fill="none"
                xmlns="http://www.w3.org/2000/svg" stroke="#00000" stroke-width="0.00024000000000000003">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#00000"
                    stroke-width="0.144"></g>
                <g id="SVGRepo_iconCarrier">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"
                        fill="#d9d9d9"></path>
                </g>
            </svg>
        </span>
        <div class="something"></div>
        <input type="text" v-model="inputValue" placeholder="Search for photos">
    </form>
 
</template>
<script>
import axios from 'axios';


export default {
    name: 'SearchForm',
    data() {
        return {
            result: [],
            inputValue: '',
        };
    },
    // methods: {
    //     async handleClick() {
    //         this.$router.push({ name: "search" });
    //         const word = this.inputValue
    //         try {

    //             const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=MkhV4aH707Fm12eeZkk7Hr1u-uRX0TIaW_4faSwGzAo&query=` + word)
    //             this.results = [];
    //             let tempArray = [];

    //             for (const result of response.data.results) {
    //                 tempArray.push(result);
    //                 if (tempArray.length === 3) {
    //                     this.results.push(tempArray);
    //                     tempArray = [];
    //                 }
    //             }
    //             localStorage.setItem('searchResult', JSON.stringify(this.results));
    //             localStorage.setItem('searchWord', word);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //         this.$emit('click');
    //     },
    // }

    methods: {
    async handleSubmit() {
      const word = this.inputValue.trim(); // Trim input to avoid unnecessary spaces
      if (word) {
        // Route to the search page with the query param
        this.$router.push({
          name: 'search', 
          query: { q: word } 
        });

        try {
          const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=MkhV4aH707Fm12eeZkk7Hr1u-uRX0TIaW_4faSwGzAo&query=` + word);
          this.results = [];
          let tempArray = [];

          for (const result of response.data.results) {
            tempArray.push(result);
            if (tempArray.length === 3) {
              this.results.push(tempArray);
              tempArray = [];
            }
          }

          // Store results and the search word in localStorage
          localStorage.setItem('searchResult', JSON.stringify(this.results));
          localStorage.setItem('searchWord', word);
        } catch (error) {
          console.log(error);
        }

        this.$emit('submit');
      }
    },
  },
}


</script>
<style scoped>
form {
    width: 100%;
    height: 55px;
    background-color: white;
    border-radius: 5px;
    position: relative;

}

input {
    padding-left: 50px;
    width: 100%;
    height: 55px;
    background-color: white;
    border: none;
    outline-color: white;
    border-radius: 10px;
    color: black;
}

.search-icon {
    position: absolute;
    top: 13px;
    left: 10px;
    /* left: 20px; */
    /* border: 1px solid red; */
}

.search-btn {
    border: 1px solid red;
}
</style>