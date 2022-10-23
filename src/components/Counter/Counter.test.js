import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { renderTestApp } from "../../tests/helpers/renderTestApp"

describe('Counter test', () => {
  test('Router test', async () => {
      renderTestApp(null, {
        route: '/users',
        initialState: {
          counter: {
            value: 10
          }
        }
      })
  

    const incrementBtn = screen.getByTestId('increment-btn')
    expect(screen.getByTestId('value-title')).toHaveTextContent('0')
    userEvent.click(incrementBtn)
    expect(screen.getByTestId('value-title')).toHaveTextContent('1')
  })
})