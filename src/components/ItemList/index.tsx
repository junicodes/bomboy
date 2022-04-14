import React, { useEffect } from 'react'
import ItemListTable from '../sub-components/ItemListTable'
import { ToastNotify } from "../../helpers/toastNotify";
import { useAppSelector, useAppDispatch } from '../../hooks/reduxhook'
import { selectItemList, ItemListState } from "../../react-wrapper/redux/slices/itemListSlice";
import { GET_ITEM_LIST_DATA_ASYNC_ACTION } from "../../react-wrapper/redux/actions/itemList";

const ItemList = () => {

    //Hooks
    const itemList = useAppSelector<ItemListState>(selectItemList);
    const dispatch = useAppDispatch();

    //Effect hooks
    useEffect(() => {
      getItems()
    }, [])
    

    const getItems = async () => {
        //Simulate a temperary delay 
        await dispatch(GET_ITEM_LIST_DATA_ASYNC_ACTION());
    }

    return (
        <div data-testid="item-list-component">
           {
                (itemList?.itemList?.items?.length > 0) ? (
                    <ItemListTable payload={itemList} />
                ) :  (
                    <p className='text-center'>No Item List found, please referesh</p>
                )
           }
        </div>
    )
}

export default ItemList