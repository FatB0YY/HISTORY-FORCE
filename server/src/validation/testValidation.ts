import { param } from 'express-validator'

export const testValidation = [
  param('testId')
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage('Обязательное поле!')
    .toInt()
    .isNumeric()
    .withMessage('Только testId'),
]
