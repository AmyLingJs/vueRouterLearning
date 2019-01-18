<template>
    <div class="quan">
        This is quanssssssssssssssssssss
        <button type="button" @click="add">增加</button>
 
    </div>
</template>
<script>

import store from '../store/index'
export default {
    name:'quan',
    store,
//     data() {
// return {
//     msg:1111
// }
//     },
//     mounted () {
//       window.vue = this  
//     },
    methods: {
        add:function() {
            console.log('addd from quan.vue')
           
            store.commit("increment")
        }
    }
}
</script>
