import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/home/Home';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Store, AnyAction } from 'redux';
import { defaultAction } from '../actions/default.action';
const mockStore = configureStore([]);

describe('Home Test', () => {
	let store: Store<any, AnyAction>;
	let component: renderer.ReactTestRenderer;

	beforeEach(() => {
		store = mockStore({});
		store.dispatch = jest.fn();
		component = renderer.create(
			<Provider store={store}>
				<Home />
			</Provider>
		);
	});
	it('should render with given state from Redux store', () => {
		expect(component.toJSON()).toMatchSnapshot();
	});
	it('should dispatch an action on button click', () => {
		renderer.act(() => {
			component.root.findByType('button').props.onClick();
		});

		expect(store.dispatch).toHaveBeenCalledTimes(1);
		expect(store.dispatch).toHaveBeenCalledWith(
			defaultAction()
		);
	});
});
