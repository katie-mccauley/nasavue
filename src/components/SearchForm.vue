<template>
  <form class="col-6" @submit.prevent="mars">
    <div class="input-group m-3">
      <input type="date" class="form-control" placeholder="Movie Title..." aria-label="Movie Title..."
        v-model="query" />
      <button class="btn btn-success" type="submit">
        <i class="mdi mdi-magnify"></i>
      </button>
    </div>
  </form>
</template>

<script>
  import { ref } from '@vue/reactivity'
  import { datesService } from '../services/DatesService'
  import { marsService } from '../services/MarsService'
  export default {
    setup() {
      const query = ref('')
      return {
        query,

        date() {
          datesService.date(query.value)
        },

        mars() {
          marsService.mars(query.value)
        }

      }
    }
  }
</script>