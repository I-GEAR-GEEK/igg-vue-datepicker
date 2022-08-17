
import { shallowMount } from '@vue/test-utils'
import DateRangePicker from '@/components/DateRangePicker.vue'

global.Date.now = jest.fn(() => new Date('2021-07-02T00:00:00'))

describe('DateRangePicker.vue', () => {
  it('should match with snapshot', () => {
    const wrapper = shallowMount(DateRangePicker, {
      placeholder: 'placeholder'
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should match with value', async () => {
    const wrapper = await shallowMount(DateRangePicker, {
      propsData: {
        value: [new Date('2021-07-01T00:00:00.000Z'), new Date('2021-07-02T00:00:00.000Z')]
      }
    })

    wrapper.vm.$refs.datepicker.closePopup = jest.fn()
    const expectResult = [new Date('2021-07-01T00:00:00.000Z'), new Date('2021-07-02T00:00:00.000Z')]
    expect(wrapper.vm.$data.dateRange).toEqual(expectResult)
  })
  it('should match with yesterday', async () => {
    const wrapper = await shallowMount(DateRangePicker)
    wrapper.vm.$refs.datepicker.closePopup = jest.fn()
    await wrapper.vm.setDateAgo(1)

    const expectResult = [new Date('2021-07-01T00:00:00.000Z'), new Date('2021-07-02T00:00:00.000Z')]
    expect(wrapper.vm.$data.dateRange).toEqual(expectResult)
  })
  it('should match with current week', async () => {
    const wrapper = await shallowMount(DateRangePicker)
    wrapper.vm.$refs.datepicker.closePopup = jest.fn()
    await wrapper.vm.setDateWeek()

    const expectResult = [new Date('2021-06-27T00:00:00.000Z'), new Date('2021-07-03T00:00:00.000Z')]
    expect(wrapper.vm.$data.dateRange).toEqual(expectResult)
  })
  it('should match with last week', async () => {
    const wrapper = await shallowMount(DateRangePicker)
    wrapper.vm.$refs.datepicker.closePopup = jest.fn()
    await wrapper.vm.setDateLastWeek()

    const expectResult = [new Date('2021-06-20T00:00:00.000Z'), new Date('2021-06-26T00:00:00.000Z')]
    expect(wrapper.vm.$data.dateRange).toEqual(expectResult)
  })
  it('should match with current month', async () => {
    const wrapper = await shallowMount(DateRangePicker)
    wrapper.vm.$refs.datepicker.closePopup = jest.fn()
    await wrapper.vm.setDateMonth()

    const expectResult = [new Date('2021-07-01T00:00:00.000Z'), new Date('2021-07-31T00:00:00.000Z')]
    expect(wrapper.vm.$data.dateRange).toEqual(expectResult)
  })
  it('should match with last month', async () => {
    const wrapper = await shallowMount(DateRangePicker)
    wrapper.vm.$refs.datepicker.closePopup = jest.fn()
    await wrapper.vm.setDateLastMonth()

    const expectResult = [new Date('2021-06-01T00:00:00.000Z'), new Date('2021-06-30T00:00:00.000Z')]
    expect(wrapper.vm.$data.dateRange).toEqual(expectResult)
  })
})
