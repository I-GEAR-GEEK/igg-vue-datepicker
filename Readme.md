# igg-vue-datepicker
modify from [vue2-datepicker](https://github.com/mengxiong10/vue2-datepicker)

npm package: https://www.npmjs.com/package/igg-vue-datepicker

## Example
***IggDatePicker***
![](https://i.postimg.cc/wB7CCM44/Igg-Date-Picker.png)

***IggDateRangePicker (Desktop)***
![](https://i.postimg.cc/kXTh79b0/Igg-Date-Range-Picker-Desktop.png)

***IggDateRangePicker (mobile)***
![](https://i.postimg.cc/0jX2sj1t/Igg-Date-Range-Picker-Mobile.png)

## Install
```
npm install igg-vue-datepicker
// or
yarn add igg-vue-datepicker
```

## Simple Usage
```html
<template>
  <div>
    <IggVueDatePicker v-model="date" />
    <IggVueDateRangePicker v-model="dateRange" />
  </div>
</template>

<script>
import { IggVueDatePicker, IggVueDateRangePicker } from 'igg-vue-datepicker'
import 'igg-vue-datepicker/dist/igg-vue-datepicker.css'

export default {
  components: {
    IggVueDatePicker,
    IggVueDateRangePicker
  },
  data() {
    return {
      date: null,
      dateRange: []
    }
  }
}
</script>
```

## Plugin
```
import { IggVueDatePicker, IggVueDateRangePicker } from 'igg-vue-datepicker'
import 'igg-vue-datepicker/dist/igg-vue-datepicker.css'

Vue.use(IggVueDatePicker)
Vue.use(IggVueDateRangePicker)
```

## props
***IggDatePicker***
| Prop         | Description            | Type       | Default |
| -------------| ---------------------- | -----------| ------- |
| placeholder  | input placeholder text | `string`   | ''      |
| disabledDate | function disable date  | `function` | ''      |

***IggDateRangePicker***
| Prop         | Description            | Type       | Default |
| -------------| ---------------------- | -----------| ------- |
| placeholder  | input placeholder text | `string`   | ''      |
| disabledDate | function disable date  | `function` | ''      |

***use with props function***
```html
<template>
  <div>
    <IggVueDatePicker v-model="date" :disabledDate="disabledBeforeTodayAndAfterAWeek" />
  </div>
</template>

<script>
import { IggVueDatePicker } from 'igg-vue-datepicker'
import 'igg-vue-datepicker/dist/igg-vue-datepicker.css'

export default {
  components: {
    IggVueDatePicker,
  },
  data() {
    return {
      date: null,
    }
  },
  methods: {
    disabledBeforeTodayAndAfterAWeek (date) {
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      return date < today || date > new Date(today.getTime() + 7 * 24 * 3600 * 1000)
    }
  }
}
</script>
```