<template>
  <DatePicker
    ref="datepicker"
    v-model="date"
    format="DD/MM/YYYY"
    :editable="false"
    :placeholder="placeholder"
    :lang="lang"
    :disabled-date="disabledDate"
    style="width: 100%"
  />
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import { LANG } from '@/assets/constant/datepicker'

export default {
  components: {
    DatePicker
  },
  props: {
    value: {
      type: Date,
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabledDate: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      lang: LANG,
      date: this.value
    }
  },
  watch: {
    value (val) {
      this.date = val
    },
    date (val) {
      this.$emit('input', val)
    }
  }
}
</script>
