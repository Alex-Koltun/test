<template>
    <div class="control__box d-flex f-size-11"> 
        <button class="control__button pointer d-flex margin-r-18"
                 @click="toggleEditFunction">
            <img class="control__img margin-r-8" :src="urlEdit" alt="edit">
            <span class="color-blue">{{ btnEdit }}</span>
        </button>
        <button class="control__button pointer d-flex margin-r-18"
                @click="toggleDelFunction">
            <img class="control__img margin-r-8" :src="urlDelete"  alt="delete">
            <span class="color-red">{{ btnDelete }} </span>
        </button>
    </div>  
</template>

<script>

export default {
  name: 'AppControl',
  props:{
      statData: Object,
      toggleDelFunction:Function,
      toggleEditFunction: Function
      },
  data(){
      return {
          currentData: this.statData,
        //   confirmationBlock : true,
        //   showControl: true, 
          urlEdit: this.statData.url.urlBtnEdit,
          btnEdit: this.statData.text.btnEdit,
          urlDelete: this.statData.url.urlBtnDelete,
          btnDelete: this.statData.text.btnDelete
      }
  },

  methods: {
    //   show(confirmationBlock) {
    //       confirmationBlock = false;
    //       this.$emit('showElem', confirmationBlock) 
    //   }
  }
}
</script>

<style>
</style>
