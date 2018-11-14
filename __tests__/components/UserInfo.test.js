import React from 'react';
import { shallow } from 'enzyme';


import UserInfo from '../../src/Components/UserInfo/UserInfo'



describe('<UserInfo />', () => {
    const mockFn = jest.fn()
    const userInfoProps = {
        user: {
            username: 'caparezza',
            name: 'Jakub Podolski',
            honor: 2262,
            clan: 'UEK',
            leaderboardPosition: 1889,           
        },
        favorite: ['qwark97', 'Logan'],
        handleFavClick: mockFn
    }
    const wrapper = shallow(<UserInfo {...userInfoProps} />)
    
    it('Allways renders icon', () => {
        expect(wrapper.find('Button').childAt(0).hasClass('button-iconFaved')).toEqual(true)
    })

    it('Button exists', () => {        
        expect(wrapper.find('Button').exists()).toEqual(true)
    })
    
    it('calls mock function when clicked', () => {
        wrapper.find('Button').simulate('click')
        expect(mockFn.mock.calls.length).toEqual(1)
    })
})