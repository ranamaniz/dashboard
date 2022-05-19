import { render, screen } from '@testing-library/react'
import React from 'react'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'
import { Router } from 'react-router-dom'
import MainContainer from '../MainContainer';

describe('MainContainer Component', () => {
  test('Navigation links in Drawer is present', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <MainContainer />
      </Router>
    )
    expect(screen.getByText('Project Info')).toBeInTheDocument()
    expect(screen.getByText('Datasets')).toBeInTheDocument()
    expect(screen.getByText('Grepsr Facility')).toBeInTheDocument()
  })
})

