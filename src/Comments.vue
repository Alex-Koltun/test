<template>

    <div class="comment">
        <add-comments 
        v-if="addComment"
        :currentData="currentData"></add-comments> 

        <div class="comment__box d-flex fd-row-reverse"
         v-for="i in commentsList.slice().reverse()" :key="i.id">
            <div class="comments__item d-flex p-relative align-center w-100" 
             @click.prevent="show">
                <img class="comments__ava" :src="i.url"  alt="icon">
                <div class="comments__text-block">
                    <p class="comments__autor-name f-size-11">{{ i.name }}</p>
                    <p class="comments-text">{{ i.text }}</p>
                </div>
                <div class="pAbsolute  w-100 h-100"></div>
            </div>
            <app-controll 
                :class="{'.d-none': dNone}"
                :id="'c-' + i.id"
               >
            </app-controll>           
        </div> 
    </div>
</template>

<script>
import Api from './parse.js';
let currentData = Api.parseData('data/data.json');

import AppForm from './Form.vue';
import AppControl from './Control.vue';


export default {
  name: 'Comments',
  data() {
      return {
        statData: currentData.staticData,
        currentData: currentData,
        addComment: true,
        dNone: true,
        showBlock: true,
        showComments: true,
        commentsList: currentData.comment,
        usersList: currentData.users,
        currentUsers: currentData.currentUser[0]
      }
    },
    components:  {
        'add-comments': AppForm,
        'app-controll': AppControl
    },
    methods: {
      show (event) {
        switch(this.showControl){
            case false:
            console.log(event)
                console.log(event.target.parentNode.nextElementSibling);
                this.dNone = true;
            break;

            case true: 
                this.dNone = false
            break
        }
     },
     cons(){
         console.log(this.dataStat)
     }
  }
}
</script>

<style>
</style>
