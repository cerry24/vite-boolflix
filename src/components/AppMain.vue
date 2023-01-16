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
        <h2>movies</h2>
        <ul>
            <li v-for="movie in store.movieList">
                <h4>{{ movie.title }}</h4>
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

    <div>
        <h2>TV shows</h2>
        <ul>
            <li v-for="tvShow in store.tvShowList">
                <h4>{{ tvShow.name }}</h4>
                <h5>{{ tvShow.original_name }}</h5>
                <p>
                    Language: <img
                        :src="store.languageFlags.includes(tvShow.original_language) ? getImagePath(tvShow.original_language) : getImagePath('earth')"
                        :alt="tvShow.original_language">
                    Rating: {{ tvShow.vote_average }}
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