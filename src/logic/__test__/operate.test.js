import operate from '../operate';

test('performs addition correctly', () => {
  expect(operate('2', '3', '+')).toBe('5');
});

test('performs subtraction correctly', () => {
  expect(operate('5', '2', '-')).toBe('3');
});

test('performs multiplication correctly', () => {
  expect(operate('2', '3', 'x')).toBe('6');
});

test('performs division correctly', () => {
  expect(operate('6', '2', '÷')).toBe('3');
});

test('handles division by zero', () => {
  expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
});

test('performs modulo operation correctly', () => {
  expect(operate('7', '3', '%')).toBe('1');
});

test('handles modulo operation with division by zero', () => {
  expect(operate('5', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
});

test('throws error for unknown operation', () => {
  expect(() => operate('2', '3', '^')).toThrowError("Unknown operation '^'");
});
