export const FIRST_NAME_REQUIRED = "This field is required";
export const LAST_NAME_REQUIRED = "This field is required";
export const EMAIL_REQUIRED = "This field is required";
export const INVALID_EMAIL = "Email is invalid";
export const PASSWORD_REQUIRED = "This field is required";
export const CONFIRM_PASSWORD_REQUIRED = "This field is required";
export const passwordRegex =
  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
export const pwdRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
export const INVALID_PASSWORD =
  "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number, One Special Case Character";
export const INVALID_CONFIRM_PASSWORD = "Passwords must match";
export const ONE_UPPERCASE_CHAR = /^(?=.*[A-Z])/;
export const ONE_LOWERCASE_CHAR = /^(?=.*[a-z])/;
export const ONE_NUMBER_CHAR = /^(?=.*[0-9])/;
export const ONE_SPECIAL_CHAR = /^(?=.*[!@#$%^&*])/;
export const CHAR_LENGTH = /^(?=.{8,})/;

export const PHONE_NO_REQUIRED = "This field is required";
export const phoneNoRegex =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const INVALID_PHONE_NO = "Phone No. is invalid";
export const DATE_OF_BIRTH_REQUIRED = "This field is required";
export const TERMS_AND_CONDITIONS_REQUIRED =
  "Please accept the Terms & Conditions";
