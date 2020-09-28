import React from 'react';
import { shallow } from 'enzyme';
import DonationApp from '../DonationApp'

describe('DonationApp test', () => {

    const donationTest = {
        cause: 'test cause',
        doners: 1,
        amount: 10000,
        describe: 'describe test cause'
    }
    test('should render correctly', () => {
        const wrapper = shallow(
            <DonationApp
                cause = { donationTest.cause } 
                amount = { donationTest.amount }
                doners = { donationTest.doners }
                describe = { donationTest.describe }
            />
        );
        
        const title = wrapper.find('h2');
        expect( wrapper ).toMatchSnapshot();
        expect( title.contains( donationTest.cause )).toBe( true );
    });

    
    
    
})
