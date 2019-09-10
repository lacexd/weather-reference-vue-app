import { shallowMount } from '@vue/test-utils'
import CityCard from '@/components/CityCard.vue'

const props = {
  name: 'Budapest',
  id: 123,
  weather: 'Clear',
  temperature: 23,
  perfect: true,
  country: 'hu'
}

describe('CityCard.vue', () => {
  it('renders message if days is marked as perfect', () => {
    const wrapper = shallowMount(CityCard, {
      propsData: { ...props },
      stubs: {
        'v-icon': true
      }
    })
    expect(wrapper.findAll('.perfect-tag').length).toBe(1)
  })
  it('renders country flag', () => {
    const wrapper = shallowMount(CityCard, {
      propsData: { ...props },
      stubs: {
        'v-icon': true
      }
    })
    expect(wrapper.findAll('.flag-icon-hu').length).toBe(1)
  })
  it("test country class computed", () => {
    const localThis = { country: 'hu' }

    expect(CityCard.computed.countryClass.call(localThis)).toBe('flag-icon-hu')
  })
})
