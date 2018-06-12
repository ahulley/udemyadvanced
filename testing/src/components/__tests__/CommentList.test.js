import React from 'react'
import { mount } from 'enzyme'
import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapped;
beforeEach(() => {
	const initialState = {
		comments: ['one comment', 'two comment']
	};

	wrapped = mount(
		<Root initialState={initialState} >
			<CommentList />
		</Root>
	);
});

it('creates one li per comment', () => {
	expect(wrapped.find('li').length).toEqual(2);
});

it('show the text for each comment', () => {
	expect(wrapped.render().text()).toContain('one comment');
	expect(wrapped.render().text()).toContain('two comment');
});