import test from 'tape';
import * as actions from './movieActions';

test('movieActions Test addMovie', (assert) => {
    //Arrange
    const message = 'should have ADD_MOVIE as type';
    const expected = {
        type: 'ADD_MOVIE',
        payload: {
            title: 'Toy Story',
            year: 1995
        }
    };

    //Act
    const actual = actions.addMovie({title:'Toy Story', year: 1995});

    //Assert
    assert.deepEqual(actual, expected, message);
    assert.end();
});

test('movieActions Test inputChange', (assert) => {
    //Arrange
    const message = 'should have INPUT_CHANGE as type';
    const expected = {
        type: 'INPUT_CHANGE',
        payload: 'Toy Story'
    };

    //Act
    const actual = actions.inputChange('Toy Story');

    //Assert
    assert.deepEqual(actual, expected, message);
    assert.end();
});

test('movieActions Test searchMovie', (assert) => {
    //Arrange
    const message = 'should have SEARCH_MOVIE as type';
    const expected = {
        type: 'SEARCH_MOVIE',
        payload: 'Toy Story'
    };

    //Act
    const actual = actions.searchMovie('Toy Story');

    //Assert
    assert.deepEqual(actual, expected, message);
    assert.end();
});
