<script>
export default {
    props: [
        "title",
        "originalTitle",
        "language",
        "languageFlag",
        "posterPath",
        "rating"
    ],

    data() {
        return {
            posterUrl: 'https://image.tmdb.org/t/p/w342'
        }
    }
}
</script>

<template>
    <article>
        <img :src="posterUrl + posterPath" :alt="`${title}poster`">
        <h3>{{ title }}</h3>
        <h5>{{ originalTitle }}</h5>
        <p>
            Language: <img :src="languageFlag" :alt="language" class="poster-img">
            Rating: {{ rating }}
        </p>
    </article>
</template>

<style lang="scss" scoped>

</style>