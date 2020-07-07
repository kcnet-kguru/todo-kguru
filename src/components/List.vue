<template>
    <div class="list" :data-list-id="list.listId" :data-list-pos="list.position" :data-list-title="list.title">
        <div class="list-header">
            <input class="form-control input-title" v-if="isEditTitle" type="text" v-model="inputTitle" ref="inputTitle"
                   @keyup.enter="onTitleSubmit" @blur="onTitleSubmit">
            <div v-else class="list-header-title" @click="onClickTitle">{{list.title}}</div>
            <a class="delete-list-btn" href="" @click.prevent="onDeleteList">&times;</a>
        </div>

        <div class="card-list" :data-list-id="list.listId">
            <div  v-show="!list.cards.length" class="empty-card-item"></div>
            <card-item v-for="card in list.cards" :key="`${list.listId}-${card.position}`"
                       :card="card" :boardId="list.boardId"></card-item>
        </div>
        <div v-if="isAddCard">
            <add-card :pos="lastCardPos" :listId="list.listId" @close="isAddCard = false"></add-card>
        </div>
        <a v-else class="add-card-btn" href="" @click.prevent="isAddCard = true">
            &plus; Add a card...
        </a>
    </div>
</template>

<script>
    import CardItem from './CardItem.vue'
    import AddCard from './AddCard.vue'
    import { mapActions } from 'vuex'

    export default {
        name: "List",
        components: { CardItem, AddCard },
        props: ['list'],
        data() {
            return {
                isAddCard: false,
                isEditTitle: false,
                inputTitle: ''
            }
        },
        created() {
            this.inputTitle = this.list.title
        },
        computed: {
            lastCardPos() {
                const lastCard = this.list.cards.length > 0?this.list.cards[this.list.cards.length - 1]:undefined
                let pos = 65535
                if (lastCard) pos = lastCard.position + pos
                return pos
            }
        },
        methods: {
            ...mapActions([
                'UPDATE_LIST',
                'DELETE_LIST'
            ]),
            onClickTitle() {
                this.isEditTitle = true
                this.$nextTick( () => this.$refs.inputTtile.focus())
            },
            onTitleSubmit() {
                this.inputTitle = this.inputTitle.trim()
                if (!this.inputTitle) return
                const id = this.list.id
                const title = this.inputTitle

                if(title === this.list.title) return this.isEditTitle = false

                this.UPDATE_LIST({ id, title })
                    .then( () => (this.isEditTitle = false))
            },
            onDeleteList() {
                if (!confirm(`Delete ${this.list.title} list ?`)) return
                this.DELETE_LIST({ id: this.list.listId, boardId: this.$route.params.id })
            }
        }
    }
</script>

<style scoped>

</style>
