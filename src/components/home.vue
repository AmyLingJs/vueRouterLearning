<template>
    <div class="home">
        This is home
        <p>{{msg}}</p>
    </div>
</template>
<script>
import store from '../store/index'
export default {
    name:'home',
    store,
    data() {
       return {
           msg:store.state.count
       }
    }
}
</script>

