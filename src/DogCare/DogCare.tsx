function containsNumber(str: string): boolean {
    return /\d/.test(str);
}

function containsSpecial(str: string): boolean {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

function containsLetter(str: string): boolean {
    return /[a-zA-Z]/.test(str);
}

export function DogCare(password: string): boolean {
    const is16Characters = password.length == 16;
    const firstChar = password.charAt(0);
    const isValid =
        is16Characters &&
        containsNumber(password) &&
        containsSpecial(password) &&
        containsLetter(password) &&
        !containsSpecial(firstChar) &&
        !containsNumber(firstChar);
    return isValid;
}
