import { MemoryRouter, BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import axios from 'axios'

import News from './News'

jest.mock('axios')

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'News page', route)
  return render(ui, { wrapper: BrowserRouter })
}

describe('News', () => {
  it('Should fetch news data and display them', async () => {
    const data = [
      {
        source: {
          id: 'the-wall-street-journal',
          name: 'The Wall Street Journal'
        },
        author: 'Howard Husock',
        title:
          'Tech Billionaires Ignore the Philanthropy of Things - The Wall Street Journal',
        description:
          'Donors can do more by investing in amenities that are available to all, not nebulous social causes.',
        url: 'https://www.wsj.com/articles/tech-billionaires-philanthropy-charity-silicon-civic-little-island-high-mile-park-donation-11631890975',
        urlToImage: 'https://images.wsj.net/im-402222/social',
        publishedAt: '2021-09-17T21:46:00Z',
        content:
          'We live in an age of megaphilanthropy. Big name Silicon Valley billionaires channel their fortunes into social causes ranging from poverty and healthcare to education and gender equality. Two philant… [+837 chars]'
      }
    ]

    axios.get.mockImplementationOnce((url) => {
      console.log(url)
      return Promise.resolve({ data: { articles: data } })
    })

    renderWithRouter(<News />)

    expect(await screen.findByText(/Howard Husock/i)).toBeInTheDocument()
  })
})