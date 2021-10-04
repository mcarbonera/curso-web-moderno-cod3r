<template>
    <div class="not-found-container">
        <div class="not-found">
            <img src="@/assets/notFound.jpg" alt="">
            <div class="text">
                <div class="not-found-title">
                    404    
                </div>
                <div class="not-found-subtitle">
                    Página não encontrada!
                </div>
                <router-link to="/" class="not-found-link">Retornar a terras conhecidas</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'notFound',
    mounted() {
        if(this.$store.state.isMenuVisible) {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    .not-found-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .not-found {
        display: flex;
        justify-content: center;
    }

    .not-found img {
        width: 300px;
        border-radius: 40px;
    }

    .not-found .text {
        border-left: 1px solid rgb(12, 150, 0);
        color: rgb(4, 53, 0);
        margin-left: 15px;
        padding: 0px 15px;

        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    .not-found .text .not-found-title {
        font-size: 1.8rem;
    }

    .not-found .text .not-found-subtitle {
        font-size: 1.2rem;
    }

    .not-found .text .not-found-link {
        color: rgb(0, 128, 11);
    }
</style>