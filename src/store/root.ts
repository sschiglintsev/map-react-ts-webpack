import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api, PickPoint} from "../api/api";

export const getAllPoints = createAsyncThunk(
    'root/getAllPoints', async () => {
        try {
            const resp = await api.getPoints()
            return resp
        } catch (e) {

        }
    }
)

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        points: [] as PickPoint[],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllPoints.fulfilled, (state, action) => {
            state.points = action.payload ? action.payload : []
        })
    }

})
export const root = rootSlice.reducer