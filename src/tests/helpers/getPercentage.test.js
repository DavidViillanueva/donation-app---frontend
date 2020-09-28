
import getPercentage from '../../helpers/getPercentage';

describe('Test helper getPercentage', () => {
    test('should return the 50%', () => {
        const percentage = getPercentage(100,50);
        expect( percentage ).toBe( 50 );
    })
    
})
