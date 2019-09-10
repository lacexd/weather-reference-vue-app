import { shallowMount } from '@vue/test-utils'
import WeatherAnimation from '@/components/WeatherAnimation.vue'

describe('WeatherAnimation.vue', () => {
  it('renders sun when Clear is passed', () => {
    const weather = 'Clear'
    const wrapper = shallowMount(WeatherAnimation, {
      propsData: { weather }
    })
    expect(wrapper.findAll('.sun').length).toBe(1)
  })
  it('renders cloud when Clouds is passed', () => {
    const weather = 'Clouds'
    const wrapper = shallowMount(WeatherAnimation, {
      propsData: { weather }
    })
    expect(wrapper.findAll('.clouds').length).toBe(1)
  })
  it('renders rain when Rain is passed', () => {
    const weather = 'Rain'
    const wrapper = shallowMount(WeatherAnimation, {
      propsData: { weather }
    })
    expect(wrapper.findAll('.rain-cloud').length).toBe(1)
  })
  it('renders snow when Snow is passed', () => {
    const weather = 'Snow'
    const wrapper = shallowMount(WeatherAnimation, {
      propsData: { weather }
    })
    expect(wrapper.findAll('.snow').length).toBe(1)
  })
})
