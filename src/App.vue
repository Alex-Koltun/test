
<template>
    <div class="p-relative" id="app">
                <app-product 
                :product="product"
                :text="staticDonateText"
                :url="staticDonateUrl"
                v-if="showProduct"></app-product>
                <!-- <app-form 
                    v-if="addComments"
                    :dataCopy="objData">
                </app-form> -->
                <div class="comment">
                  <comments 
                  v-for="i in comments" 
                  :key="i.id"
                  :commetItem="i"
                  :commetUser="currentUser"
                  :commetData="statData"
                  :commetArray="comments"
                  ></comments>
                </div>
              </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import Comments from './Comments.vue';
import Api from './parse.js';
// import AppForm from './Form.vue'
let currentData = Api.parseData('data/data.json');

export default {
    name: 'App',
    data() {
        return {
            showProduct: true,
            showComments: true,
            addComments: true,

            objData: Api.parseData('data/data.json'),

            product: currentData.product[0],
            staticDonateText: currentData.staticData.text.btnDonate,
            staticDonateUrl: currentData.staticData.url.urlBtnDonate,
            statDataText: currentData.staticData.text.btnEdit,
            statData: currentData.staticData,
            users: currentData.users,
            comments: currentData.comment.slice().reverse(),
            currentUser: currentData.currentUser[0],
            
        }
    },
    components: {
        'app-product': ProductCard,
        'comments': Comments,
        // 'app-form': AppForm
        }
    }
</script>

<style>
</style>