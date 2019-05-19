import { mount } from '@vue/test-utils';
import ManyComponents from '@/views/Many-components';

describe('Many-components - Snapshot', () => {
  it('Snapshot', () => {
    const wrapper = mount(ManyComponents);
    expect(wrapper.element).toMatchSnapshot();
  });
});
