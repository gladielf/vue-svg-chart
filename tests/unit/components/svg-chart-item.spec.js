import { shallowMount, mount } from '@vue/test-utils';
import SvgChartItem from '@/components/svg-chart-item';

describe('svg-chart-item - Snapshot', () => {
  it('Snapshot', () => {
    const wrapper = mount(SvgChartItem, {
      propsData: {
        itemHeight: '1'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});

describe('svg-chart-item - Props', () => {
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

describe('svg-chart-item - Watch', () => {
  it('Al modificar la prop "itemHeight" se recalcula la altura y el delay', () => {
    const wrapper = shallowMount(SvgChartItem, {
      propsData: {
        itemHeight: '5',
        position: 5,
        hovered: true
      }
    });
    // eslint-disable-next-line no-console
    console.error = jest.fn();
    const spyHeight = jest.spyOn(wrapper.vm, '_setItemHeight');
    const spyDelay = jest.spyOn(wrapper.vm, '_setItemDelay');
    expect(wrapper.vm.delay).toBe('.05s');
    wrapper.vm.itemHeight = '6';
    expect(spyHeight).not.toHaveBeenCalled();
    expect(spyDelay).not.toHaveBeenCalled();
  });
});

describe('svg-chart-item - Methods', () => {
  it('Con una posicion de "5" el delay es de ".05s"', () => {
    const wrapper = shallowMount(SvgChartItem, {
      propsData: {
        itemHeight: '5',
        position: 5,
        hovered: true
      }
    });
    expect(wrapper.vm.delay).toBe('.05s');
  });
});
