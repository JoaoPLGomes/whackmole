import Leaderboard from '@/pages/leaderboard';
import { render, screen, waitFor } from '@testing-library/react';

jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
  route: '/leaderboard',
  pathname: '',
  query: '',
  asPath: '',
  push: jest.fn(),
}));

describe('Leaderboard Page', () => {
  it('renders correct text', () => {
    render(<Leaderboard leaderboard={[]} />);
    const text = screen.getByText('Leaderboard');
    expect(text).toBeInTheDocument();
  });
  it('renders correct text when leaderboard is empty', () => {
    render(<Leaderboard leaderboard={[]} />);
    const text = screen.getByText('No scores yet');
    expect(text).toBeInTheDocument();
  });
  it('renders correct text when leaderboard is not empty', () => {
    render(<Leaderboard leaderboard={[{ name: 'test', score: 10 }]} />);
    const text = screen.getByText('test');
    expect(text).toBeInTheDocument();
  });
  it('slices leaderboard to 10', () => {
    const leaderboard = [
      { name: 'test', score: 10 },
      { name: 'test', score: 10 },
      { name: 'test', score: 10 },
      { name: 'test', score: 10 },
      { name: 'test', score: 10 },
      { name: 'test', score: 10 },
      { name: 'test', score: 10 },
      { name: 'test', score: 10 },
      { name: 'test', score: 10 },
      { name: 'test', score: 10 },
      { name: 'test', score: 10 },
    ];
    render(<Leaderboard leaderboard={leaderboard} />);
    const text = screen.getAllByText('test');
    expect(text).toHaveLength(10);
  });
  it('sorts leaderboard by score', () => {
    const leaderboard = [
      { name: 'test', score: 10 },
      { name: 'test', score: 20 },
      { name: 'test', score: 30 },
      { name: 'test', score: 40 },
      { name: 'test', score: 50 },
      { name: 'test', score: 60 },
      { name: 'test', score: 70 },
      { name: 'test', score: 80 },
      { name: 'test', score: 90 },
      { name: 'test', score: 100 },
    ];
    render(<Leaderboard leaderboard={leaderboard} />);
    const text = screen.getAllByTestId('score');
    expect(text[0]).toHaveTextContent('100');
    expect(text[9]).toHaveTextContent('10');
  });
});
