import React from "react";
import Header from '..';

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe('Header Component Test', () => {
    beforeEach(() => {
        render(<Header headerText="Welcome" heroText="Lorem Text header" heroTextAuthor="Dared Mark" />);
    })
    
})

