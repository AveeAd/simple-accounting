import React from 'react';
import { Table } from 'antd';
import { IStock, STOCKS_TABLE_DATA } from '../../constants/dummy';
import { Link } from 'react-router-dom';

const Stocks = () => {
	const columns = [
		{
			key: 'sn',
			title: 'S.N.',
			render: (_: any, __: any, i: number) => i + 1,
		},
		{
			key: 'product_code',
			title: 'Product Code',
			dataIndex: 'product_code',
		},
		{
			key: 'name',
			title: 'Product Name',
			render: (_: any, { slug, name, description }: IStock) => (
				<div>
					<Link to={'/inventory/stock/' + slug} className="block text-lg font-medium">
						{name}
					</Link>
					{description && <small>{description}</small>}
				</div>
			),
		},
		{
			key: 'variant',
			title: 'Variant',
			dataIndex: 'variant',
		},
		{
			key: 'quantity',
			title: 'Quantity',
			render: (_: any, { quantity, unit }: IStock) => (
				<>
					<strong>{quantity}</strong>
					{' ' + unit}
				</>
			),
		},

		{
			key: 'status',
			title: 'Status',
			render: (_: any, { quantity }: IStock) => (
				<div className={['px-4 py-2 text-white font-bold', quantity > 0 ? 'bg-green-400' : 'bg-rose-400'].join(' ')}>
					{quantity > 0 ? 'In Stock' : 'Out of Stock'}
				</div>
			),
		},
	];

	return (
		<div className="">
			<Table columns={columns} dataSource={STOCKS_TABLE_DATA} />
		</div>
	);
};

export default Stocks;
