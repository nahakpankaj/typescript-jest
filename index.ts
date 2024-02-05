const validatedEmails: Set<string> = new Set();

export function isValidEmail(email: string): boolean {
  if (validatedEmails.has(email)) {
    return false;
  }

  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);

  if (isValid) {
    validatedEmails.add(email);
  }

  return isValid;
}

export function isValidPassword(password: string | null | undefined): boolean {
  if (password === null || password === undefined) {
    return false;
  }

  if (password.length < 3 || password.length > 10) {
    return false;
  }

  const specialCharacterRegex = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  if (!specialCharacterRegex.test(password)) {
    return false;
  }

  const capitalLetterRegex = /[A-Z]/;
  if (!capitalLetterRegex.test(password)) {
    return false;
  }
  return true;
}
