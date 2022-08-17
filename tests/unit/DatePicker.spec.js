
import { shallowMount } from '@vue/test-utils'
import DatePicker from '@/components/DatePicker.vue'

global.Date.now = jest.fn(() => new Date('2021-07-02T00:00:00'))

describe('DatePicker.vue', () => {
  it('should match with snapshot', () => {
    const wrapper = shallowMount(DatePicker, {
      placeholder: 'placeholder'
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should match with value', async () => {
    const date = new Date()
    const wrapper = await shallowMount(DatePicker, {
      propsData: {
        value: date
      }
    })

    expect(wrapper.vm.$data.date).toEqual(date)
  })

  it('should match with on change value', async () => {
    const date = new Date('2021-07-01T00:00:00')
    const wrapper = await shallowMount(DatePicker, {
      propsData: {
        value: new Date()
      }
    })

    await wrapper.setProps({
      value: date
    })

    expect(wrapper.vm.$data.date).toEqual(date)
  })
})
