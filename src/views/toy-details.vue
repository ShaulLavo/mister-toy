<template>
    <section v-if="toy" class="toy-details flex flex-col items-center gap-2">
        <article>
            <p><span class="fw-bold">ID:</span> {{ toy.id }}</p>
            <p><span class="fw-bold">name:</span> {{ toy.name }}</p>
            <p><span class="fw-bold">price:</span> {{ toy.price }}</p>
        </article>
        <button @click="goBack" class="btn btn-primary">go back</button>
    </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'

export default {
    name: 'toy-detail',
    data() {
        return {
            toy: null,
        }
    },
    created() {
        const { id } = this.$route.params
        toyService.getById(id).then((toy) => {
            this.toy = toy
        })
    },
    methods: {
        goBack() {
            this.$router.push('/toy')
        },
    },
}
</script>
