<template>
        <div @click="test" class="comment__box d-flex fd-row-reverse  p-relative">
            <div class="comments__item d-flex align-center w-100"
                v-show="commeBlock"
                @click.prevent="toggleControll" >
                <img class="comments__ava" :src="url"  alt="icon">
                <div class="comments__text-block">
                    <p class="comments__autor-name f-size-11">{{ name }}</p>
                    <p class="comments-text">{{ text }}</p>
                </div>
                <div class="pAbsolute  w-100 h-100"></div>
            </div>
            
            <app-controll
                :statData="stData"
                :toggleDelFunction="toggleConfirm"
                :toggleEditFunction="toggleForm"
                v-show="controlBlock"          
            >
            </app-controll>
            
            <app-confirmation
                :statConfirm="stData"
                :toggleFunction="toggleConfirm"
                :deleteFunction="daleteCommet"
                :createItem="editItem"
                v-show="confirmBlock">
            </app-confirmation>

            <edit-comments
                :dataForm="commetData"
                :commentList="commetData.commet"
                :createItem="editItem"
                :currentComment="commetItem"
                :toggleFunction="toggleForm"
                :editFunction="editText"
                v-show="formBlock"
                style="margin: 0"
            >
            </edit-comments>

        </div>       
</template>

<script>
// import Api from './parse.js';
// let currentData = Api.parseData('data/data.json');
// console.log(currentData)

import AppForm from './Form.vue';
import AppControl from './Control.vue';
import AppConfirmation from './Confirmation.vue';


export default {
  name: 'Comments',
  props: {
      commetItem: Object,
      commetUser: Object,
      commetData: Object,
      commetArray: Array,
      editItem: Boolean
  },
  data() {
      return {
       stData: this.commetData.staticData,
       text:  this.commetItem.text,
       url: this.commetItem.url,
       name: this.commetItem.name,
       id: +this.commetItem.id,
       authorId: +this.commetItem.authorId,
       userId: this.commetUser.id,

       addCommet: false,
       controlBlock: false,
       commeBlock: true,
       confirmBlock: false,
       commetText: true,
       formBlock: false

      }
    },
    components:  {
        'edit-comments': AppForm,
        'app-controll': AppControl,
        'app-confirmation': AppConfirmation
    },
    methods: {
    test(){
        // console.log(this.text = '123asdsad')
      },
      toggleConfirm() {
          switch(this.confirmBlock) {
              case false:
                this.confirmBlock = true;
                this.controlBlock = false;
                this.toggleComment();
            break;

            case true:
                this.confirmBlock = false;
                this.controlBlock = false;
                this.toggleComment();
            break
            }
          },

        toggleControll() {
            if(this.authorId == this.userId) {
                switch(this.controlBlock) {
                    case false:
                        this.controlBlock = true
                    break;

                    case true:
                        this.controlBlock = false
                    break
                    }
                }
            },

        toggleComment() {
            switch(this.commeBlock) {
                    case false:
                        this.commeBlock = true
                    break;

                    case true:
                        this.commeBlock = false
                    break
                }
             },

        toggleForm() {
            switch(this.formBlock) {
                case false:
                    this.formBlock = true;
                    this.controlBlock = false;
                    this.toggleComment();
                break;

                case true:
                    this.formBlock = false;
                    this.toggleComment();
                break
            }
        },
        editText(input) {
            this.text = input;
            console.log(this.text)
        },
        daleteCommet() {
            let currentId = this.id;
            this.commetArray.forEach(function(item, i, array){
                if(item.id === currentId) {
                    array.splice(i,1)
                }   
            })
            }
        },
    // watch: {

    // }
}

</script>

<style>
</style>
