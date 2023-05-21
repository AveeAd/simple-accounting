import React from 'react';
import { Menu } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { INVENTORYMENUS } from '../../constants';

const Inventory = () => {
	const location = useLocation();
	return (
		<>
			<Menu
				items={INVENTORYMENUS}
				selectedKeys={[location.pathname.split('/').includes('product') ? 'product' : '1']}
				mode="horizontal"
			/>
			<Outlet />
		</>
	);
};

export default Inventory;
