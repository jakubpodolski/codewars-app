import React from 'react'
import { shallow } from 'enzyme'

import SearchBox from '../../src/Components/SearchBox/SearchBox'


describe('<SearchBox />', () => {
    const mockFn = jest.fn()
    const props = {
        searchUser: mockFn,
        handleSubmit: mockFn,
    }

    const wrapper = shallow(<SearchBox {...props}/>)
    
    it('Renders div with class: searchbox-div', () => {
        expect(wrapper.find('div.searchbox-div')).toHaveLength(1)
    })

    it('Calss function on form submit', () => {
        wrapper.find('Form').simulate('submit')
        expect(mockFn.mock.calls.length).toEqual(1)
    })

    it('Calss function on form change', () => {
        wrapper.find('FormControl').simulate('change')
        expect(mockFn.mock.calls.length).toEqual(2)
    })
})