import { render, fireEvent } from '@testing-library/react';
import Counter from '../Counter';


describe('Counter tests', () => {
  test('counter increments and decrements after click', () => {
      // const amount = sum(1, 2, 3);
      // expect(amount).toBe(6);

      const container = render(<Counter />);
      let message = container.getByText(/counter value: 0/i);
      // const message = container.findByText(/counter value: 0/i);

      expect(message).toBeInTheDocument();

      const incrementButton = container.getByRole('button', {  name: /\+/i})
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);

      message = container.getByText(/counter value: 3/i);
      expect(message).toBeInTheDocument();

      container.debug();

  });
  // it('should .... /counter increments and decrements after click', () => {

  // });

  // it('counter increments after click', () => {

  // });
  // it('counter decrements after click', () => {

  // });
});