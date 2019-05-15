<template>
    <form class="commet__add margin-b d-flex w-100">
        <input  class="pAbsolute left-0 commet__add__field w-100" type="text" v-model="inputText" placeholder="Write new commet">
        <button class="commet__add__btn f-center bg-color-blue " 
                :class="{ pAbsolute: isAbsolute}"  
                @click.prevent="addComments">
            <img class="commet__button__img" 
                :src="staticData.url" alt="send">
            <p class="button__text f-size-11">
              {{ staticData.text }}
            </p>
        </button>
    </form>
</template>

<script>
import Api from './parse.js';

let currentData = Api.parseData('data/data.json');

export default {
  name: 'AppForm',
  props: {
    dataForm: Object,
    commentList: Array,
    createItem: Boolean,
    currentComment: Object,
    toggleFunction: Function,
    editFunction: Function
  },
  data() {
      return {
       staticData:{
            url: this.dataForm.staticData.url.urlBtnSend,
            text:  this.dataForm.staticData.text.btnSend
        },
        users: {
            id: this.dataForm.currentUser.id,
            url: this.dataForm.currentUser.url,
            name: this.dataForm.currentUser.name
        },
        productId: this.dataForm.product[0].id,
        inputText: '',
        isAbsolute: true
      }
    },

  methods: {
      addComments (event) {
        let lengthText = this.inputText.length;
          console.log(2)
        if (lengthText > 0 && this.createItem === true) {
          let constructorObj = Object.create(Object.prototype, {
            id:{value: 1000 + this.commentList.length + 1},
            productId: {value: this.productId},
            authorId: {value: this.users.id},
            url: {value: this.users.url},
            name: {value: this.users.name},
            text: {value: this.inputText,  writable: true, configurable: true,}
          });

          this.commentList.push(constructorObj);
          console.log(this.commentList)
        } else if(this.createItem === true) {
          alert('Введите текст, прежде чем создадите комментарий!')
        }

        if (lengthText > 0 && this.createItem === false) {
          // this.editFunction()  
          // console.log(this.currentComment.text = this.inputText)
          this.editFunction(this.inputText)
          this.toggleFunction()
        }
        this.inputText = '';    
      },

    }
}
</script>

<style>
</style>
