import test from 'tape';
import * as actions from './artistActions';

test('artistActions Test addArtist', (assert) => {
  // Arrange
  const message = 'should have ADD_ARTIST as type';
  const expected = {
    payload: {
      name: 'Toy Story',
      popularity: 1995,
    },
    type: 'ADD_ARTIST',
  };

  // Act
  const actual = actions.addArtist({name: 'Toy Story', popularity: 1995});

  // Assert
  assert.deepEqual(actual, expected, message);
  assert.end();
});

test('artistActions Test inputChange', (assert) => {
  // Arrange
  const message = 'should have INPUT_CHANGE as type';
  const expected = {
    payload: 'Toy Story',
    type: 'INPUT_CHANGE',
  };

  // Act
  const actual = actions.inputChange('Toy Story');

  // Assert
  assert.deepEqual(actual, expected, message);
  assert.end();
});

test('artistActions Test searchArtist', (assert) => {
  // Arrange
  const message = 'should have SEARCH_ARTIST as type';
  const expected = {
    payload: 'Toy Story',
    type: 'SEARCH_ARTIST',
  };

  // Act
  const actual = actions.searchArtist('Toy Story');

  // Assert
  assert.deepEqual(actual, expected, message);
  assert.end();
});

test('artistActions Test loginChange', (assert) => {
  // Arrange
  const message = 'should have LOGIN_CHANGE as type';
  const expected = {
    payload: false,
    type: 'LOGIN_CHANGE',
  };

  // Act
  const actual = actions.loginChange(false);

  // Assert
  assert.deepEqual(actual, expected, message);
  assert.end();
});
