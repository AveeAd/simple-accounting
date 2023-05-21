import React from 'react';
import { Button, Table } from 'antd';
import { ACCOUNT_TABLE_DATA, I_ACCOUNT_TABLE_DATA } from '../../constants/dummy';
import { Link } from 'react-router-dom';
import { createSlug } from '../../_helpers/methods';

const Lists = () => {
	const columns = [
		{
			key: 'name',
			title: 'Name',
			dataIndex: 'name',
			render: (name: string, { slug }: I_ACCOUNT_TABLE_DATA) => (
				<Link to={'/account/' + createSlug(name, true)}>{name}</Link>
			),
		},
		{
			key: 'email',
			title: 'Email',
			dataIndex: 'email',
		},
		{
			key: 'phone',
			title: 'Phone',
			dataIndex: 'phone',
		},
		{
			key: 'actions',
			title: 'Actions',
			// dataIndex: 'actions',
			render: (_: any, { slug }: I_ACCOUNT_TABLE_DATA) => (
				<>
					<Button type="link">Edit</Button>
					<Button type="link">Delete</Button>
				</>
			),
		},
	];
	return (
		<div>
			<Table columns={columns} dataSource={ACCOUNT_TABLE_DATA} />
		</div>
	);
};

export default Lists;
