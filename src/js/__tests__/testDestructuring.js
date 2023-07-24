import destruction from '../destructuring';

test('charTest', () => {
  const charTest = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
      }],
  };
  const result = destruction(charTest);
  expect(result).toEqual([{ id: 8 }, { name: 'Двойной выстрел' }, { icon: 'http://...' }, { description: 'Описание недоступно' }]);
});
