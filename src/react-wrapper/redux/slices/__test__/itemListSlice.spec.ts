import itemListReducer, {
    ItemListState,
    itemListDefaultPayload,
    setItemList,
    initialState
} from '../itemListSlice';
import { axiosWrapper } from '../../../../helpers/axios';
import { GET_ITEM_LIST_DATA } from "../../../../helpers/routes";
import { newItemListPayload } from "../../../../helpers/testPayload/itemListPayload";
import axios from 'axios';
jest.mock("axios")


describe('Userlist reducer test', () => {

  const newState: ItemListState = {
    itemList: itemListDefaultPayload,
    loading: [
      'GET_ITEM_LIST_DATA'
    ],
    per_page: 9,
    page: 2,
    current_sort: {key: 'login', order: 'asc', type: 'object'}
  }

  it('It should handle default state', () => {
    expect(itemListReducer(undefined, { type: 'unknown'})).toEqual(initialState)
  })

  it('It should add new user list payload to state after api call', async () => {
    //Firstly we mock the api request

    (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(newItemListPayload))
    
    const payload = await axiosWrapper("get", GET_ITEM_LIST_DATA());

    const actual = itemListReducer(newState, setItemList(payload.data.items));

    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(actual.itemList.items).toEqual(payload.data.items)
  })

})