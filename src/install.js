import IggVueDatePicker from './components/DatePicker.vue'
import IggVueDateRangePicker from './components/DateRangePicker.vue'

const MyComponent = {
  install (Vue) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
    Vue.component('igg-vue-date-picker', IggVueDatePicker)
    Vue.component('igg-vue-date-range-picker', IggVueDateRangePicker)
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MyComponent)
}

export {
  IggVueDatePicker,
  IggVueDateRangePicker
}

export default MyComponent
