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
			const cartItemIndex = cart.products.findIndex((product) => product.id === action.payload.id);

			if (cartItemIndex > -1) cart.products[cartItemIndex].quantity += action.payload.quantity;
			else cart.products.push(action.payload);

			cart.total += action.payload.quantity;
		},
		remove: (cart, action: PayloadAction<string>) => {
			cart.total -= cart.products.filter((product) => product.id === action.payload)[0].quantity;
			cart.products = cart.products.filter((product) => product.id !== action.payload);
		},
		empty: (cart) => {
			cart.products = [...initialCart.products];
			cart.total = initialCart.total;
		},
		changeQuantity: (cart, action: PayloadAction<Product>) => {
			let products: Product[];

			if (action.payload.quantity === 0)
				products = cart.products.filter((product) => product.id !== action.payload.id);
			else
				products = cart.products.map((product) => {
					if (product.id === action.payload.id) return action.payload;
					return product;
				});

			cart.total +=
				action.payload.quantity -
				cart.products.filter((product) => product.id === action.payload.id)[0].quantity;
			cart.products = products;
		},
	},
});

export const cartSelect = (state: RootState) => state.cart;
