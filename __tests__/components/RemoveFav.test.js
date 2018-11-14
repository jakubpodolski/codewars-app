import React from 'react'
import { shallow } from 'enzyme'

import RemoveFav from '../../src/Components/RemoveFav/RemoveFav'

describe('<RemoveFav />', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<RemoveFav deleteAllUsers = {mockFn} />)

    it('renders div with class: remove-button', () => {
        expect(wrapper.find('div.remove-button')).toHaveLength(1)
    })
    it('calls function on button click', () => {
        wrapper.find('Button').simulate('click')
        expect(mockFn.mock.calls.length).toEqual(1)
    })
})