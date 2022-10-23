const mapToArrToStrings = require('./mapToArrToStrings')

describe('mapToArrToStrings', () => {
  test('Корректное значение', () => {
    expect(mapToArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
  })
  test('Разные значения', () => {
    expect(mapToArrToStrings([1, 2, 3, null, undefined, 'qweqwe'])).toEqual(['1', '2', '3'])
  })
  test('Пустой массив', () => {
    expect(mapToArrToStrings([])).toEqual([])
  })
  test('Отрицательный тест', () => {
    expect(mapToArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4])
  })
})