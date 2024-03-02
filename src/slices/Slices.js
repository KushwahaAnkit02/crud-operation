import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, fetchCountryDtails, fetchUsers, fetchUsersById, postDataById } from "../ApiUtils/userApi";



export const postDetail = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
    const response = await createUser(data)
    try {
        const result = await response.json()
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const showUser = createAsyncThunk('showUser', async (rejectWithValue) => {
    const response = await fetchUsers()

    try {
        const result = await response.json();
        return result
    } catch (error) {
        return rejectWithValue(error);
    }
});
export const getUserById = createAsyncThunk('updateUser', async (id, { rejectWithValue }) => {
    const response = await fetchUsersById(id)
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return rejectWithValue(error);
    }
});
export const updateUser = createAsyncThunk('updateUser', async (details, { rejectWithValue }) => {
    const response = await postDataById(details)
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteSingleUser = createAsyncThunk('updateUser', async (id, { rejectWithValue }) => {
    const response = await deleteUser(id)
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const fetchCountries = createAsyncThunk('fetchContries', async (rejectWithValue) => {
    const response = await fetchCountryDtails()
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const slices = createSlice({
    name: "Users",
    initialState: {
        users: [],
        user: {},
        countries: [],
        loading: false,
        errors: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postDetail.pending, (state) => {
                state.loading = true;
            })
        builder
            .addCase(postDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload)
            })
        builder
            .addCase(postDetail.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
        builder
            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
        builder
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload
            })
        builder
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
        builder
            .addCase(getUserById.pending, (state) => {
                state.loading = true;
            })
        builder
            .addCase(getUserById.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload
            })
        builder
            .addCase(getUserById.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.loading = true;
            })
        builder
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.countries = action.payload
            })
        builder
            .addCase(fetchCountries.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })



    }




})

export const { readUser } = slices.actions
