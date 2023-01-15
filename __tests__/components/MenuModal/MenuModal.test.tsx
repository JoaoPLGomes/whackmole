import MenuModal from '@/components/MenuModal/MenuModal';
import { render, screen, waitFor } from '@testing-library/react';

const push = jest.fn();

jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
  route: '/',
  pathname: '',
  query: '',
  asPath: '',
  push,
}));

describe('MenuModal', () => {
  it('renders correct text', () => {
    render(<MenuModal counter={0} isRunning setIsRunning={jest.fn()} resetGame={jest.fn()} score={0} />);
    const text = screen.getByText('Whack a Mole');
    expect(text).toBeInTheDocument();
  });
  it('renders correct text when counter is 1', () => {
    render(<MenuModal counter={1} isRunning setIsRunning={jest.fn()} resetGame={jest.fn()} score={0} />);
    const text = screen.getByText('Continue');
    expect(text).toBeInTheDocument();
  });
  it('renders correct text when counter is 0', () => {
    render(<MenuModal counter={0} isRunning setIsRunning={jest.fn()} resetGame={jest.fn()} score={0} />);
    const text = screen.getByText('Your score is 0');
    expect(text).toBeInTheDocument();
  });

  it('calls setIsRunning when button is clicked', () => {
    const setIsRunning = jest.fn();
    render(<MenuModal counter={1} isRunning setIsRunning={setIsRunning} resetGame={jest.fn()} score={0} />);
    const button = screen.getByRole('button', { name: 'Continue/Start' });
    button.click();
    expect(setIsRunning).toHaveBeenCalled();
  });
  it('calls resetGame when button is clicked', () => {
    const resetGame = jest.fn();
    render(<MenuModal counter={1} isRunning setIsRunning={jest.fn()} resetGame={resetGame} score={0} />);
    const button = screen.getByRole('button', { name: 'NewGame' });
    button.click();
    expect(resetGame).toHaveBeenCalled();
  });
  it('submits form and redirects to leaderboard page', async () => {
    render(<MenuModal counter={0} isRunning setIsRunning={jest.fn()} resetGame={jest.fn()} score={0} />);
    const form = screen.getByRole('form', { name: 'form' }) as HTMLFormElement;
    form.submit();
    await waitFor(() => expect(push).toHaveBeenCalledWith('/leaderboard'));
  });
});
