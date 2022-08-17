import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api, PickPoint} from "../api/api";
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";

type currentPointType = {
    latitude: number,
    longitude: number,
    address:string,
}

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
        currentPoint: {} as currentPointType,
    },
    reducers: {
        addCurrentPoint: (state, action: PayloadAction<{ latitude: number, longitude: number, address:string}>) => {
            state.currentPoint = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllPoints.fulfilled, (state, action) => {
                state.points = action.payload ? action.payload : []
            })
    }

})

export const root = rootSlice.reducer
export const {addCurrentPoint} = rootSlice.actions