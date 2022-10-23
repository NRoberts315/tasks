import { setUncaughtExceptionCaptureCallback } from "process";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers[0] == null) {
        return numbers;
    }
    let out;
    if (numbers[1] == null) {
        out = [numbers[0], numbers[0]];
        return out;
    }
    out = [numbers[0], numbers[numbers.length - 1]];
    return out;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((item: number): number => item * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intConversion = numbers.map((item: string): number =>
        Number(item) ? Number(item) : 0
    );
    return intConversion;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollars = amounts.filter(
        (message: string): boolean => message[0] === "$"
    );
    const noNonInts = noDollars.map((single: string): number =>
        isNaN(Number(single)) ? 0 : Number(single)
    );
    return noNonInts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter(
        (message: string): boolean => message[message.length - 1] != "?"
    );
    const loudIfExclaiming = noQuestions.map((message: string): string =>
        message[message.length - 1] == "!" ? message.toUpperCase() : message
    );
    return loudIfExclaiming;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const isShortWord = (word: string): boolean => word.length < 4;
    const shortWords = words.filter(isShortWord);
    const numShortWords = shortWords.length;
    return numShortWords;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let rgb = true;
    const isRGB = colors.map((color: string): boolean =>
        color === "red" || color === "green" || color === "blue" ? true : false
    );
    rgb = !isRGB.includes(false);
    return rgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let equation = "";
    let sum = 0;
    const makeEquation = addends.map(
        (adds: number): string => (equation += String(adds) + "+")
    );
    const makeSum = addends.map((adds: number): number => (sum += adds));
    equation = equation.substring(0, equation.length - 1);
    let finalEq = String(sum) + "=" + equation;
    if (finalEq.slice(-1) === "=") {
        finalEq += "0";
    }
    return finalEq;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let count = 0;
    return [];
}
