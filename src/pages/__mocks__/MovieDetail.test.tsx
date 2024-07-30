import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MovieDetail from '../MovieDetail/movieDetail';
import { MovieServiceImplement } from '../../service/movie'; 

jest.mock('../../service/movie');

const mockGetMovieDetail = MovieServiceImplement.prototype.getMovieDetail as jest.Mock;

describe('MovieDetail', () => {
  it('renders movie details correctly', async () => {
    mockGetMovieDetail.mockResolvedValue({
      id: 123,
      title: "Test Movie",
      overview: "Test Overview",
      genres: [{ id: 1, name: "Action" }],
      adult: false,
      backdrop_path: null,
      genre_ids: [1],
      original_language: "en",
      original_title: "Test Movie",
      popularity: 0,
      poster_path: null,
      release_date: "",
      video: false,
      vote_average: 0,
      vote_count: 0
    });

    render(
      <MemoryRouter initialEntries={['/123']}>
        <Routes>
          <Route path="/:id" element={<MovieDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/test movie/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/test overview/i)).toBeInTheDocument();
    expect(screen.getByText(/action/i)).toBeInTheDocument();
  });

  
});
