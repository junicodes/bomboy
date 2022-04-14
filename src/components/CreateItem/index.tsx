import { useState } from "react";
import { useAppSelector, useAppDispatch } from '../../hooks/reduxhook'
import { ItemListState, selectItemList, setItemList } from "../../react-wrapper/redux/slices/itemListSlice";
import { v4 } from "uuid"

const CreateItem = () => {
     //State
    const taxPercent: number = 16;

    const [value, setValue] = useState({
        name: '',
        tax: '',
        net: '',
        gross: 0,
    })


    const grossCaculate = (net: number) => {
        if(net > 0) {
            const calTaxPercent = taxPercent/100;

            let gross = (net)/(1-calTaxPercent)
            console.log(gross)

            //get the task
            const tax = Number(gross) - net;

            setValue({
                ...value,
                ...{
                    net: net.toString(),
                    tax: tax.toString(),
                    gross: Number(gross)
                }
            });
        }
    }

    //handler Function
    const handleValChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if(e.target.name === 'net') {
            //Calculate Gross Salary
            return grossCaculate(Number(e.target.value));
        }
        
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }
    const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setValue({
            name: '',
            tax: '',
            net: '',
            gross: 0
        })
    }

    //Hooks
    const itemList = useAppSelector<ItemListState>(selectItemList);
    const dispatch = useAppDispatch();


    const handleAddItem  = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if(value.name === '') {
            return false;
        }
        if(value.net === '') {
            return false;
        }
        //add key to the payload
        const newVal = {...value, ...{id: v4()}}
        
        dispatch(setItemList([...itemList.itemList.items, newVal]));
    }

    return (
        <div data-testid="create-item-component" className="flex flex-col item-center h-full">
            <form className="w-full h-4/6 animate__animated animate__fadeIn">
                <div className="mb-6">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-xl font-medium text-gray-900 text-left"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="bg-gray-50 border border-gray-100 focus:outline focus:outline-2 focus:outline-slate-400 text-gray-900 text-md rounded-md h-14 block w-full p-2.5"
                        placeholder="Enter a login to continue"
                        value={value.name}
                        onChange={(e) => handleValChange(e)}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="net"
                        className="block mb-2 text-xl font-medium text-gray-900 text-left"
                    >
                        Net
                    </label>
                    <input
                        type="text"
                        name="net"
                        className="bg-gray-50 border border-gray-100 focus:outline focus:outline-2 focus:outline-slate-400 text-gray-900 text-md rounded-md h-14 block w-full p-2.5"
                        placeholder="Enter a login to continue"
                        value={value.net}
                        onChange={(e) => handleValChange(e)}
                    />
                </div>
                <div className="flex flex-row justify-end items-center space-x-10 my-4">
                    <div>
                        <p>Tax</p>
                        <p>
                         { taxPercent },00&nbsp;%
                        </p>
                    </div>
                    <div>
                        <p>Gross</p>
                        <p>
                        {
                            new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Number(value.gross))
                        }&nbsp;
                        </p>
                    </div>
               </div>
               <div className="flex flex-row justify-end items-center space-x-4 ">
                    <button
                    type="submit"
                    onClick={handleReset}
                    className="text-gray-400 bg-white border-gray-400 border focus:ring-4 h-10 rounded-sm text-lg w-20 px-5 text-center"
                    >
                     Reset
                    </button>
                    <button
                    onClick={handleAddItem}
                    type="submit"
                    className="text-white bg-gray-400 focus:ring-4 h-10 rounded-sm text-lg w-20 px-5 text-center"
                    >
                     Add
                    </button>
               </div>
            </form>
        </div>
    )
}

export default CreateItem