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

  test('Return 0 if birthday is less than a year ago', () => {
    const dob = birthday.howOld(new Date('31 Dec 2017'));
    expect(dob).toBe(0);
  });

  test('Return 1 if birthday was a year from today', () => {
    expect(birthday.howOld(new Date('01 Jan 2017'))).toBe(1);
  });

  test('Return 0 if birthday is in the future', () => {
    const dob = birthday.howOld(new Date('31 Dec 2018'));
    expect(dob).toBe(0);
  });

  test('Return 1 if birthday is on Feb 29th, 2016 (leap year)', () => {
    const dob = birthday.howOld(new Date('29 Feb 2016'));
    expect(dob).toBe(1);
  });

  test('Return 5 if birthday is on Feb 29th, 2012 (leap year)', () => {
    const dob = birthday.howOld(new Date('29 Feb 2012'));
    expect(dob).toBe(5);
  });
});
