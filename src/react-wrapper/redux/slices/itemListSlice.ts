import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { removeLoadingState, sortObjectItem} from "../../../helpers/supportFunctions";
import { GET_ITEM_LIST_DATA_ASYNC_ACTION } from "../actions/itemList";
import { RootState } from "../store";


export interface ItemListPayloadState {
  items: object[] | null
}

export interface ItemListState {
  itemList: {
    items: any
  },
  loading: string[]
  per_page: number,
  page: number
  current_sort: {
    key: string,
    order: string
    type: string
  }
}

//Create a reusable itemList default payload
export const itemListDefaultPayload = {
  items: null
}

export const initialState = {
  itemList: itemListDefaultPayload,
  loading: [],
  per_page: 9,
  page: 1,
  current_sort: {key: 'name', order: 'asc', type: 'object'}
} as ItemListState;


export const itemListSlice = createSlice({
  name: 'itemList',
  initialState,
  
  reducers: {
    setItemList: (state, action: PayloadAction<object[]>) => {
      state.itemList.items = action.payload;
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },

    setCurrentSort: (state, action: PayloadAction<{ key: string, order: string, type: string}>) => {
      state.current_sort = action.payload;
    },

    resetItemList: (state) => {
      //Format the itemlist state to default state
      state.itemList = itemListDefaultPayload as ItemListPayloadState;
    }
  },

  extraReducers: (builder) => {
    builder
    .addCase(GET_ITEM_LIST_DATA_ASYNC_ACTION.pending, (state) => {
      state.loading = ['GET_ITEM_LIST_DATA'];
    })
    .addCase(GET_ITEM_LIST_DATA_ASYNC_ACTION.fulfilled, (state, action) => {
      state.loading = removeLoadingState(state.loading, 'GET_ITEM_LIST_DATA')

      if( action.payload.status === 200 ) {
        //Sort payload with selected column by item
        action.payload.data.items.sort(sortObjectItem(state.current_sort.key, state.current_sort.order, state.current_sort.type));
        state.itemList = action.payload.data
      };

    });
  }

});

// Selectors
export const selectItemList = (state: RootState) => state.itemList;

// Reducers and actions
export const { setItemList, resetItemList, setPage, setCurrentSort} = itemListSlice.actions;

export default itemListSlice.reducer;