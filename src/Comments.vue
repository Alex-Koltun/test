<template>
        <div  class="comment__box d-flex fd-row-reverse  p-relative">
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
                :statData="staticData"
                :toggleFunction="toggleConfirm"
                v-show="controlBlock"          
            >
            </app-controll>
            
            <app-confirmation
                :statConfirm="staticData"
                :toggleFunction="toggleConfirm"
                :deleteFunction="daleteCommet"
                v-show="confirmBlock">
            </app-confirmation> 
        </div>       
</template>

<script>
// import Api from './parse.js';
// let currentData = Api.parseData('data/data.json');
// console.log(currentData)

// import AppForm from './Form.vue';
import AppControl from './Control.vue';
import AppConfirmation from './Confirmation.vue';


export default {
  name: 'Comments',
  props: {
      commetItem: Object,
      currentUser: Object,
      commetData: Object,
      commetArray: Array
  },
  data() {
      return {
       staticData: this.commetData,
       text:  this.commetItem.text,
       url: this.commetItem.url,
       name: this.commetItem.name,
       id: +this.commetItem.id,
       authorId: +this.commetItem.authorId,
    //    userId: currentUser.id,

       addCommet: false,
       controlBlock: false,
       commeBlock: true,
       confirmBlock: false,
       commetText: true
      }
    },
    components:  {
        // 'add-comments': AppForm,
        'app-controll': AppControl,
        'app-confirmation': AppConfirmation
    },
    methods: {
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
            if(this.authorId !== this.userId) {
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
        daleteCommet() {
            let currentId = this.id;
            this.commetArray.forEach(function(item, i, array){
                if(item.id === currentId) {
                    array.splice(i,1)
                }   
            })
            }
        }
        // let currentElement = event.path[2];
        // let currentId = +currentElement.id.slice(2);

        // if(currentId == this.currentUsers.id) {
        //     currentElement.querySelector('.controll').classList.toggle('d-none');
        // } else {
        //     alert('Каждый пользователь может изменять только свой комментарий')
        // }

     }

</script>

<style>
</style>
