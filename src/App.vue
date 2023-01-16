<script>
import axios from 'axios';
import { store } from './store.js';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    components: {
        AppHeader,
        AppMain
    },

    data() {
        return {
            store,
            apiKey: '81966a6fcd70a879d3c6acdb9022aa91',
            movieApiUri: 'https://api.themoviedb.org/3/search/movie',
            tvshowApiUri: 'https://api.themoviedb.org/3/search/tv'
        }
    },

    methods: {
        getApiResponse(inputQuery) {
            axios.get(this.movieApiUri, {
                params: {
                    api_key: this.apiKey,
                    query: inputQuery
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    this.store.movieList = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                });

            axios.get(this.tvshowApiUri, {
                params: {
                    api_key: this.apiKey,
                    query: inputQuery
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    this.store.tvShowList = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },

    created() {
        this.getApiResponse();
    },
}
</script>

<template>
    <header>
        <AppHeader @search="getApiResponse(store.searchedText)" />
    </header>

    <main>
        <AppMain />
    </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>
