import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Country from '../components/countrycomponent';
import '@testing-library/jest-dom';

describe('Test Home page Components', () => {
  it('test HomePage function component renders without error', () => {
    const divElement = document.createElement('div');
    ReactDOM.render(<Country />, divElement);
  });

  it('render correctly', () => {
    const { getByTestId } = render(<Country country="Egypt" today_confirmed="239" />);
    expect(getByTestId('country')).toHaveTextContent('Egypt239');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Country />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
