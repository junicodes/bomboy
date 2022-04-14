
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxhook'
import { ItemListState, selectItemList, setItemList } from "../../react-wrapper/redux/slices/itemListSlice";


const Overview = () => {

    //Hooks
    const itemList = useAppSelector<ItemListState>(selectItemList);

    const [totalSum, setTotalSum] = useState<number>(0)
    const [averageSum, setAverageSum] = useState<number>(0)

    const totalSumFn = (obj: any) => {
        let sum = 0;

        for (const key in obj) {
         sum += Number(obj[key].net);
        }

        return sum;
    }

    useEffect(() => {
     
        if(itemList?.itemList?.items?.length > 0) {
            const result = totalSumFn(itemList.itemList.items)
            setTotalSum(result);
            setAverageSum(result/itemList.itemList.items.length)
        }

    }, [itemList.itemList.items])
    

    return (
        <div data-testid="overview-component" className="w-full h-full flex flex-col justify-start p-10" style={{background: '#eeeeee'}}>
           <div className="flex fle-row justify-start">
             <p>
              Overview
            </p>
           </div>

          <div className="flex flex-row justify-start mt-10 space-x-9">
            <p>
                Total Sum
            </p>
            <p className="">
                {
                    new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Number(totalSum))
                }
            </p>
          </div>
          <div className="flex flex-row justify-start mt-10 space-x-9">
            <p>
                Average
            </p>
            <p className="">
                {
                    new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Number(averageSum))
                }
            </p>
          </div>
          <div className="flex flex-row justify-start mt-10 space-x-9">
            <p>
                Total Item
            </p>
            <p className="">
                {itemList.itemList.items.length}
            </p>
          </div>
    
        </div>
    )
} 


export default Overview;