import React from 'react';
import { shallow } from 'enzyme';

import UserInfo from '../../src/Components/UserInfo/UserInfo'
import ButtonTest from '../../src/Components/Button'


describe('<UserInfo />', () => {
    const handleFavClick = () => jest.fn()
    const userInfoProps = {
        user: {
            username: 'caparezza',
            name: 'Jakub Podolski',
            honor: 2262,
            clan: 'UEK',
            leaderboardPosition: 1889,           
        },
        favorite: ['qwark97', 'Logan', 'caparezza'],
        handleFavClick 
    }
    const wrapper = shallow(<UserInfo {...userInfoProps} />)
        
    it('Allways renders icon', () => {
        expect(wrapper.find('Button').childAt(0).hasClass('button-iconFaved')).toEqual(true)
    })

    /*it('test click', () => {
        const mockCallBack = jest.fn()
        
        const button = shallow( <ButtonTest props={mockCallBack}/>)
        button.find('Button').simulate('click')

        expect(mockCallBack.mock.calls.length).toEqual(1)
        

    })    */
})