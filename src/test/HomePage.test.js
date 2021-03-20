import React from 'react';
import HomePage from '../pages/Home/Home.page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe("App", () => {
  it("Render the section homepage", () => {
    render(<HomePage/>);
    expect(screen.getByTestId('homepage'));
  });

  it('renders headline', () => {
    render(<HomePage />);
    const linkElement = screen.getByText(/Hello stranger/i);
    expect(linkElement).toBeInTheDocument();
  });

});