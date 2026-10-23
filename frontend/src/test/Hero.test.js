import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';   // ✅ FIXED
import Hero from "../landing_page/home/Hero";

describe('Hero Component', () => {

    test('renders hero image', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Zerodha investment platform");

        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });

    test('signup call to action opens the signup page', () => {
        render(<Hero />);
        expect(screen.getByRole("link", { name: "Signup Now" })).toHaveAttribute("href", "/signup");
    });

});
