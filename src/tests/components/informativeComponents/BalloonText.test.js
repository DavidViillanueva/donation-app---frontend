
import React from 'react';
import { shallow } from 'enzyme';
import BalloonText from '../../../components/informativeComponents/BalloonText';

describe('BallonTex component', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<BalloonText />);

        expect( wrapper ).toMatchSnapshot();
    })
    
})
