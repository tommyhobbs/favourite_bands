import test from 'tape';
import * as actions from './artistActions';

test('artistActions Test addArtist', (assert) => {
  //Arrange
  const message = 'should have ADD_ARTIST as type';
  const expected = {
    type: 'ADD_ARTIST',
    payload: {
      name: 'Toy Story',
      popularity: 1995,
    },
  };

  //Act
  const actual = actions.addArtist({name: 'Toy Story', popularity: 1995});

  //Assert
  assert.deepEqual(actual, expected, message);
  assert.end();
});

test('artistActions Test inputChange', (assert) => {
  //Arrange
  const message = 'should have INPUT_CHANGE as type';
  const expected = {
    type: 'INPUT_CHANGE',
    payload: 'Toy Story',
  };

  //Act
  const actual = actions.inputChange('Toy Story');

  //Assert
  assert.deepEqual(actual, expected, message);
  assert.end();
});

test('artistActions Test searchArtist', (assert) => {
  //Arrange
  const message = 'should have SEARCH_ARTIST as type';
  const expected = {
    type: 'SEARCH_ARTIST',
    payload: 'Toy Story',
  };

  //Act
  const actual = actions.searchArtist('Toy Story');

  //Assert
  assert.deepEqual(actual, expected, message);
  assert.end();
});
