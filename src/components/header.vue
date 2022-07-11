<template>
    <header class="flex">
        <h1>Hello Vue!</h1>
        <img src="../assets/img/bear.png" alt="bear">
        <p> {{ sayHi }}</p>
        <p></p>

    </header>
</template>

<script>
export default {
    name: 'app-header',
    computed: {
        sayHi() {
            return this.$store.getters.hi

        }
    }
}
</script>

<style>
</style> 