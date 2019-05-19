import { mount } from '@vue/test-utils';
import OneComponent from '@/views/One-component';

describe('One-component - Snapshot', () => {
  it('Snapshot', () => {
    const wrapper = mount(OneComponent);
    expect(wrapper.element).toMatchSnapshot();
  });
});
