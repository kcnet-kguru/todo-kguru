<template>
    <div class="login">
        <h2>Log in to KGURU-TODO</h2>
        <form @submit.prevent="onSubmit">
            <div>
                <label for="email">Email</label>
                <input class="form-control"
                       type="text"
                       id="email"
                       name="email"
                       v-model="email"
                       autofocus
                       autocomplete="off"
                       placeholder="" />
            </div>
            <div>
                <label for="password">Passwrod</label>
                <input class="form-control"
                       type="password"
                       id="password"
                       v-model="password"
                       autocomplete="off"
                       placeholder="password"
                       @keydown.enter="onSubmit"
                />
            </div>
            <button  class="btn" :class="{'btn-success': !invalidForm}" type="submit" :disabled="invalidForm">Log In</button>
        </form>
        <p class="error" v-if="error">{{error}}</p>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: '',
                returnPath: '',
                error: ''
            }
        },
        computed: {
          invalidForm() {
              return !this.email || !this.password
          }
        },
        created() {
            this.returnPath = this.$route.query.returnPath || '/'
            this.SET_THEME()
        },
        methods: {
            ...mapMutations([
                'SET_THEME'
            ]),
            onSubmit() {
                const { email, password } = this
                this.$store.dispatch('LOGIN', { email, password })
                    .then(() => {
                        this.$router.push(this.returnPath)
                    })
                    .catch(() => {
                        //TODO: Error
                    })
            }
        }
    }
</script>

<style scoped>

</style>
