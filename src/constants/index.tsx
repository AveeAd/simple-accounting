import React from 'react';
import { MenuProps } from 'antd';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { StyledMenuLink } from '../components/ui/StyledComponents';

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
	getItem(<StyledMenuLink to="/">Dashboard</StyledMenuLink>, '1', <PieChartOutlined />),
	getItem(<StyledMenuLink to="/customer">Customers</StyledMenuLink>, '2', <DesktopOutlined />),
	getItem(<StyledMenuLink to="/supplier">Suppliers</StyledMenuLink>, '3', <DesktopOutlined />),
	getItem(<StyledMenuLink to="/bank">Banks</StyledMenuLink>, '4', <UserOutlined />),
	getItem(<StyledMenuLink to="/inventory">Inventory</StyledMenuLink>, '5', <TeamOutlined />),
	getItem(<StyledMenuLink to="/reports">Reports</StyledMenuLink>, '6', <FileOutlined />, [
		getItem(<StyledMenuLink to="/report/daily">Daily</StyledMenuLink>, '61'),
		getItem(<StyledMenuLink to="/report/weekly">Weekly</StyledMenuLink>, '62'),
		getItem(<StyledMenuLink to="/report/monthly">Monthly</StyledMenuLink>, '63'),
		getItem(<StyledMenuLink to="/report/yearly">Yearly</StyledMenuLink>, '64'),
	]),
];

export const ACCOUNTMENUS: MenuItem[] = [
	getItem(<StyledMenuLink to="/account">Accounts</StyledMenuLink>, '1', null),
	getItem(<StyledMenuLink to="/account/new/customer">New Customer</StyledMenuLink>, 'dr', null),
	getItem(<StyledMenuLink to="/account/new/supplier">New Suppliers</StyledMenuLink>, 'cr', null),
];

export const INVENTORYMENUS: MenuItem[] = [
	getItem(<StyledMenuLink to="/inventory">Inventory</StyledMenuLink>, '1'),
	getItem(<StyledMenuLink to="/inventory/product">Products</StyledMenuLink>, 'product'),
];
