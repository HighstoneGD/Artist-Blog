const emailRE = /\S+@\S+\.\S+/

export const validateEmail = (email: string) => {
    return email === '' || emailRE.test(email)
}

export const validateForm = (form: { email: string, password: string }) => {
    return validateEmail(form.email) && form.password !== ''
}