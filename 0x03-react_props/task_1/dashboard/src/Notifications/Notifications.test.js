import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Notifications from './Notifications';
configure({adapter: new Adapter()});
describe('test', () => {
    let wrapper;
    beforeEach(() => {
		wrapper = shallow(<Notifications/>);
	});

    it('tests dor <Notifications/> component', () => {
        expect(wrapper).toHaveLength(1);
	});

	it('tests for App-header', () => {
        expect(wrapper.find('li')).toHaveLength(3);
    });

    

    it("tests for App-header", () => {
     
		expect(wrapper.find('p')).toHaveLength(1);
	});
	
});