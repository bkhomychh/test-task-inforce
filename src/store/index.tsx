import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: {} });

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
