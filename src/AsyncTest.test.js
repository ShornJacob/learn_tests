import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
import AsyncTest from './AsyncTest';
 
jest.mock('axios');

describe('AsyncTest', () => {
    test('fetches stories from an API and displays them', async () => {

        //object to return
      const stories = [
        { objectID: '1', title: 'Hello' },
        { objectID: '2', title: 'React' },
      ];
   
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: { hits: stories } })
      );
   
      render(<AsyncTest />);
   
      //click a button
      await userEvent.click(screen.getByRole('button'));
   
      //getBy, queryBy and findBy,which all can be associated with the search types (e.g. Text, Role, PlaceholderText, DisplayValue)
      //DOM already has implicit roles attached to HTML elements.
      const items = await screen.findAllByRole('listitem');
   
      expect(items).toHaveLength(2);
    });
  });