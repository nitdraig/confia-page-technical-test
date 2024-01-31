import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  test('renders contact titles', () => {
    render(<ContactForm onSubmit={() => {}} />);

    const contactTitle1 = screen.getByText('Contactanos');
    const contactTitle2 = screen.getByText('Comunícate con nuestros asesores');

    expect(contactTitle1).toBeDefined();
    expect(contactTitle2).toBeDefined();
  });
});
