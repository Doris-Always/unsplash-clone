
<template>
    <div
      v-if="show"
      @click="closeModal"
      class="absolute fixed z-50 flex items-center justify-center modal-container"
    >
    <button @click="closeModal" class="cancel-btn ">
      <svg fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cancel2</title> <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path> </g></svg>
    </button>
      <div class="bg-white shadow-lg max-w-lg w-full"   @click="closeModal">
      
       
  
        <!-- <div class="flex flex-col items-center"> -->
          <!-- <div class=""> -->
            <img :src="url" alt="Image" class=" object-cover"   />
          <!-- </div> -->
         <div class="p-2">
          <h2 class="text-lg font-bold">{{ name }}</h2>
          <p class="text-gray-600">{{ location }}</p>
         </div>
          
        </div>
      <!-- </div> -->
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
    
    top: 0;
    width: 100%;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.267);

  }
  .bg-white {
  z-index: 100;
  border-radius: 8px;
  height: 100%;
  max-height: 600px;

}
img {
  height:100%;
   width:100%;
  object-fit: cover;
  max-height: 55vh;
  border-radius: 0.5rem 0.5rem 0 0; 
}
@media only screen and (max-width: 600px){
  .modal-container{
    
  height: 100vh;
  background-color: white;


  }
  img {
  object-fit: cover;
  max-height: 40vh;

  border-radius: 0.5rem 0.5rem 0 0; 
}
.bg-white {
  padding: 10px;
}
}
.cancel-btn {
  background-color: white;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
}

  </style>
  