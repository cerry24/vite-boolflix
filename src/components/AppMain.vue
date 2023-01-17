<script>
import { store } from '../store.js';

import CardComponent from './CardComponent.vue';

export default {
    name: 'AppMain',

    components: {
        CardComponent
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
            return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <h2>Movies</h2>
    <section id="movies">
        <CardComponent v-for="movieEl in store.movieList" :title="movieEl.title" :originalTitle="movieEl.original_title"
            :language="movieEl.original_language" :languageFlag="getImagePath(movieEl.original_language)"
            :posterPath="movieEl.poster_path" :rating="movieEl.vote_average" />
    </section>

    <h2>TV shows</h2>
    <section id="tvshows">
        <CardComponent v-for="tvshowEl in store.tvShowList" :name="tvshowEl.name" :originalName="tvshowEl.original_name"
            :language="tvshowEl.language" :languageFlag="getImagePath(tvshowEl.original_language)"
            :posterPath="tvshowEl.poster_path" :rating="tvshowEl.vote_average" />
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

h2 {
    font-size: 30px;
    color: $main-accent-color;
    margin-bottom: .5rem;
}

#movies,
#tvshows {
    display: flex;
    margin-bottom: 3.5rem;
    overflow-x: scroll;
}
</style>