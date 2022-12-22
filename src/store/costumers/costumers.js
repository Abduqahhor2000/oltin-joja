import {createSlice} from '@reduxjs/toolkit'

export const costumerInfo = createSlice({
    name:"costumers",
    initialState:{
        costumersData:[]
    },
    reducers:{
        costumersInfo:(state,action) => {
            state.costumersData = action.payload
        }
    }
}) 
export const {costumersInfo} = costumerInfo.actions;

export default costumerInfo.reducer