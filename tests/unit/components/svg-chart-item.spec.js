import { shallowMount } from '@vue/test-utils';
import SvgChartItem from '@/components/svg-chart-item';

describe('SvgChartItem.vue', () => {
  it('renders props', () => {
    const wrapper = shallowMount(SvgChartItem, {
      propsData: {
        itemHeight: '5',
        position: 20,
        hovered: true
      }
    });

    expect(wrapper.vm.itemHeight).toBe('5');
    expect(wrapper.vm.position).toBe(20);
    expect(wrapper.vm.hovered).toBe(true);
  });
});
