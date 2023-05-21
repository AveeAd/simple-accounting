import React from 'react';
import { Table } from 'antd';
import { IProduct, PRODUCTS_TABLE_DATA } from '../../constants/dummy';
import { Link } from 'react-router-dom';

const Products = () => {
	const columns = [
		{
			key: 'sn',
			title: 'S.N.',
			render: (_: any, __: any, i: number) => i + 1,
		},
		{
			key: 'code',
			title: 'Code',
			dataIndex: 'code',
		},
		{
			key: 'name',
			title: 'Name',
			render: (_: any, { slug, name }: IProduct) => <Link to={'/inventory/product/' + slug}>{name}</Link>,
		},
		{
			key: 'unit',
			title: 'Unit',
			dataIndex: 'unit',
		},
		{
			key: 'description',
			title: 'Description',
			dataIndex: 'description',
		},
	];
	return (
		<div>
			<Table columns={columns} dataSource={PRODUCTS_TABLE_DATA} />
		</div>
	);
};

export default Products;
