import { reactive } from 'vue';

export const store = reactive({
    movieList: [],
    searchedText: '',
    languageFlags: ['en', 'de', 'it', 'es', 'fr', 'ja']
});