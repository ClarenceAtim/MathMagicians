import calculate from '../calculate';

test('resets calculator data on AC button click', () => {
  const initialData = {
    total: '10',
    next: '5',
    operation: '+',
  };
  const resetData = calculate(initialData, 'AC');
  expect(resetData).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});

test('appends numbers correctly when an operation is set', () => {
  const initialData = {
    total: '10',
    next: '5',
    operation: '+',
  };
  const updatedData = calculate(initialData, '7');
  expect(updatedData).toEqual({
    total: '10',
    next: '57',
    operation: '+',
  });
});
