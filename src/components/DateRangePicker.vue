<template>
  <DatePicker
    ref="datepicker"
    v-model="dateRange"
    range
    format="DD/MM/YYYY"
    :shortcuts="shortcuts"
    :placeholder="placeholder"
    range-separator=" - "
    :lang="lang"
    :disabled-date="disabledDate"
    style="width: 100%"
  />
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import moment from 'moment'
import { LANG } from '@/assets/constant/datepicker'

export default {
  components: {
    DatePicker
  },
  props: {
    value: {
      type: Array,
      default: () => ([])
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
      dateRange: this.value,
      shortcuts: [
        {
          text: 'เมื่อวานนี้',
          onClick: () => this.setDateAgo(1)
        },
        {
          text: '7 วันที่ผ่านมา',
          onClick: () => this.setDateAgo(7)
        },
        {
          text: '14 วันที่ผ่านมา',
          onClick: () => this.setDateAgo(14)
        },
        {
          text: '30 วันที่ผ่านมา',
          onClick: () => this.setDateAgo(30)
        },
        {
          text: 'สัปดาห์นี้',
          onClick: () => this.setDateWeek()
        },
        {
          text: 'สัปดาห์ที่แล้ว',
          onClick: () => this.setDateLastWeek()
        },
        {
          text: 'เดือนนี้',
          onClick: () => this.setDateMonth()
        },
        {
          text: 'เดือนที่แล้ว',
          onClick: () => this.setDateLastMonth()
        }
      ]
    }
  },
  watch: {
    value (val) {
      this.dateRange = val
    },
    dateRange (val) {
      this.$refs.datepicker.closePopup()
      this.$emit('input', val)
    }
  },
  methods: {
    setDateAgo (day) {
      this.dateRange = [new Date(moment().subtract(day, 'days').format('YYYY-MM-DD')), new Date(moment().format('YYYY-MM-DD'))]
    },
    setDateWeek () {
      this.dateRange = [new Date(moment().startOf('week').format('YYYY-MM-DD')), new Date(moment().endOf('week').format('YYYY-MM-DD'))]
    },
    setDateLastWeek () {
      this.dateRange = [new Date(moment().startOf('week').subtract(7, 'days').format('YYYY-MM-DD')), new Date(moment().endOf('week').subtract(7, 'days').format('YYYY-MM-DD'))]
    },
    setDateMonth () {
      this.dateRange = [new Date(moment().startOf('month').format('YYYY-MM-DD')), new Date(moment().endOf('month').format('YYYY-MM-DD'))]
    },
    setDateLastMonth () {
      this.dateRange = [new Date(moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD')), new Date(moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD'))]
    }
  }
}
</script>

<style>
.mx-datepicker-sidebar {
  float: right;
  width: 120px;
}
.mx-datepicker-sidebar+.mx-datepicker-content {
  margin-left: 0;
  border-left: 0px solid #e8e8e8;
  margin-right: 120px;
  border-right: 1px solid #e8e8e8;
}
</style>
