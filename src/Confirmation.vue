<template>
    <div class="confirm  d-flex w-100 h-100 f-size-16 p-relative" >
        <div class="confirm__text pAbsolute color-red d-flex j-space-between align-center">
            <p>{{ text }}</p>
        </div>
        <div class="confirm__btn-block pAbsolute d-flex f-size-11">
            <button class="confirm__btn bg-color-blue color-white pointer d-flex f-center"
            @click="toggleFunction">
                <span>{{ btnNo }}</span>
            </button>
            <button class="confirm__btn bg-color-red color-white pointer d-flex f-center"
            @click="deleteFunction">

                <span>{{ btnYes }}</span>
            </button>
        </div>   
    </div>  
</template>

<script>
export default {
  name: 'AppConfirmation',
  props:{
      statConfirm: Object,
      deleteFunction: Function,
      toggleFunction: Function
      },
  data(){
      return{
        btnYes: this.statConfirm.text.btnConfirmYes,
        btnNo: this.statConfirm.text.btnConfirmNo,
        text: this.statConfirm.text.textConfirm
      }
  }
}
</script>

<style>
</style>