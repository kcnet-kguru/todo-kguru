<template>
    <div class="list add-list">
        <input class="form-control" v-if="isAddList" type="text" ref="inputTitle" v-model="inputTitle"
               @keyup.enter="onSubmitTitle" @blur="restore">
        <a v-else @click="onClickAddList">&plus; Add another list</a>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: "AddList",
        data () {
            return {
                isAddList: false,
                inputTitle: ''
            }
        },
        computed: {
            ...mapState({
                board: 'board'
            })
        },
        methods: {
            ...mapActions([
                'ADD_LIST'
            ]),
            onClickAddList() {
                this.isAddList = true
                this.$nextTick(()=> {
                    this.$refs.inputTitle.focus()
                })
            },
            onSubmitTitle() {
                this.inputTitle = this.inputTitle.trim()
                if (!this.inputTitle) return this.restore()
                const title = this.inputTitle
                const position = this.board.lists[this.board.lists.length - 1].position * 2
                const boardId = this.board.boardId
                this.ADD_LIST({title, position, boardId}).then(()=> this.restore())
            },
            restore() {
                this.isAddList = false
                this.inputTitle = ''
            }
        }
    }
</script>

<style scoped>

</style>
