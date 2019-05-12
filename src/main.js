import Vue from 'vue';
import ProductCard from './ProductCard.vue';
import Comments from './Comments.vue';
import Api from './parse.js';

let currentData = Api.parseData('data/data.json');

new Vue({
  el: '#app',
  data: {
    showProduct: true,
    showComments: true,
    currentData: Api.parseData('data/data.json'),
    product: currentData.product[0],
    staticDonateText: currentData.staticData.text.btnDonate,
    staticDonateUrl: currentData.staticData.url.urlBtnDonate,
    statDataText: currentData.staticData.text.btnEdit,
    users: currentData.users,
    comments: currentData.comment,
    currentUser: currentData.currentUser[0]
  },
  components: {
    'app-product': ProductCard,
    'comments': Comments
  } 
})
