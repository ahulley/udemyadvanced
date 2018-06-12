import React from 'react'
import { mount } from 'enzyme'

import CommentBox from 'components/CommentBox'
import Root from 'Root'
import { wrap } from 'module';

let wrapped;

beforeEach(() => {
	wrapped = mount(
		<Root>
			<CommentBox />
		</Root>);
});

afterEach(() => {
	wrapped.unmount();
});

it('has a text area and two buttons', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {

	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: {
				value: 'new comment'
			}
		});

		wrapped.update();
	});

	it('has a text area that users can type in', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it('has the text area cleared when form is submitted', () => {
		wrapped.find('form').simulate('submit');

		wrapped.update();

		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});

});