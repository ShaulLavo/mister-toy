<template>
    <section class="toy-filter">
        <input v-focus v-model="filterBy.name" @input="setFilter" type="text" class="form-input"
            placeholder="Search name..." />
    </section>
</template>

<script>
export default {
    name: 'toy-filter',
    data() {
        return {
            filterBy: {
                name: '',
            },
        }
    },
    methods: {
        setFilter() {
            this.$emit('setFilter', this.filterBy)
        },
    },
}
</script>
