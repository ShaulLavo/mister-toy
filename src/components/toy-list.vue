<template>
    <ul class="toy-list clean-list grid gap-1">
        <toy-preview @removeToy="removeToy" v-for="toy in toys" :toy="toy" :key="toy.id" />
    </ul>
</template>

<script>
import toyPreview from './toy-preview.vue'

export default {
    props: {
        toys: {
            type: Array,
            required: true,
        },
    },
    components: {
        toyPreview,
    },
    methods: {
        removeToy(toyId) {
            this.$emit('removeToy', toyId)
        },
        created() {
            console.log('list created')
        }
    },
}
</script>
