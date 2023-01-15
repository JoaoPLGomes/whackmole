import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Mole from '../../../src/components/Mole/Mole';

describe('Mole', () => {
  it('renders correct img depending on isUp prop', () => {
    const { rerender } = render(<Mole onHammerDown={jest.fn()} setDown={jest.fn()} isUp />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/WAM_Mole.png');

    rerender(<Mole onHammerDown={jest.fn()} setDown={jest.fn()} isUp={false} />);

    expect(img).toHaveAttribute('src', '/WAM_Hole.png');
  });

  it('calls setDown after 500ms + random time', () => {
    jest.useFakeTimers();

    const setDown = jest.fn();
    render(<Mole onHammerDown={jest.fn()} setDown={setDown} isUp />);

    expect(setDown).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(setDown).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    expect(setDown).toHaveBeenCalled();
  });

  it('clears timeout when isUp changes to false', () => {
    jest.useFakeTimers();

    const setDown = jest.fn();
    const { rerender } = render(<Mole onHammerDown={jest.fn()} setDown={setDown} isUp />);

    jest.advanceTimersByTime(500);
    expect(setDown).not.toHaveBeenCalled();

    rerender(<Mole onHammerDown={jest.fn()} setDown={setDown} isUp={false} />);

    jest.advanceTimersByTime(1000);
    expect(setDown).not.toHaveBeenCalled();
  });
  it('calls onHammerDown when img is clicked', () => {
    const onHammerDown = jest.fn();
    render(<Mole onHammerDown={onHammerDown} setDown={jest.fn()} isUp />);

    const img = screen.getByRole('img');
    img.click();

    expect(onHammerDown).toHaveBeenCalled();
  });
});
