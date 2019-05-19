import { shallowMount, mount } from '@vue/test-utils';
import SvgChartItems from '@/components/svg-chart-items';

describe('svg-chart-items - Snapshot', () => {
  it('Snapshot', () => {
    const wrapper = mount(SvgChartItems);
    expect(wrapper.element).toMatchSnapshot();
  });
});

describe('svg-chart-items - Props', () => {
  it('renders props', () => {
    const wrapper = shallowMount(SvgChartItems, {
      propsData: {
        bgColor: '#fff',
        svgHeight: '1em',
        items: 1
      }
    });

    expect(wrapper.vm.bgColor).toBe('#fff');
    expect(wrapper.vm.svgHeight).toBe('1em');
    expect(wrapper.vm.items).toBe(1);
  });
});

describe('svg-chart-items - Methods', () => {
  it('onMouseOver', () => {
    const wrapper = shallowMount(SvgChartItems, {});
    expect(wrapper.vm.hovered).toBeFalsy();
    wrapper.vm.onMouseOver();
    expect(wrapper.vm.hovered).toBeTruthy();
  });
});
