<template>
    <main id="verify">
        <section>
            <img src="../assets/verify-logo.png">
            <h1>Where it's @</h1>
            <h1>Staff</h1>
        </section>
        <section class="content">
            <img src="../assets/Verified.png">
        </section>
        <section>
            <input type="text" name="code"  />
            <a href="#" class="verify">Verify ticket</a>
        </section>
    </main>
</template>
<script>
export default {
    name: 'verify',
    data () {
        return {
            code: '',
            codeLength: 6
        }
    },
    computed: {
        verifyTicket () {
            this.$store.dispatch('verifyTicket', this.code);
        }
    }
}
</script>

<style lang="scss">
#verify {
    background: #F39440;
}
h1 {
    text-transform: uppercase;
    color: black;
}
</style>

