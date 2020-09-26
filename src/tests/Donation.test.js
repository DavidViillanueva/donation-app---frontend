import React from 'react';
import { shallow } from 'enzyme';
import DonationApp from '../DonationApp'

describe('DonationApp test', () => {

    test('should render correctly', () => {
        const wrapper = shallow(<DonationApp
            expireDate = { new Date(2020,11,1)}
            cause = {'test'} 
            amount = { 10000 }
            doners = { 0 }
            describe = {'test'}
          />);
        
        expect( wrapper ).toMatchSnapshot();
    });

    
    
    
})
