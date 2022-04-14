
import { v4 } from "uuid"

export const newItemListPayload =  {
    status: 200,
    data: {
        incomplete_results: false,
        items: [
            {
                id: v4(),
                name: "Daniel",
                net: "2000.0",
                tax: "160",
            },
            {
                id: v4(),
                name: "James",
                net: "4000.0",
                tax: "360",
            },
            {
                id: v4(),
                name: "Victor",
                net: "6000.0",
                tax: "360",
            },
            {
                id: v4(),
                name: "Jerry",
                net: "3000.0",
                tax: "160",
            },
        ]
    }
};


export const itemListReduxState = {
    itemList: newItemListPayload.data,
    loading: [
        'GET_USER_LIST_DATA'
    ],
    per_page: 9,
    page: 1,
    current_sort: {key: 'login', order: 'asc', type: 'object'}
}

