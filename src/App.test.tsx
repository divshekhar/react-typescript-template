/** @jest-environment jsdom */
import { render } from '@testing-library/react'
import App from './App'

test('Should render root app in document', () => {
  render(<App />)
})
