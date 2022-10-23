import { getCounterValueSelector } from "./getCounterValue"

describe('getCounterValue', () => {
  test('work with empty state', () => {
    expect(getCounterValueSelector({})).toBe(0)
  })

  test('work with filled state', () => {
    expect(getCounterValueSelector({
      counter: {
        value: 100
      }
    })).toBe(100)
  })
})