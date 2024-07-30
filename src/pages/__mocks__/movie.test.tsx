import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { MovieServiceImplement } from '../../service/movie'; 
import Home from '../home';

jest.mock('../../service/movie');

const mockGetDataAllMovie = MovieServiceImplement.prototype.getDataAllMovie as jest.Mock;

describe('MovieAll', () => {
  it('renders movie All correctly', async () => {
    mockGetDataAllMovie.mockResolvedValue({
      results: [{
        id: 123,
        title: "Test Movie", // Pastikan nama properti sesuai
        overview: "Test Overview",
        poster_path: "/poster.jpg",
        popularity: 0,
        release_date: ""
      }],
      total_pages: 1
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    );


    expect(screen.getByRole('status')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/Test Movie/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Test Overview/i)).toBeInTheDocument();
    const image = screen.getByAltText(/img-detail/)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src',"https://image.tmdb.org/t/p/original/poster.jpg")
  });
});
