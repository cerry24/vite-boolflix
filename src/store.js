import { reactive } from 'vue';

export const store = reactive({
    movieList: [],
    tvShowList: [],
    searchedText: '',
    languageFlags: ['en', 'de', 'it', 'es', 'fr', 'ja']
});