import { hello } from './HelloWorld';

describe('hello', () => {
  test('it says Hello, world!', () => {
    expect(hello()).toEqual('Hello, World!');
  });

  test("it says Hello, Ben! when passed 'Ben' as first param", () => {
    expect(hello('Ben')).toEqual('Hello, Ben!');
  });
  test("it says Hello, Joe! when passed 'Joe' as first param", () => {
    expect(hello('Joe')).toEqual('Hello, Joe!');
  });
});
