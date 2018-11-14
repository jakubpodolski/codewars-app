import React from 'react'
import { shallow } from 'enzyme'

import FavInfoList from '../../src/Components/FavInfoList/FavInfoList'

describe('<FavInfoList />', () => {
    const mockFn = jest.fn()
    const favInfoListProps = {
        user: {
            username: 'caparezza',
            honor: 2873
        },
        deleteSpecificUser: mockFn,
        showMoreInfo: mockFn
    }

    const wrapper = shallow( <FavInfoList {...favInfoListProps} /> )
    
    it('FavInfoList exist', () => {
        expect(wrapper).toHaveLength(1)
    })

    it('Renders img', () => {
        expect(wrapper.find('img').exists()).toEqual(true)
    })

    it('Calls function on button click', () => {
        wrapper.find('Button').at(0).simulate('click')
        wrapper.find('Button').at(1).simulate('click')
        expect(mockFn.mock.calls.length).toEqual(2)
    })
})