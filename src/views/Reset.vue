<template>
    <div>
        <h3>Sila masukkan emel anda untuk reset kata laluan</h3>

        <form @submit.prevent="reset">
            <div class="form-group">
                <label>Emel</label>
                <input type="email" v-model="email" placeholder="Alamat Emel" />
            </div>
            <button type="submit">Reset</button>
        </form>
    </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth"

export default {
    name : "Reset",

    data() {
        return {
            email : null
        }
    },

    methods : {
        reset () {
            sendPasswordResetEmail(getAuth(), this.email).then(() => {
                // Email sent.
                alert("INFO: Sila semak emel anda untuk reset kata laluan.")
                this.$router.push({ name: 'Login' })
            }).catch(error => {
                // An error happened.
                alert("RALAT: Gagal menghantar emel untuk reset kata laluan.")
            });
        }
    }
}
</script>

<style>

</style>