<template>
    <main id="verify">
        <section>
            <img src="../assets/verify-logo.png">
            <h1>Where it's @</h1>
            <h1>Staff</h1>
        </section>
        <section class="content">
            <section class="verified" v-if="verified">
                <img v-if="!verified.verifiedData" src="../assets/Verified.png">
                <h1 v-if="!verified.verifiedData">Valid</h1>
                <h1 v-if="verified.verifiedData">Aint valid bro</h1>
            </section>
        </section>
        <section>
            <input type="text" name="code" :value="code.toUpperCase()" @input="code = $event.target.value.toUpperCase()" :maxlength="codeLength" />
            <a href="#" class="verify" @click="verifyTicket ()">Verify ticket</a>
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
    methods: {
        verifyTicket () {
            this.$store.dispatch('verifyTicket', this.code);
        }
    },
    computed: {
        verified () {
            return this.$store.state.verifiedData;
        }
    }
}
</script>

<style lang="scss">
@import '../scss/_variables';

#verify {
    background: #F39440;
    display: flex;
    flex-direction: column;
    
    h1 {
        display: grid;
        justify-content: center;
        text-transform: uppercase;
        color: black;
    }
    input {
        height: 2.5rem;
        padding: .5rem;
        font-size: 1.5rem;
        text-align: center;
        background: none;
        border: none;
    }
    .verify {
        display: grid;
        justify-content: center;
        background: #231F42;
        border-radius: 0px 0px 3px 3px;
        text-decoration: none;
        height: 1rem;
    }
}

</style>

