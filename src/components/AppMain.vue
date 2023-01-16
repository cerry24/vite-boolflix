<script>
import { store } from '../store.js';

export default {
    name: 'AppMain',

    data() {
        return {
            store
        }
    },

    methods: {
        getImagePath: function (imgName) {
            return new URL(`../assets/flag-img/${imgName}.png`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div>
        <ul>
            <li v-for="movie in store.movieList">
                <h3>{{ movie.title }}</h3>
                <h5>{{ movie.original_title }}</h5>
                <p>
                    Language: <img
                        :src="store.languageFlags.includes(movie.original_language) ? getImagePath(movie.original_language) : getImagePath('earth')"
                        :alt="movie.original_language">
                    Rating: {{ movie.vote_average }}
                </p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
img {
    width: 20px;
}
</style>