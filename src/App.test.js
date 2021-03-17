import {render, screen} from '@testing-library/react';
import App from './App';
import React from "react";

test('renders login screen on start', () => {
    render(<App/>);
    const loginScreenTitle = screen.getByTitle(/Login Screen/i);
    expect(loginScreenTitle).toBeInTheDocument();
});
