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
	getItem(<StyledMenuLink to="/">Dashboard</StyledMenuLink>, 1, <PieChartOutlined />),
	getItem(<StyledMenuLink to="/debit">Debit</StyledMenuLink>, 2, <DesktopOutlined />),
	getItem(<StyledMenuLink to="/credit">Credit</StyledMenuLink>, 3, <DesktopOutlined />),
	getItem(<StyledMenuLink to="/debit">Banks</StyledMenuLink>, 4, <UserOutlined />),
	getItem(<StyledMenuLink to="/inventory">Inventory</StyledMenuLink>, 5, <TeamOutlined />),
	getItem(<StyledMenuLink to="/reports">Reports</StyledMenuLink>, 6, <FileOutlined />, [
		getItem(<StyledMenuLink to="/report/daily">Daily</StyledMenuLink>, 61),
		getItem(<StyledMenuLink to="/report/weekly">Weekly</StyledMenuLink>, 62),
		getItem(<StyledMenuLink to="/report/monthly">Monthly</StyledMenuLink>, 63),
		getItem(<StyledMenuLink to="/report/yearly">Yearly</StyledMenuLink>, 64),
	]),
];
