<template>
    <div class="w-full h-full sm:w-4/5 lg:w-2/5 bg-primary rounded-xl my-5 drop-shadow">
        <p class="text-5xl text-white w-full text-center py-6">Login</p>
        <hr class="border-white">
        <div class="flex flex-col justify-center py-5">
            <form @submit.prevent="login" class="mx-5 md:mx-10  my-4 flex flex-col items-center space-y-4">
                <!-- Input Username (CID or email) -->
                <base-input label="E-mail" required name="username" type="email" v-model="form.username"
                    class="w-full mt-2" placeholder="E-mail"
                    innerClass="rounded-2xl text-xl py-3 drop-shadow-md mt-2" />
                <!-- Input Password -->
                <base-input label="Password" required name="password" type="password" class="w-full"
                    v-model="form.password" placeholder="Password"
                    innerClass="rounded-2xl text-xl py-3 drop-shadow-md mt-2" />

                <!-- Register and Go to Home-->
                <div class="w-full flex items-center justify-center">
                    <button type="submit" :disabled="!check_token"
                        class="rounded-2xl mt-4 text-2xl text-quaternary py-3 px-14 bg-secondary hover:cursor-pointer drop-shadow-md">Login</button>
                </div>

                <div class="flex justify-center my-8">
                    <recaptcha @success="onSuccess"/>
                </div>

                <!-- FORGOT & BACK -->
                <div class="w-full flex items-center justify-between">
                    <!-- <div class="flex">
              <base-check v-model="remember_me" />
              <span class="text-white font-light text-sm">จดจำผู้ใช้งาน</span>
            </div> -->
                    <nuxt-link class="text-white text-lg font-light underline" to="/">Back to home page</nuxt-link>
                    <nuxt-link class="text-white text-lg font-light underline" to="/forgetpassword">Forgot password
                    </nuxt-link>

                </div>
            </form>

        </div>
    </div>

    <!-- Go To Home -->
    <!-- <nuxt-link class="font-light underline" to="/">กลับสู่หน้าหลัก</nuxt-link> -->
    <!-- Recaptcha -->


</template>

<script>
export default {
    layout: 'auth',
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            check_token: false,
        }
    },
    methods: {
        async login(e) {
            e.preventDefault()
            const token = await this.$recaptcha.getResponse()
            let error = this.validateForm();
            const self = this;
            if (error) {
                self.$toast.open({
                    message: error,
                    type: "error",
                    duration: 5000,
                })
                return;
            } else if (!token) {
                return
            }
            self.$store.dispatch('loading/setLoading', true)
            const res = await self.$store.dispatch('me/userLogin', self.form)
            if (res instanceof Error) {
                // console.log(res)
                self.$toast.open({
                    message: res.response.data.message,
                    type: 'error',
                    duration: 5000,
                })
            } else {
                setTimeout(() => {
                    self.$router.push('/')
                }, 400)
            }
            self.$store.dispatch('loading/setLoading', false)
        },
        validateForm() {
            const self = this;
            let error = "";

            if (!self.form.username) error = "Please enter you email";
            else if (!self.form.password) error = "Please enter your password"
            else error = "";

            return error;
        },
        onSuccess(token) {
            this.check_token = true
        },
    }
}
</script>