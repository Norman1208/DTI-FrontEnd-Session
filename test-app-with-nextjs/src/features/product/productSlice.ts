import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        return (await response.json()) as Product[];
    }
)