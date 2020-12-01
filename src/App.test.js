import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
//https://www.robinwieruch.de/react-testing-library
import App from './App';
 
describe('App', () => {
  test('renders App component', async () => {

       render(<App />) 

    //getBy returns an element or an error.
    //every time you are asserting that an element isn't there, use queryBy
    expect(screen.queryByText(/Signed in as/)).toBeNull();
 
  //  screen.debug();

    //The findBy search variant is used for asynchronous elements which will be there eventually.
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

  //  screen.debug();


  });
});

//you have used two assertive functions: toBeNull and toBeInTheDocument.

describe('App', () => {
  test('renders App component', async () => {
    render(<App />);
 
    // wait for the user to resolve
    // needs only be used in our special case
    await screen.findByText(/Signed in as/);
 
   // screen.debug();
   expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
 
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
 
   // screen.debug();
   expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
  });
});


describe('App', () => {
  test('renders App component', async () => {
    render(<App />);
 
    // wait for the user to resolve
    await screen.findByText(/Signed in as/);
 
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
 
    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
 
    expect(
      screen.getByText(/Searches for JavaScript/)
    ).toBeInTheDocument();
  });
});