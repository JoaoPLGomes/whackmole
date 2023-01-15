import Engine from '@/components/Engine/Engine';
import { render, screen, waitFor } from '@testing-library/react';
import * as timer from '@/hooks/useTimer';

jest.mock('@/hooks/useTimer');

jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
  route: '/',
  pathname: '',
  query: '',
  asPath: '',
  push: jest.fn(),
}));

describe('Engine', () => {
  it('renders correctly', () => {
    const { container } = render(<Engine />);
    expect(container).toMatchSnapshot();
  });
  it('renders correct text', () => {
    jest
      .spyOn(timer, 'useTimer')
      .mockImplementationOnce(() => ({ counter: 10, isRunning: false, setIsRunning: jest.fn(), resetTimer: jest.fn() }));
    const { rerender } = render(<Engine />);
    const text = screen.queryByText('Whack a Mole');
    expect(text).toBeInTheDocument();
    jest
      .spyOn(timer, 'useTimer')
      .mockImplementationOnce(() => ({ counter: 10, isRunning: true, setIsRunning: jest.fn(), resetTimer: jest.fn() }));
    rerender(<Engine />);
    const text2 = screen.queryByText('Whack a Mole');
    expect(text2).not.toBeInTheDocument();
  });
  it('some moles src should change after rerendering', async () => {
    jest
      .spyOn(timer, 'useTimer')
      .mockImplementation(() => ({ counter: 10, isRunning: false, setIsRunning: jest.fn(), resetTimer: jest.fn() }));
    const { rerender } = render(<Engine />);
    const moles = screen.getAllByRole('img');
    expect(moles.every((mole) => mole.getAttribute('src') === '/WAM_Hole.png')).toBeTruthy();
    jest
      .spyOn(timer, 'useTimer')
      .mockImplementation(() => ({ counter: 0, isRunning: true, setIsRunning: jest.fn(), resetTimer: jest.fn() }));
    rerender(<Engine />);
    await waitFor(() => expect(moles.some((mole) => mole.getAttribute('src') === '/WAM_Mole.png')).toBeTruthy());
  });
});
