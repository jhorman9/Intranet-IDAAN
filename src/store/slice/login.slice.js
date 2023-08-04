import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const login = createSlice({
	name: 'login',
    initialState: "login",
    reducers: {
        setLoginG: (state, action) => action.payload
    }
})

export const { setLoginG } = login.actions;

export default login.reducer;