<template>
    <div class="add-card">
        <form @submit.prevent="onSubmitNewCard">
            <input class="form-control" type="text" v-model="inputCardTitle" ref="inputCardTitle">
            <button class="btn btn-success" type="submit" :disabled="invalidInput">Add Card</button>
            <a class="cancel-add-btn" href="" @click.prevent="$emit('close')">&times;</a>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "AddCard",
        props: [ 'pos', 'listId' ],
        data() {
            return {
                inputCardTitle: ''
            }
        },
        computed: {
            invalidInput() {
                return !this.inputCardTitle.trim();
            }
        },
        mounted() {
            this.$refs.inputCardTitle.focus()
        },
        methods: {
            ...mapActions([
                'ADD_CARD'
            ]),
            onSubmitNewCard() {
                if (this.invalidInput) return
                const {inputCardTitle, pos, listId} = this
                this.ADD_CARD({title: inputCardTitle, pos, listId, boardId: this.$route.params.id })
                    .finally( () => {
                      this.inputCardTitle = ''
                      this.$emit('close')
                    })
            },
        }
    }
</script>

<style scoped>

</style>
