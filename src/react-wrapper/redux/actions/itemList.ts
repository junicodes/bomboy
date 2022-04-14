import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ITEM_LIST_DATA } from "../../../helpers/routes";
import { axiosWrapper } from "../../../helpers/axios";

export const GET_ITEM_LIST_DATA_ASYNC_ACTION = createAsyncThunk(
    "GET_ITEM_LIST_DATA",
    async () => {
        const res = await axiosWrapper("get", GET_ITEM_LIST_DATA());
        return res;
    }
);