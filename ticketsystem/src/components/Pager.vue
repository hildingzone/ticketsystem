<template>
    <footer class="pager">
        <ul>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'pager',
    props: ['activeStep'],
    data(){
        return {
            steps: 3
        }
    }
}
</script>

<style lang="scss">
 
</style>