import { mount } from '@vue/test-utils';
import WeightingTool from '@/components/PieChart';

describe('WeightingTool.vue', () => {
  it('Testing the save modal', () => {
    const wrapper = mount(WeightingTool);
    expect(wrapper.element).toMatchSnapshot();
  });
});
