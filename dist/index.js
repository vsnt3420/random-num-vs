"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumber = void 0;
const data = {
    id: 1,
    name: 'Example'
};
const generateRandomNumber = (min, max) => {
    // Ensure min is less than max, swap values if needed
    if (min > max) {
        [min, max] = [max, min];
    }
    // Generate a random number within the specified range
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
};
exports.generateRandomNumber = generateRandomNumber;
