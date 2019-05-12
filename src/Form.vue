<template>
    <form class="commet__add margin-b d-flex w-100">
        <input  class="commet__add__field w-100" type="text" v-model = "inputText" placeholder="Write a new comment">
        <button  class="commet__add__btn f-center" :class="{ pAbsolute: isAbsolute}"  @click.prevent="addComments">
            <img class="commet__button__img" :src="staticData.urlBtnSend"  alt="send">
            <p class="button__text f-size-11"> {{ staticData.text }}</p>
        </button>
    </form>
</template>

<script>
import Api from './parse.js';

let currentData = Api.parseData('data/data.json');

export default {
  name: 'AppForm',
  props:{
    currentData: Object
  },
  data() {
      return {
       obj:  Api.parseData('data/data.json'),
       staticData:{
            urlBtnSend: this.currentData.staticData.url.urlBtnSend,
            text:  this.currentData.staticData.text.btnSend
        },
        users: {
            id: this.currentData.currentUser.id,
            url: this.currentData.currentUser.url,
            name: this.currentData.currentUser.name
        },
        commentList: this.currentData.comment,
        productId: this.currentData.product[0].id,
        inputText: '',
        isAbsolute: true,
        getCreate: true
      }
    },

  methods: {
      addComments (event) {
        if( this.inputText.length > 0 && this.getCreate === true){
          let constructorObj = Object.create(Object.prototype, {
            id:{value: 1000 + this.commentList.length + 1},
            productId: {value: this.productId},
            authorId: {value: this.users.id},
            url: {value: this.users.url},
            name: {value: this.users.name},
            text: {value: this.inputText}
          });

          this.commentList.push(constructorObj);
          console.log(this.commentList)
          this.inputText = '';
        } else if(this.inputText.length > 0 && this.getCreate === false) {
          alert('Заменга текста')
        } else {
          alert('Введите текст, прежде чем создадите комментарий!')
        }
      }
  }
}
</script>

<style>
</style>
