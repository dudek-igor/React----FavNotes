const addTwo = (a, b) => a + b;

it('adds two numbers', () => {
  expect(addTwo(1, 2)).toBe(3);
});
