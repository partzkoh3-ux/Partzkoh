// Sample unit tests for demonstration purposes

describe('Sample Unit Tests', () => {
    test('should add two numbers correctly', () => {
        expect(1 + 1).toBe(2);
    });

    test('should return true for a valid string', () => {
        const isValidString = (str) => typeof str === 'string' && str.length > 0;
        expect(isValidString('test')).toBe(true);
    });

    test('should return false for an empty string', () => {
        const isValidString = (str) => typeof str === 'string' && str.length > 0;
        expect(isValidString('')).toBe(false);
    });
});