import Search from './Search'
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
    test('calls the onChange callback handler', () => {
      const onChange = jest.fn();
   
      render(
        <Search value="" onChange={onChange}>
          Search:
        </Search>
      );
   
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
   
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('Search', () => {
    test('calls the onChange callback handler', async () => {
      const onChange = jest.fn();
   
      render(
        <Search value="" onChange={onChange}>
          Search:
        </Search>
      );
   
      await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
   
      //userEvent triggers it for every key stroke: Javascript has 10 keystrokes
      expect(onChange).toHaveBeenCalledTimes(10);
    });
  });

  //React Testing Library encourages you to test your React components not too much in isolation, but in integration (integration test) with other components. 
  //Only this way you can actually test whether state changes were applied in the DOM and whether side-effects took effect.