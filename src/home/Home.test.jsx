import { MemoryRouter, BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from './Home'

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Home page', route)
  return render(ui, { wrapper: BrowserRouter })
}

describe('Home page', () => {
  beforeEach(() => {
    renderWithRouter(<Home />)
  })

  it('Should display timestamp', () => {
    expect(screen.getByText(/\d{2}:\d{2}:\d{2}/i)).toBeInTheDocument() //// untuk mensetting waktu
  })

  it('Should diplay get in touch button', () => {
    expect(screen.getByText(/get in touch/i)).toBeInTheDocument()     //// untuk menampilakn waktu
  })
})