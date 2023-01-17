import { reactive } from 'vue';

export const store = reactive({
    movieList: [],
    tvShowList: [],
    searchedText: ''
});