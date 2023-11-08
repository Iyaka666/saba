export const isNumberAndOthers = new RegExp("^[0-9-]*$")
export const isPasswordValid = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{8,}$")
export const isOnlyText = new RegExp("^[a-zA-ZÁ-Úá-úüÜñÑ\s]+$")