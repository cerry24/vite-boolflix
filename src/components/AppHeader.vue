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
    <div>
        <label for="user-searchbar">insert movie to search for</label>
        <input type="text" name="user-searchbar" id="user-searchbar" v-model="store.searchedText">
        <button @click="$emit('search')">search</button>
    </div>
</template>

<style lang="scss">

</style>