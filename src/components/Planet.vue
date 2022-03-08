<template>
  <div v-if="planet.date" class="col-6">
    <div class="card">
      <div class="card-body">


        <img class="space-img" :src=" planet.hdurl" alt="the photo">
        <h2>{{planet.explanation}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from '@vue/reactivity'
  import { datesService } from '../services/DatesService'
  import { computed } from '@vue/reactivity'
  import { AppState } from '../AppState'
  export default {
    setup() {

      return {
        planet: computed(() => AppState.planet)

      }
    }
  }
</script>

<style>
  .space-img {
    height: 300px;
    max-width: 300px;
    object-fit: cover;
    object-position: center;

  }
</style>