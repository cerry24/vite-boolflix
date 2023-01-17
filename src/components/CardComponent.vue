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
        <div class="poster">
            <img v-if="posterPath != null" :src="posterUrl + posterPath" :alt="`${title}poster`" class="poster-img">
            <img v-else src="../assets/img/poster-not-available.png" alt="">
        </div>

        <div class="info">
            <ul>
                <li>
                    <span>Titolo:</span> {{ title }}
                </li>
                <li>
                    <span>Titolo originale:</span> {{ originalTitle }}
                </li>
                <li>
                    <span>Language: </span>
                    <img :src="languageFlag" :alt="language" class="flag-img">
                </li>
                <li>
                    <span>Rating: </span>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in (Math.ceil(rating / 2))" class="star" />
                </li>
            </ul>
        </div>
    </article>
</template>
        
<style style lang ="scss" scoped>
@use '../styles/partials/variables' as *;

article {
    width: 342px;
    height: 513px;
    position: relative;
}

article:hover .info {
    display: block;
}

.poster,
.info {
    width: 100%;
    height: 100%;
}

.info {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    background-color: $main-bg-color;
    color: $main-accent-color;
    padding: 5rem 1rem;

    li {
        margin-bottom: 10px;
    }

    span {
        font-size: 25px;
    }

    .flag-img {
        width: 22px;
    }

    .star {
        font-size: 22px;
        color: yellow;
    }
}

.poster-img {
    height: 100%;
}
</style>