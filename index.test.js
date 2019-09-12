/* eslint-disable no-global-assign, no-underscore-dangle */

const birthday = require('./index');

describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  // setup for additional tests
  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });

  test('Return 20 if age is 20', () => {
    const dob = birthday.howOld(new Date('15 Mar 1997'));
    expect(dob).toBe(20);
    expect(dob).toBeGreaterThan(19);
    expect(dob).toBeLessThan(22);
  });
});
