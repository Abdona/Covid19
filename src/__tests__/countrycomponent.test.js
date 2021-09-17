import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Mockedcountry from '../mocks/mockedCountry';
import '@testing-library/jest-dom';

describe('Test Home page Components', () => {
  it('test HomePage function component renders without error', () => {
    const divElement = document.createElement('div');
    ReactDOM.render(<Mockedcountry />, divElement);
  });

  it('render correctly', () => {
    const { getByTestId } = render(<Mockedcountry country="Egypt" today_confirmed="239" />);
    expect(getByTestId('country')).toHaveTextContent('Egypt239');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Mockedcountry />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
