<script>
export default {
    props: [
        "name",
        "originalName",
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
        <img :src="posterUrl + posterPath" :alt="`${name}poster`">
        <h3>{{ name }}</h3>
        <h5>{{ originalName }}</h5>
        <p>
            Language: <img :src="languageFlag" :alt="language" class="poster-img">
            Rating: {{ rating }}
        </p>
    </article>
</template>

<style lang="scss" scoped>

</style>