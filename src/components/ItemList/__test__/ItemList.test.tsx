import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store  } from '../../../react-wrapper/redux/store';
import { BrowserRouter } from "react-router-dom";
import ItemList from "..";

jest.mock("axios")


const Mock = () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <ItemList />
        </BrowserRouter>
      </Provider>
    )
}

let inputElement: HTMLInputElement;
let loginBtnElem: HTMLButtonElement;

describe('Item List Component Test', () => {
   
    beforeEach(() => {
        render(<Mock />);
    })
    it("Make sure component is rendered", () => {
        expect(screen.getByTestId("item-list-component")).toBeInTheDocument();
    });

})

