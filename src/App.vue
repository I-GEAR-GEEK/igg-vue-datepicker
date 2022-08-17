<template>
  <div id="app">
    <DatePicker v-if="false" v-model="date" style="width: 300px;" />
    <div style="margin-top: 50px">
      <DateRangePicker v-model="dateRange" style="width: 300px;" />
    </div>
  </div>
</template>

<script>
import DatePicker from './components/DatePicker.vue'
import DateRangePicker from './components/DateRangePicker.vue'

export default {
  name: 'App',
  components: {
    DatePicker,
    DateRangePicker
  },
  data () {
    return {
      date: null,
      dateRange: []
    }
  }
}
</script>

<style>
#app {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
