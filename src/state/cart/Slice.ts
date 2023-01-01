import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type Product = {
	id: string;
	quantity: number;
};

export type CartState = {
	products: Product[];
	total: number;
};

const initialCart: CartState = {
	products: [],
	total: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCart,
	reducers: {
		add: (cart, action: PayloadAction<Product>) => {
			cart.products.push(action.payload);
			cart.total += action.payload.quantity;
		},
		remove: (cart, action: PayloadAction<string>) => {
			cart.products = cart.products.filter((product) => product.id !== action.payload);
			cart.total -= cart.products.filter((product) => product.id === action.payload)[0].quantity;
		},
		changeQuantity: (cart, action: PayloadAction<Product>) => {
			cart.products = cart.products.map((product) => {
				if (product.id === action.payload.id) return action.payload;
				return product;
			});
			cart.total +=
				action.payload.quantity -
				cart.products.filter((product) => product.id === action.payload.id)[0].quantity;
		},
	},
});

export const selectCart = (state: RootState) => state.cart;
