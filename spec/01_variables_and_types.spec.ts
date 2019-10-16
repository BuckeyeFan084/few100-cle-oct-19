describe('variables in type script', () => {
    it('any typing', () => {
        let x;

        x = 'dog';


        x = 3.14;

        // tslint:disable-next-line: only-arrow-functions
        x = function (a, b) {
            return a + b;
        };

    });
    it('implicit typing', () => {
        const x = 'dog';

        // x = 3.14;
    });
    it('has union types', () => {

        let x: number | string;

        x = 12;

        x = 'tacos';
    });

    it('const cannot be reassigned', () => {
        const PI = 3.1415;

        // PI = 4;

        const movie = {
            title: 'Rise of Skywalker',
            yearReleased: 2018
        };
        movie.yearReleased = 2019;
        const favoriteNumbers = [9, 20, 108];
        favoriteNumbers[1] = 22;
    });

    it('var is evil and you should not use it', () => {

        const age = 22;

        if (age > 21) {
            // tslint:disable-next-line: prefer-const
            let message = 'old enough!';
        }

        expect(message).toBe('old enough!');
    });
});
