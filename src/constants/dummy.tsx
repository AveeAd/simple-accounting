import React from 'react';
//

export interface I_ACCOUNT_TABLE_DATA {
	slug: React.Key;
	name: string;
	email: string;
	phone: string | number;
}
export const ACCOUNT_TABLE_DATA: I_ACCOUNT_TABLE_DATA[] = [
	{
		slug: 'abc-co.',
		name: 'ABC Co.',
		email: 'abc@email.com',
		phone: 1231231231,
	},
	{
		slug: 'ijk-groceries',
		name: 'IJK Groceries',
		email: 'ijk@email.com',
		phone: 1231231231,
	},
	{
		slug: 'john-furnitures',
		name: 'John Furnitures',
		email: 'john@email.com',
		phone: 1231231231,
	},
	{
		slug: 'mary-motors',
		name: 'Mary Motors',
		email: 'mary@email.com',
		phone: 1231231231,
	},
	{
		slug: 'sam-pharmeceuticals',
		name: 'Sam Pharmaceuticals',
		email: 'sam@email.com',
		phone: 1231231231,
	},
];

export interface IStock {
	slug: string;
	product_code: string;
	name: string;
	variant: string;
	quantity: number;
	unit: string;
	description?: string;
}

export const STOCKS_TABLE_DATA: IStock[] = [
	{
		slug: 'coca-cola',
		product_code: '#1234',
		name: 'Coca Cola',
		variant: '1.5L',
		quantity: 200,
		unit: 'pcs',
		description: 'coca cola is a famous drink',
	},
	{
		slug: 'wai-wai',
		product_code: '#w123',
		name: 'Wai Wai',
		variant: 'small',
		quantity: 20,
		unit: 'cartonx30pcs',
		description: 'wai wai is famous instant noodle',
	},
	{
		slug: 'oreo',
		product_code: '#o123',
		name: 'Oreo',
		variant: 'small',
		quantity: 0,
		unit: 'pcs',
		description: 'Oreo is a biscuit',
	},
];

export interface IProduct {
	slug: string;
	code: string;
	name: string;
	unit: string;
	variant: string;
	description?: string;
}

export const PRODUCTS_TABLE_DATA: IProduct[] = [
	{
		slug: 'coca-cola',
		code: '#1234',
		name: 'Coca Cola',
		variant: '1.5L',
		unit: 'pcs',
		description: 'coca cola is a famous drink',
	},
	{
		slug: 'wai-wai',
		code: '#w123',
		name: 'Wai Wai',
		variant: 'small',
		unit: 'cartonx30pcs',
		description: 'wai wai is famous instant noodle',
	},
	{
		slug: 'oreo',
		code: '#o123',
		name: 'Oreo',
		variant: 'small',
		unit: 'pcs',
		description: 'Oreo is a biscuit',
	},
];
