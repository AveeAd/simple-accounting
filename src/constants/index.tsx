import React from 'react';
import { MenuProps } from 'antd';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

export type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

export const SIDERMENUS: MenuItem[] = [
	getItem('Dashboard', 1, <PieChartOutlined />),
	getItem('Debit', 2, <DesktopOutlined />),
	getItem('Credit', 3, <DesktopOutlined />),
	getItem('Banks', 4, <UserOutlined />),
	getItem('Employees', 5, <TeamOutlined />),
	getItem('Reports', 6, <FileOutlined />, [
		getItem('Daily', 61),
		getItem('Weekly', 62),
		getItem('Monthly', 63),
		getItem('Yearly', 64),
	]),
];
