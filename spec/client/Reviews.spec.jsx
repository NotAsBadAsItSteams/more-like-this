import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from '../../client/src/components/Reviews';

describe('Reviews component', () => {
  test('should match snapshot for mostly negative review', () => {
    const reviewRating = 'Mostly Negative';
    const reviewNumber = 20007;

    const component = renderer.create(<Reviews rating={reviewRating} number={reviewNumber} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should match snapshot for mostly positive review', () => {
    const reviewRating = 'Mostly Positive';
    const reviewNumber = 107;

    const component = renderer.create(<Reviews rating={reviewRating} number={reviewNumber} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should match snapshot for mixed review', () => {
    const reviewRating = 'Mixed';
    const reviewNumber = 12817;

    const component = renderer.create(<Reviews rating={reviewRating} number={reviewNumber} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
