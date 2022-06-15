import { sum } from './utils';

it('tests sum', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(2, 8)).toBe(10);
});