export type Validator = (value: string) => undefined | string

export const required:Validator = (value) => value ? undefined : 'Обязательное поле'
export const withoutCyrillic:Validator = (value) => value.search(/[а-я]/i) === -1 ? undefined : 'Кириллица запрещена'

export const composeValidators = (...validators: Validator[]): Validator => (value) => validators.reduce((error: undefined | string, validator) => error || validator(value), undefined)
