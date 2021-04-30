import { createAsyncThunk } from '@reduxjs/toolkit';

export const userRequest = createAsyncThunk(
    'fetchUser',
    async arg => {
        const response = await fetch(`http://localhost:8080/api/users/${arg}`);
        return await response.json();
    }
);
