import React from 'react'
import { shallow } from 'enzyme'

import FavoriteUsers from '../../src/Containers/FavoriteUsers/FavoriteUsers'

describe('<FavoriteUsers />', () => {
    const mockFn = jest.fn()
    const props = {
        favUsers: ['qwark97', 'caparezza'],
        deleteSpecificUser: mockFn,
        showMoreInfo: mockFn,
    }

    const wrapper = shallow(<FavoriteUsers {...props} />)
    

    it('FavoriteUsers exist', () => {
        expect(wrapper).toHaveLength(1)
    })
    
})