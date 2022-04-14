import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store  } from '../../../react-wrapper/redux/store';
import { BrowserRouter } from "react-router-dom";
import Overview from "..";

jest.mock("axios")


const Mock = () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Overview />
        </BrowserRouter>
      </Provider>
    )
}

let inputElement: HTMLInputElement;
let loginBtnElem: HTMLButtonElement;

describe('Overview Component Test', () => {
   
    beforeEach(() => {
        render(<Mock />);
    })
    it("Make sure component is rendered", () => {
        expect(screen.getByTestId("overview-component")).toBeInTheDocument();
    });

})

