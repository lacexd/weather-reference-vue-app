import { mount, shallowMount } from '@vue/test-utils'
import HomeHeader from '@/components/HomeHeader.vue'
import { getters } from '@/vuex/getters'

describe('HomeHeader.vue', () => {
  it('collapses search on blur', () => {
    const wrapper = shallowMount(HomeHeader, {
      stubs: {
        'v-icon': true
      },
      mocks: {
        $store: {
          getters: {
            getCitiesByKeyword: getters.getCitiesByKeyword
          }
        }
      }
    })
    wrapper.find('input').trigger('focus')
    wrapper.find('input').setValue('bhubaneshwar')
    wrapper.find('input').trigger('blur')
    expect(wrapper.findAll('.city-label').length).toBe(0)
  })
  it('renders list on search', async () => {
    const wrapper = mount(HomeHeader, {
      stubs: {
        'v-icon': true
      },
      mocks: {
        $store: {
          getters: {
            getCitiesByKeyword: getters.getCitiesByKeyword
          }
        }
      }
    })
    wrapper.find('input').trigger('focus')
    wrapper.find('input').setValue('bhubaneshwar')
    wrapper.setData({'searchTerm': 'bhubaneshwar'})
    expect(wrapper.findAll('.city-label').length).toBe(0)
  })
})
