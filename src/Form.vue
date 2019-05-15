<template>
    <form class="commet__add margin-b d-flex w-100">
        <input  class="commet__add__field w-100" type="text"  placeholder="currentData">
        <button  class="commet__add__btn f-center bg-color-blue " :class="{ pAbsolute: isAbsolute}"  @click.prevent="addComments">
            <img class="commet__button__img"  alt="send">
            <p class="button__text f-size-11"> {{ currentData }}</p>
        </button>
    </form>
</template>

<script>
import Api from './parse.js';

let currentData = Api.parseData('data/data.json');

export default {
  name: 'AppForm',
  props: {
    dataCopy: Object
  },
  data() {
      return {
      //  obj:  Api.parseData('data/data.json'),
      //  staticData:{
      //       urlBtnSend: this.dataCopy.staticData.url.urlBtnSend,
      //       text:  this.dataCopy.staticData.text.btnSend
      //   },
      //   users: {
      //       id: this.currentDataCopy.currentUser.id,
      //       url: this.currentDataCopy.currentUser.url,
      //       name: this.currentDataCopy.currentUser.name
      //   },
      //   commentList: this.currentDataCopy.comment,
      //   productId: this.currentDataCopy.product[0].id,
      //   inputText: '',
        isAbsolute: true,
      //   getCreate: true
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
