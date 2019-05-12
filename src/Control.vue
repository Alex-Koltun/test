<template>
    <div  v-show="showControl">
        <div class="control__box d-flex f-size-11" >
            
            <button class="control__button pointer d-flex margin-r-18">
                <img class="control__img margin-r-8" :src="urlEdit" alt="edit">
                <span class="color-blue">{{ btnEdit }}</span>
           </button>
            <button class="control__button pointer d-flex margin-r-18">
                <img class="control__img margin-r-8" :src="urlDelete"  alt="delete">
                <span class="color-red">{{ btnDelete }} </span>
            </button>
        </div>
    </div>   
</template>

<script>


export default {
  name: 'AppControl',
  props:{
      statData: Object
      },
  data(){
      return{
          urlEdit: this.statData.url.urlBtnEdit,
          btnEdit: this.statData.text.btnEdit,
          urlDelete: this.statData.url.urlBtnDelete,
          btnDelete: this.statData.text.btnDelete
      }
  }
}
</script>

<style>
</style>
