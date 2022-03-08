<template>
  <img :src="photo.img_src" alt="" class="img-fluid">
  <p>{{photo.rover.name}}</p>
</template>

<script>
  import { ref } from '@vue/reactivity'
  import { datesService } from '../services/DatesService'
  import { computed } from '@vue/reactivity'
  import { AppState } from '../AppState'
  export default {
    props: {
      photo: {
        type: Object,
        required: true
      }
    },
    setup() {

      return {

      }
    }
  }
</script>