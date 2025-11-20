
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validateAge(age) {
    return typeof age === 'number' && age >= 0 && age <= 120;
}

export function validateName(name) {
    return typeof name === 'string' && name.trim().length > 0;
}

