const ColorChoice = require('../index');
const index = require('../index');

describe('index', () => {

    describe('testBothColors', () => {
        it('should throw an error saying that both colors are invalid.', () => {
            const result = console.error('Error: Invalid text and shape color. Please try again.')
            const index = new ColorChoice('Con', 'blue09', 'circle', 'red09');
            expect(index.colorChoice()).toEqual(result)
            
        });
    });

    describe('testTextColor', () => {
        it('should throw an error saying that text colors are invalid.', () => {
            const result = console.error('Error: Invalid text color. Please try again.')
            const index = new ColorChoice('Con', 'blue09', 'circle', 'red');
            expect(index.colorChoice()).toEqual(result)
            
        });
    });
    describe('testShapeColor', () => {
        it('should throw an error saying that shape colors are invalid.', () => {
            const result = console.error('Error: Invalid shape color. Please try again.')
            const index = new ColorChoice('Con', 'blue', 'circle', 'red09');
            expect(index.colorChoice()).toEqual(result)
            
        });
    });
    describe('testBothColorsSame', () => {
        it('should throw an error saying that you cant have the same colors colors.', () => {
            const result = console.error('Error: Text and Shape color cannot be the same. Please try again.')
            const index = new ColorChoice('Con', 'blue', 'circle', 'blue');
            expect(index.colorChoice()).toEqual(result)
            
        });
    });
    // describe('testBothColorsOkay', () => {
    //     it('Should pass because both colors are correct.', () => {
    //         const result = console.log('All answers valid!');
    //         const index = new ColorChoice('Con', 'red', 'circle', 'blue');
    //         expect(index.colorChoice()).toEqual(result)
            
    //     });
    // });
});

