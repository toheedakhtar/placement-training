import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signup = createAsyncThunk('auth/signup', async (data, {rejectWithValue})=>{
    try {
        const response = await axios.post('http://localhost:5000/auth/signup', data)
        return response;
    } catch (error) {
        rejectWithValue(error);
    }
})

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setLoading : (state) => {
            state.isLoading = true
        },
        setSucces : (state, action) => {
            state.isLoading = false,
            state.user = action.payload;
        },
        setError : (state, action) => {
            state.isLoading = false,
            state.error = action.payload;
        }
    }
})

export const { setLoading, setSucces, setError } = authSlice.actions;

// export const signup = (data) => {
//     return async (dispatch) => {
//         dispatch(setLoading());
//         try{
//             const response = await axios.post('https://localhost:5000/auth/signup', data)
//             dispatch(setSucces(response.data.data));
//         } catch (error){
//             dispatch(setError(error.response.data));
//         }
//     }
// }


export default authSlice.reducer;