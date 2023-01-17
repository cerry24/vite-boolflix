<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',

    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="logo">
        <img src="../assets/img/logo-big.svg" alt="Netflix logo">
    </div>

    <div class="searchbar">
        <input type="text" name="user-searchbar" id="user-searchbar" placeholder="insert movie or TV show to search for"
            v-model="store.searchedText" @keyup.enter="$emit('search')">
    </div>
</template>

<style lang="scss" scoped>
img {
    height: 45px;
}

#user-searchbar {
    width: 225px;
    height: 35px;
    border-radius: 10px;
}
</style>