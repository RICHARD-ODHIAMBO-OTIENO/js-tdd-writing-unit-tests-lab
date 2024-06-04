// src/__tests__/utils.test.js
import { isPalindrome } from '../utils';

describe('isPalindrome', () => {
    test('should return true for a palindrome word', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    test('should return false for a non-palindrome word', () => {
        expect(isPalindrome('car')).toBe(false);
    });

    test('should return true for palindrome words with mixed case', () => {
        expect(isPalindrome('RaceCar')).toBe(true);
    });

    test('should return false for an empty string', () => {
        expect(isPalindrome('')).toBe(false);
    });

    test('should throw an error for words with non-alphabetic characters', () => {
        expect(() => isPalindrome('racecar123')).toThrow('Invalid input');
    });

    test('should throw an error for non-string input', () => {
        expect(() => isPalindrome(123)).toThrow('Invalid input');
    });
});
