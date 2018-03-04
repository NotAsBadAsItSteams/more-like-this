import React from 'react';
import renderer from 'react-test-renderer';
import GameSummary from '../../client/src/components/GameSummary';

describe('GameSummary component', () => {
  test('should match snapshot', () => {
    const game = {
      price: '24.99',
      title: 'DOTA 2',
      thumbnailUrl: 'http://via.placeholder.com/184x69',
    };

    const component = renderer.create(<GameSummary game={game} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
