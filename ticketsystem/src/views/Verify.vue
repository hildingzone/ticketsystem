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
                <img v-if="verified.verified" src="../assets/thumbsup.png">
                <h1 v-if="verified.verified">Ticket is valid</h1>
                <img v-if="!verified.verified" src="../assets/thumbsdown.png">
                <h1 v-if="!verified.verified">Ticket ain't valid</h1>
            </section>
        </section>
    </main>
</template>

<!-- Functions -->
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

<!-- Styling -->
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
            min-width: 35vw;
            max-width: 35vw;
        }
        .btnVerify {
            min-width: 35vw;
            max-width: 35vw;
            padding: 13px 0px 17px 0px;
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
    .btnVerify:hover {
    background-color: rgb(128, 27, 179);
  }
    }
}
</style>
