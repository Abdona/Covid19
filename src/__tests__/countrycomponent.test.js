import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import store from '../redux/configureStore';
import Country from '../components/countrycomponent';
import '@testing-library/jest-dom';

describe('Test Home page Components', () => {
  it('test HomePage function component renders without error', () => {
    const divElement = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Country /></Provider>, divElement);
  });

  it('render correctly', () => {
    const { getByTestId } = render(<Provider store={store}><Country country="Egypt" today_confirmed="239" /></Provider>);
    expect(getByTestId('country')).toHaveTextContent('Egypt239');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Country /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
