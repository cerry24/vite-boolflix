<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',

    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div>
        <label for="user-searchbar">insert movie to search for</label>
        <input type="text" name="user-searchbar" id="user-searchbar" v-model="store.searchedText">
        <button @click="$emit('search')">search</button>
    </div>

    <div>
        <ul>
            <li v-for="movie in store.movieList">
                <h3>{{ movie.title }}</h3>
                <h5>{{ movie.original_title }}</h5>
                <p>
                    Language: {{ movie.original_language }}
                    Rating: {{ movie.vote_average }}
                </p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">

</style>