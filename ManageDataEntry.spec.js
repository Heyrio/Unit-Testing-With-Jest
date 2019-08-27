import {
  mount,
} from '@vue/test-utils';
import Vue from 'vue';
import Multiselect from 'vue-multiselect';
import ToggleButton from 'vue-js-toggle-button';
import Buefy from 'buefy';
import ManageDataEntry from '@/components/ManageDataEntry.vue';

Vue.component('multiselect', Multiselect);
Vue.use(ToggleButton);
Vue.use(Buefy, {
  defaultIconPack: 'far',
});

describe('ManageDataEntry.vue', () => {
  it('Button is clicked', () => {
    const wrapper = mount(ManageDataEntry);
    wrapper.find('button').trigger('click');
    expect(wrapper.find('div').text('Deleted Unsaved Campaign!'));
  });
});
