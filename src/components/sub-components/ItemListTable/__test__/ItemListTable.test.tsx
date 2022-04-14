import React from "react";
import ItemListTable from '..';

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { itemListReduxState } from "../../../../helpers/testPayload/itemListPayload";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { ResultProps } from "../../../Result/Interfaces";
import { store } from "../../../../react-wrapper/redux/store";



let nameCol: HTMLDivElement;
let netCol: HTMLDivElement;
let taxCol: HTMLDivElement;
let sortChecker: HTMLElement;
let iconElems: HTMLElement[];

const Mock = ({payload}: any ) => {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <ItemListTable payload={payload} />
        </BrowserRouter>
      </Provider>
    )
}

describe('Table Component Test', () => {

    it("Make sure component is rendered", () => {
        render(<Mock payload={itemListReduxState} />);
        expect(screen.getByTestId("table-component")).toBeInTheDocument();
    });

    it("When name row column is click it should change the sorting state to name", () => {
        render(<Mock payload={{...itemListReduxState, ...{
            current_sort: {key: 'name', order: 'asc', type: 'object'}}
        }} />);
        nameCol = screen.getByTestId('name-col');

        sortChecker =screen.getByTestId('sort-checker');

        fireEvent.click(nameCol);

        expect(sortChecker.textContent).toBe("name")
    })

    it("When Net row column is click it should change the sorting state to net", () => {
        render(<Mock payload={{...itemListReduxState, ...{
            current_sort: {key: 'net', order: 'asc', type: 'object'}
        } }} />);
        netCol = screen.getByTestId('net-col');

        sortChecker = screen.getByTestId('sort-checker');

        fireEvent.click(netCol);
        
        expect(sortChecker.textContent).toBe("net")
    })
    it("When tax row column is click it should change the sorting state to tax", () => {
        render(<Mock payload={{...itemListReduxState, ...{
            current_sort: {key: 'tax', order: 'asc', type: 'object'}
        } }} />);
        taxCol = screen.getByTestId('tax-col');

        sortChecker = screen.getByTestId('sort-checker');

        fireEvent.click(netCol);
        
        expect(sortChecker.textContent).toBe("tax")
    })
})

