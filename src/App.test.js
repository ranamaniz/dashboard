// app.test.js
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'

import '@testing-library/jest-dom'
import App from './App'

describe('App component', () => {
  test('First page rendering', async () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    )

    expect(screen.getByText('Project Info Page')).toBeInTheDocument()
  })
})



