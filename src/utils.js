// src/utils.js
export function isPalindrome(word) {
    if (typeof word !== 'string' || !/^[A-Za-z]*$/.test(word)) {
        throw new Error('Invalid input');
    }

    if (word === '') {
        return false;
    }

    const normalizedWord = word.toLowerCase();
    const reversedWord = normalizedWord.split('').reverse().join('');
    return normalizedWord === reversedWord;
}

