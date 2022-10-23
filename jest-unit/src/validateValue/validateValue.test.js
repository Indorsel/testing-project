const validateValue = require('./validateValue')

test('Валидация значения', () => {
  expect(validateValue(50)).toBe(true)
})

describe('validateValue', () => {
  test('Корректное значение', () => {
    expect(validateValue(50)).toBe(true)
  })
  test('Меньше конкретного', () => {
    expect(validateValue(-1)).toBe(false)
  })
  test('Пограничное минимальное значение', () => {
    expect(validateValue(0)).toBe(true)
  })
  test('Меньше конкретного', () => {
    expect(validateValue(100)).toBe(true)
  })
  test('Больше конкретного', () => {
    expect(validateValue(101)).toBe(false)
  })
})