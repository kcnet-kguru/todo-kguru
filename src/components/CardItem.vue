<template>
    <div class="card-item" :data-card-id="card.cardId" :data-card-pos="card.position">
        <router-link :to="`/board/${boardId}/card/${card.cardId}`">
            <div>{{card.title}}</div>
            <div class="card-item-meta" v-if="card.description">&equiv;</div>
        </router-link>
        <a class="delete-card-btn" href="" @click.prevent="onClickDelete">&times;</a>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "CardItem.vue",
        props: [
            'card',
            'boardId',
        ],
        methods: {
            ...mapActions([
                'DELETE_CARD'
            ]),
            onClickDelete() {
                if(!window.confirm('Delete this card?')) return
                this.DELETE_CARD(this.card.id)
            }
        }
    }
</script>

<style scoped>

</style>
