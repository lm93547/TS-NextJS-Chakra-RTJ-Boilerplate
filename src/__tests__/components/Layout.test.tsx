import { fireEvent, render, screen } from '@testing-library/react';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import {ThemeWrapper} from '../testHelpers/themeWrapper';

describe("Layout UI test", ()=>{
    test("The Layout UI component renders without console errors", ()=>{
        render(<Layout>Test</Layout>, {wrapper: ThemeWrapper});
        const consoleError = jest.spyOn(global.console, 'error');
        expect(consoleError).toBeCalledTimes(0)
    });
    test("The Layout UI component renders the children correctly", ()=>{
        const {getByText} = render(<Layout>Test</Layout>, {wrapper: ThemeWrapper});
        expect(getByText("Test")).toBeTruthy()
    });
});