<template>
  <li class="toy-preview">
    <custom-card>
      <template #header>
        <p><span class="fw-bold">name:</span> {{ toy.name }}</p>
        <p><span class="fw-bold">price:</span> {{ toy.price }}</p>
      </template>

      <template #footer>
        <div class="btn-group">
          <button @click="goToEdit" class="btn btn-primary">edit</button>
          <button @click="goToDetail" class="btn btn-info">details</button>
          <button @click="removeCar(toy.id)" class="btn btn-danger">delete</button>
        </div>
      </template>
    </custom-card>
  </li>
</template>

<script>
import customCard from './custom-card.vue'

export default {
  name: 'toy-preview',
  props: {
    toy: Object,
  },
  components: {
    customCard,
  },
  methods: {
    goToDetail() {
      this.$router.push(`/toy/${this.toy.id}`)
    },
    goToEdit() {
      this.$router.push(`/toy/edit/${this.toy.id}`)
    },
    removeToy(toyId) {
      this.$emit('removeToy', toyId)
    },
  },
}
</script>
