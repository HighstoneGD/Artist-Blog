import { ISignUpForm } from '../common/SignUpForm'
import { ILogInForm } from '../common/LogInForm'

export const emailRE = /\S+@\S+\.\S+/
export const numberRE = /\d/
export const uppercaseRE = /.*[A-Z].*/
export const lowercaseRE = /.*[a-z].*/

export const validateLogInForm = (inputs: ILogInForm) => {
    return !!inputs.email &&
    !!inputs.password &&
    emailRE.test(inputs.email)
    && inputs.email.length < 49
    && inputs.password.length > 6
}

export const validateSignUpForm = (inputs: ISignUpForm) => {
    console.log(validateLogInForm(inputs), inputs.password.localeCompare(inputs.repeatPassword) === 0)
    return validateLogInForm(inputs)
    && inputs.password.localeCompare(inputs.repeatPassword) === 0
}