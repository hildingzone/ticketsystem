<template>
    <main id="verify">
        <section>
            <h1>Staff</h1>
        </section>
        <section class="buttonBar">
            <input type="text" name="code" v-on:keyup.enter="verifyTicket()" :value="code.toUpperCase()" @input="code = $event.target.value.toUpperCase()" :maxlength="codeLength" />
            <br><br><a href="#" class="btnVerify" @click="verifyTicket ()">Verify ticket</a>
        </section>
        <section class="content">
            <section class="verified" v-if="verified"><br>
                <img v-if="verified.verified" src="../assets/Verified.png">
                <h1 v-if="verified.verified">Valid</h1>
                <h1 v-if="!verified.verified">Aint valid bro</h1>
            </section>
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
        },
        onEnter: function() {
            verifyTicket()
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
    display: flex;
    flex-direction: column;
    
    h1 {
        font-size: 2rem;
    }
    .buttonBar {
    
        input {
        height: 2.5rem;
        padding: .5rem;
        font-size: 1.5rem;
        text-align: center;
        background: black;
        border: solid 2px white;
        border-radius: 7px;
        color: #f56b9a;
        }
        .btnVerify {
        width: 30%;
        padding: 1px 0px 6px 0px;
        margin: 8px 0;
        display: inline-block;
        border: none;
        border-radius: 4px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #fff;
        font-size: 21px;
        font-family: 'Sansita', sans-serif;
        background: #f56b9a;
        text-decoration: none;
        cursor: pointer;
        }
    }
}
</style>
