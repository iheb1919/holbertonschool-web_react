import React from 'react';
import { shallow } from 'enzyme';
import App from './App'

describe('<App />', () => {
    let wrapper;
    beforeEach(() => {
		wrapper = shallow(<App />);
	});

    it('tests dor <App /> component', () => {
        expect(wrapper).toHaveLength(1);
	});

	it('tests for App-header', () => {
        expect(wrapper.find('.App-header')).toHaveLength(1);
    });

	it('tests for for App-body', () => {
        expect(wrapper.find('.App-body')).toHaveLength(1);
    });

	it('tests for App-footer', () => {
        expect(wrapper.find('.App-footer')).toHaveLength(1);
    });
});