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
        Language:
        <img :src="languageFlag" :alt="language" class="poster-img">
        Rating:
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in (Math.ceil(rating / 2))" class="star" />
    </article>
</template>
        
<style style lang ="scss" scoped>

</style>