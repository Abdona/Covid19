import { React } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import store from '../redux/configureStore';
import Home from '../components/homecomponent';
import '@testing-library/jest-dom';

describe('Test Home page Components', () => {
  it('test HomePage function component renders without error', () => {
    const divElement = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Home /></Provider>, divElement);
  });

  it('render correctly', () => {
    const { getByTestId } = render(<Provider store={store}><Home /></Provider>);
    expect(getByTestId('homepage')).toHaveTextContent('Europe0STATS BY COUNTRY');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Home /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
