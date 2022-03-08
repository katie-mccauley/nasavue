<template>
  <div class="container">
    <div class="row">
      <SearchForm />
    </div>

    <div class="row">
      <Planet />
    </div>
    <div class="row">
      <div class="col-6" v-for="m in mars" :key="m.id">
        <Mars :photo="m" />

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
        planet: computed(() => AppState.planet),
        mars: computed(() => AppState.mars),

      }
    }
  }
</script>

<style scoped lang="scss">
  .home {
    display: grid;
    height: 80vh;
    place-content: center;
    text-align: center;
    user-select: none;

    /* .home-card {
      width: 50vw;

      img {
        height: 200px;
        max-width: 200px;
        width: 100%;
        object-fit: contain;
        object-position: center;
      }
    } */


  }
</style>