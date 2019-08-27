import {
  mount,
} from '@vue/test-utils';
import Vue from 'vue';
import Multiselect from 'vue-multiselect';
import VotingSecond from '@/components/VotingSecond.vue';

Vue.component('multiselect', Multiselect);
describe('VotingSecond.vue', () => {
  it('arrayContaining', () => {
    const labels = [{
      id: 1,
      name: 'Attribute 1',
      color: '#e60e0e',
      cycle: 1,
    }, {
      id: 2,
      name: 'Attribute 2',
      color: '#3366E6',
      cycle: 1,
    }, {
      id: 3,
      name: 'Attribute 3',
      color: '#e60e0e',
      cycle: 1,
    }, {
      id: 4,
      name: 'Attribute 4',
      color: '#124011',
      cycle: 1,
    }, {
      id: 5,
      name: 'Attribute 5',
      color: '#3366E6',
      cycle: 1,
    }];
    const wrapper = mount(VotingSecond, {
      propsData: {
        labels,
      },
    });
    expect(wrapper.exists(labels)).toBe(true);
  });
});
