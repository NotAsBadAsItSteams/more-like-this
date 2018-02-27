import React from 'react';
import renderer from 'react-test-renderer';
import MoreLikeThis from '../../client/src/components/MoreLikeThis';

describe('MoreLikeThis component', () => {
  test('should match snapshot', () => {
    const component = renderer.create(<MoreLikeThis />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
