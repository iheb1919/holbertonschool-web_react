import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe("Testing the <NotificationItem /> Component", () => {
	
	let wrapper;

	it("<NotificationItem /> is rendered without crashing", () => {
		wrapper = shallow(<NotificationItem idx={2} />);
		expect(wrapper).to.not.be.an('undefined');
	});

	it("<NotificationItem /> render the correct HTML, by passing type and value props", () => {

		const props = {
			type: "default",
			value: "test",
			html: undefined
		}
		wrapper = shallow(<NotificationItem idx={2} {...props}/>);
		expect(wrapper.html()).equal(`<li data-priority="${props.type}">test</li>`);
    });
    
    it("<NotificationItem /> render the correct HTML, by passing dummy html props", () => {
		const props = {
			type: "default",
			html: { __html: '<u>test</u>' }
		}
		wrapper = shallow(<NotificationItem idx={2} {...props}/>);
		expect(wrapper.html()).equal(`<li data-priority="${props.type}"><u>test</u></li>`);
	});

	it("Verify that when Clicking on the component, the 'markAsRead' is called with the right ID argument", () => {
		const props = {
			type: "urgent",
			html: { __html: "<p>test</p>"},
			markAsRead: (id) => { console.log(`Notification ${id} has been marked as read`)}
		};
		wrapper = shallow(<NotificationItem idx={2} {...props} />);
		console.log = jest.fn();
		wrapper.find('li').simulate('click');
		expect(console.log.mock.calls[0][0]).equal("Notification 2 has been marked as read");
		console.log.mockRestore();
	});

});
