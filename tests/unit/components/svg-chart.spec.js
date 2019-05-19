import { shallowMount, mount } from '@vue/test-utils';
import SvgChart from '@/components/svg-chart';

describe('svg-chart - Snapshot', () => {
  it('Snapshot', () => {
    const wrapper = mount(SvgChart);
    expect(wrapper.element).toMatchSnapshot();
  });
});

describe('svg-chart - Methods', () => {
  it('renders props', () => {
    const wrapper = shallowMount(SvgChart, {});
    expect(wrapper.vm._getPosition(0)).toBe('6.25%');
  });
});
