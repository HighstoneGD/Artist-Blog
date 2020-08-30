import { ILogInInputs, ISignUpInputs } from '../common'

export const emailRE = /\S+@\S+\.\S+/
export const numberRE = /\d/
export const uppercaseRE = /.*[A-Z].*/
export const lowercaseRE = /.*[a-z].*/

export const validateLogInForm = (inputs: ILogInInputs) => {
    return !!inputs.email &&
    !!inputs.password &&
    emailRE.test(inputs.email)
    && inputs.email.length < 49
    && inputs.password.length > 6
}

export const validateSignUpForm = (inputs: ISignUpInputs) => {
    console.log(validateLogInForm(inputs), inputs.password.localeCompare(inputs.repeatPassword) === 0)
    return validateLogInForm(inputs)
    && inputs.password.localeCompare(inputs.repeatPassword) === 0
}