import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../../src/Components/Loading/Loading'


describe('<Loading />', () => {
    const wrapper = shallow(<Loading />)
    
    it('renders 1 <Loading /> component', () => {
        expect(wrapper).toHaveLength(1)
    })
    
    it('has className of lds-dual-ring', () => {
        expect(wrapper.find('div').children().hasClass('lds-dual-ring')).toEqual(true)
    })

})