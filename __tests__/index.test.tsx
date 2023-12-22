import HomePage from '@/app/page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('Home', () => {
    it('renders a heading', () => {
        render(<HomePage />);

        const heading = screen.getByRole('heading', {
            name: 'Welcome to the Singapore International Law Gazette',
        });

        expect(heading).toBeInTheDocument();
    });
});
