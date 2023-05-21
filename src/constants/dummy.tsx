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
		slug: 2,
		name: 'IJK Groceries',
		email: 'ijk@email.com',
		phone: 1231231231,
	},
	{
		slug: 3,
		name: 'John Furnitures',
		email: 'john@email.com',
		phone: 1231231231,
	},
	{
		slug: 4,
		name: 'Mary Motors',
		email: 'mary@email.com',
		phone: 1231231231,
	},
	{
		slug: 5,
		name: 'Sam Pharmaceuticals',
		email: 'sam@email.com',
		phone: 1231231231,
	},
];
