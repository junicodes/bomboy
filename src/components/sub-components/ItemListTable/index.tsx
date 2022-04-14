import React from 'react'
import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import { MdCancel } from "@react-icons/all-files/md/MdCancel";
import { FcRating } from "@react-icons/all-files/fc/FcRating";
import { setItemList, setCurrentSort } from '../../../react-wrapper/redux/slices/itemListSlice';
import { useAppDispatch } from '../../../hooks/reduxhook'
import { sortObjectItem } from '../../../helpers/supportFunctions';



const ItemListTable = ({payload, onHandleDeleteItem, onHandleStartItem }: any) => {
    //hook
    const dispatch = useAppDispatch();

    const handleSort = (e:React.MouseEvent<HTMLDivElement, MouseEvent>, clickKey: string, clickType: string) => {
        e.preventDefault();

        if(payload.itemList.items) {
            const temp = [...payload.itemList.items];
            let key   = payload.current_sort.key;
            let order = payload.current_sort.order;
            //If the key is not the same with the redux state 
            key = clickKey;
            //If the key is the same with the redux state  
            if(key === clickKey) { order === 'asc' ? order = 'desc' : order = 'asc'}

            temp.sort(sortObjectItem(key, order, clickType));

            dispatch(setItemList(temp))
            dispatch(setCurrentSort({key, order, type: clickType}))
        }
    }
    
    return (
        <div data-testid="table-component" className="relative animate__animated animate__fadeIn">
            <table
                    data-testid="result-table"
                    className="min-w-full divide-y divide-gray-200 table-fixed"
                >
                <thead className="bg-gray-100">
                <tr>
                    <th
                    scope="col"
                    className="py-3 px-6 text-sm tracking-wider text-left font-bold uppercase"
                    >
                        <div onClick={(e) => handleSort(e, 'name', 'object')} data-testid="name-col" className="flex justify-start space-x-1  cursor-pointer">
                            <span>Name</span>
                            {payload.itemList?.items?.length > 0 && payload.current_sort.order === 'asc' && (
                                <FaArrowDown
                                    title="Click to sort in descending order"
                                    data-testid="name-icon"
                                    className={`mt-1.5 w-3 h-3 cursor-pointer ${payload.current_sort.key === 'name' ? 'text-pink-500': 'text-gray-300'}`}
                                />
                            )}
                            { payload.itemList?.items?.length > 0 && payload.current_sort.order === 'desc' && (
                                <FaArrowUp
                                    title="Click to sort in ascending order"
                                    data-testid="name-icon"
                                    className={`mt-1.5 w-3 h-3 cursor-pointer ${payload.current_sort.key === 'name' ? 'text-pink-500': 'text-gray-300'}`}
                                />
                            )}
                        </div>
                    </th>
                    <th
                    scope="col"
                    className="py-3 px-6 text-sm tracking-wider text-left font-bold uppercase"
                    >
                        <div onClick={(e) => handleSort(e, 'net', 'number')} data-testid="net-col" className="flex justify-start space-x-1 cursor-pointer">
                            <span>net</span>
                            { payload.itemList?.items?.length > 0 && payload.current_sort.order === 'asc'&& (
                                <FaArrowDown
                                    title="Click to sort in descending order"
                                    data-testid="net-icon"
                                    className={`mt-1.5 w-3 h-3 cursor-pointer ${payload.current_sort.key === 'net' ? 'text-pink-500': 'text-gray-300'}`}
                                />
                            )}
                            { payload.itemList?.items?.length > 0 && payload.current_sort.order === 'desc' && (
                                <FaArrowUp
                                title="Click to sort in ascending order"
                                data-testid="net-icon"
                                className={`mt-1.5 w-3 h-3 cursor-pointer ${payload.current_sort.key === 'net' ? 'text-pink-500': 'text-gray-300'}`}
                                />
                            )}
                        </div>
                    </th>
                    <th
                    scope="col"
                    className="py-3 px-6 text-sm tracking-wider text-left font-bold uppercase"
                    >
                        <div onClick={(e) => handleSort(e, 'tax', 'number')} data-testid="tax-col" className="flex justify-start space-x-1 cursor-pointer">
                            <span>Tax</span>
                            { payload.itemList?.items?.length > 0 && payload.current_sort.order === 'asc'&& (
                                <FaArrowDown
                                    title="Click to sort in descending order"
                                    data-testid="tax-icon"
                                    className={`mt-1.5 w-3 h-3 cursor-pointer ${payload.current_sort.key === 'tax' ? 'text-pink-500': 'text-gray-300'}`}
                                />
                            )}
                            { payload.itemList?.items?.length > 0 && payload.current_sort.order === 'desc' && (
                                <FaArrowUp
                                title="Click to sort in ascending order"
                                data-testid="tax-icon"
                                className={`mt-1.5 w-3 h-3 cursor-pointer ${payload.current_sort.key === 'tax' ? 'text-pink-500': 'text-gray-300'}`}
                                />
                            )}
                        </div>
                    </th>
                    <th
                    scope="col"
                    className="py-3 px-6 text-sm tracking-wider text-left font-bold uppercase"
                    >
                        <div className="flex justify-start space-x-1">
                            Gross
                        </div>
                    </th>
                    <th scope="col" className="p-4">
                       <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                { payload?.itemList?.items && (
                    payload.itemList.items.map((item: any, i: number) => (
                        <tr
                            key={item.id}
                            data-testid="result-column"
                            className="hover:bg-gray-100"
                        >
                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap text-left">
                            {item.name}
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">
                            {
                               new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(item.net)
                            }
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">
                            {
                               new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(item.tax)
                            }
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">
                            {
                               new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Number(item.net) + Number(item.tax))
                            }
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap flex items-center space-x-2">
                                <div onClick={(e) => onHandleDeleteItem(e, item.id)}>
                                    <MdCancel
                                        title="Delete Item"
                                        data-testid="delete-icon"
                                        className={`mt-1.5 w-4 h-4 cursor-pointer ${payload.current_sort.key === 'tax' ? 'text-pink-500': 'text-gray-300'}`}
                                    />
                                </div>
                                <div onClick={(e) => onHandleStartItem(e, item.id)}>
                                    <FcRating
                                        title="Delete Item"
                                        data-testid="delete-icon"
                                        className={`mt-1.5 w-4 h-4 cursor-pointer ${payload.current_sort.key === 'tax' ? 'text-pink-500': 'text-gray-300'}`}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
            <p data-testid="sort-checker" className='absolute -mt-6 hidden'>{payload.current_sort.key}</p>
        </div>
    )
}

export default ItemListTable;
 