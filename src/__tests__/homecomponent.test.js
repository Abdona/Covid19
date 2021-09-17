import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Mockedhome from '../mocks/mockedhomecomponent';
import '@testing-library/jest-dom';

describe('Test Home page Components', () => {
  it('test HomePage function component renders without error', () => {
    const divElement = document.createElement('div');
    ReactDOM.render(<Mockedhome />, divElement);
  });

  it('render correctly', () => {
    const { getByTestId } = render(<Mockedhome />);
    expect(getByTestId('homepage')).toHaveTextContent('Europe0STATS BY COUNTRY');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Mockedhome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
