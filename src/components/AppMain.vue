<script>
import { store } from '../store.js';

import MovieCard from './MovieCard.vue';
import TvshowCard from './TvshowCard.vue';

export default {
    name: 'AppMain',

    components: {
        MovieCard,
        TvshowCard
    },

    data() {
        return {
            store,
            languageFlags: ['en', 'de', 'it', 'es', 'fr', 'ja']
        }
    },

    methods: {
        getImagePath: function (imgName) {
            imgName = this.languageFlags.includes(imgName) ? imgName : 'earth';
            return new URL(`../assets/flag-img/${imgName}.png`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div>
        <h2>movies</h2>
        <MovieCard v-for="movieEl in store.movieList" :title="movieEl.title" :originalTitle="movieEl.original_title"
            :language="movieEl.original_language" :languageFlag="getImagePath(movieEl.original_language)"
            :posterPath="movieEl.poster_path" :rating="movieEl.vote_average" />
    </div>

    <div>
        <h2>TV shows</h2>
        <TvshowCard v-for="tvshowEl in store.tvShowList" :name="tvshowEl.name" :originalName="tvshowEl.original_name"
            :language="tvshowEl.language" :languageFlag="getImagePath(tvshowEl.original_language)"
            :posterPath="tvshowEl.poster_path" :rating="tvshowEl.vote_average" />
    </div>
</template>

<style lang="scss" scoped>

</style>