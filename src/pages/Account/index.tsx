import React from 'react';
import { Menu } from 'antd';
import { Outlet, useParams } from 'react-router-dom';
import { ACCOUNTMENUS } from '../../constants';

const Account = () => {
	const { type } = useParams();
	return (
		<>
			<Menu items={ACCOUNTMENUS} selectedKeys={[type ? type : '1']} mode="horizontal" />
			<Outlet />
		</>
	);
};

export default Account;
