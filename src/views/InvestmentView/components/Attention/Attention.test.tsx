import React from 'react';
import { render, screen } from '@testing-library/react';
import Attention from '../Attention';

describe('Attention component', () => {
  test('renders text fields correctly', () => {
    render(<Attention />);

    const mainTitle = screen.queryByText('Atención al Inversionista');
    const subTitle = screen.queryByText(
      'Procedimientos Relativos a Quejas y Reclamos de los Fondos APV',
    );
    const listItem1 = screen.queryByText(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    );
    const listItem2 = screen.queryByText(
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    );
    const listItem3 = screen.queryByText(
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    );
    const listItem4 = screen.queryByText(
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    );

    expect(mainTitle).toBeDefined();
    expect(subTitle).toBeDefined();
    expect(listItem1).toBeDefined();
    expect(listItem2).toBeDefined();
    expect(listItem3).toBeDefined();
    expect(listItem4).toBeDefined();
  });
});
