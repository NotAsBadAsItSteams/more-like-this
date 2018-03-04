import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Screenshots from '../../client/src/components/Screenshots';


describe('Screenshots component', () => {
  const INTERVAL_LENGTH = 1000;
  const screenshots = [
    '/assets/screenshots/12-0.png',
    '/assets/screenshots/12-1.png',
    '/assets/screenshots/12-2.png',
    '/assets/screenshots/12-3.png',
  ];
  jest.useFakeTimers();

  test('should match snapshot', () => {
    const component = renderer.create(<Screenshots screenshots={screenshots} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should change image every second', () => {
    const wrapper = mount(<Screenshots screenshots={screenshots} />);
    expect(wrapper.state('currentImageIndex')).toEqual(0);
    expect(wrapper.state('currentImage')).toEqual(screenshots[0]);
    jest.advanceTimersByTime(INTERVAL_LENGTH);
    expect(wrapper.state('currentImageIndex')).toEqual(1);
    expect(wrapper.state('currentImage')).toEqual(screenshots[1]);
    wrapper.unmount();
  });

  test('should reset back to first image when it reaches the end', () => {
    const wrapper = mount(<Screenshots screenshots={screenshots} />);
    for (let i = 0; i < screenshots.length; i += 1) {
      expect(wrapper.state('currentImageIndex')).toEqual(i);
      expect(wrapper.state('currentImage')).toEqual(screenshots[i]);
      jest.advanceTimersByTime(INTERVAL_LENGTH);
    }
    expect(wrapper.state('currentImageIndex')).toEqual(0);
    expect(wrapper.state('currentImage')).toEqual(screenshots[0]);
    wrapper.unmount();
  });

  test('should cancel the set interval when unmounted', () => {
    const wrapper = mount(<Screenshots screenshots={screenshots} />);
    expect(setInterval).toHaveBeenCalled();
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
