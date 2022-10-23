const square = require('./square')

describe('square', () => {
  let mockValue
  // Перед каждым
  beforeEach(() => {
    // Добавить в бд напр
  })
  // Один раз перед всеми тестами
  beforeAll(() => {
  })
  test('Корректное значение', () => {
    // expect(square(2)).toEqual(4)
    // expect(square(2)).toBeLessThan(5)
    // expect(square(2)).toBeGreaterThan(3)
    // expect(square(2)).not.toBeUndefined()
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(2)
    expect(spyMathPow).toBeCalledTimes(1)
  })
// мок накапливает вызовы
  test('1 значение', () => {
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(1)
    expect(spyMathPow).toBeCalledTimes(0)
  })

  afterEach(() => {
    // мок накапливает вызовы поэтому очищаем после каждого теста
    jest.clearAllMocks()
  })
  afterAll(() => {

  })
})