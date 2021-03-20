import React from 'react';
import '@testing-library/jest-dom';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Toggle from '../components/CustomInputs/Toggle';
import Nav from '../components/Nav';

describe('Nav tests', () => {
  afterEach(cleanup);

  describe('Ensure components get rendered', () => {
    it('Nav Header Wrapper', () => {
      render(<Nav />);
      expect(screen.getByTestId('homepage')).toBeInTheDocument();
    });

    it('Left Nav Wrapper', () => {
      render(<Nav />);
      expect(screen.getByTestId('leftNav')).toBeInTheDocument();
    });

    it('Hamburger Menu Icon', () => {
      render(<Nav />);
      expect(screen.getByTestId('hamburger')).toBeInTheDocument();
    });

    it('Search Input', () => {
      render(<Nav />);
      expect(screen.getByTestId('searchTextWrapper')).toBeInTheDocument();
    });

    it('Right Nav Wrapper', () => {
      render(<Nav />);
      expect(screen.getByTestId('rightNav')).toBeInTheDocument();
    });

    it('Dark mode toggle', () => {
      render(<Nav />);
      expect(screen.getByTestId('toggleDarkMode')).toBeInTheDocument();
    });

    it('Login Button', () => {
      render(<Nav />);
      expect(screen.getByTestId('loginBtn')).toBeInTheDocument();
    });
  });

  describe('Toggle component check', () => {
    it('Toggle label onChange', () => {
      const {queryByLabelText, getByLabelText} = render(
        <Toggle labelOn="🌙" labelOff="☀️" />
      );
  
      expect(queryByLabelText(/☀️/i)).toBeTruthy();
      fireEvent.click(getByLabelText(/☀️/i));
      expect(queryByLabelText(/🌙/i)).toBeTruthy();
    });

    // it('Toggle UI changes when user clicks on it', () => {
    //   const {getByLabelText} = render(<Toggle labelOn="🌙" labelOff="☀️" />);
    //   expect(toJSON()).toMatchSnapshot();
  
    //   fireEvent.click(getByLabelText(/☀️/i));
    //   expect(toJSON()).toMatchSnapshot();
  
    //   fireEvent.click(getByLabelText(/🌙/i));
    //   expect(toJSON()).toMatchSnapshot();
    // });
  });
  
});
