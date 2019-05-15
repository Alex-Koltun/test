
<template>
    <div class="p-relative" id="app">
        <app-product 
            :product="product"
            :text="staticDonateText"
            :url="staticDonateUrl"
            v-if="showProduct">
        </app-product>
        <app-form 
            :dataForm="objData"
            :commentList="comments"
            :createItem="true">
            
        </app-form>
        <div class="comment">
            <comments 
            v-for="i in comments.slice().reverse()" 
            :key="i.id"
            :commetItem="i"
            :commetUser="currentUser"
            :commetData="objData"
            :commetArray="comments"
            :editItem="createItem = false"
            ></comments>
        </div>
        </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import Comments from './Comments.vue';
import Api from './parse.js';
import AppForm from './Form.vue'
let currentData = Api.parseData('data/data.json');

export default {
    name: 'App',
    data() {
        return {
            showProduct: true,
            showComments: true,
            addComments: true,
            createItem: true,

            objData: currentData,

            product: currentData.product[0],
            staticDonateText: currentData.staticData.text.btnDonate,
            staticDonateUrl: currentData.staticData.url.urlBtnDonate,
            statDataText: currentData.staticData.text.btnEdit,
            users: currentData.users,
            comments: currentData.comment,
            currentUser: currentData.currentUser,
            
        }
    },
    components: {
        'app-product': ProductCard,
        'comments': Comments,
        'app-form': AppForm
        }
    }
</script>

<style>
</style>