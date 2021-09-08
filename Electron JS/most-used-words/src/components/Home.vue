<template>
    <v-container fluid>
        <v-form>
            <v-file-input 
                label="Selecione as legendas"
                v-model="files"
                prepend-icon="mdi-message-text"
                append-outer-icon="mdi-send"
                show-size
                outlined
                multiple 
                chips 
                @click:append-outer="processSubtitles" />
        </v-form>

        <div class="pills">
            <Pill v-for="word in groupedWords" :key="word.name"
                :name="word.name" :amount="word.amount" />
        </div>
    </v-container>
</template>

<script>
import Pill from './Pill'
const { api } = window;

export default {
    components: { Pill },
    data: function() {
        return {
            files: [],
            groupedWords: []
        }
    }, 
    methods: {
        processSubtitles() {
            const paths = this.files.map(f => f.path)
            api.request('process-subtitles', paths)
        }
    },
    created() {
        api.response('process-subtitles', (resp) => {
            this.groupedWords = resp
        })
    }
}
</script>

<style>
    .pills {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>