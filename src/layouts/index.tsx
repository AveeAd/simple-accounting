import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Menu, theme, FloatButton } from 'antd';
import { SIDERMENUS } from '../constants';
import { PlusOutlined } from '@ant-design/icons';

//
const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
				<h1 style={{ color: 'white', padding: '1rem 0', textAlign: 'center' }}>Simple Accounting</h1>
				<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={SIDERMENUS} />
			</Sider>
			<Layout>
				<Header style={{ padding: 0, background: colorBgContainer }}></Header>
				<Content style={{ margin: '1rem' }}>
					<Outlet />
				</Content>
				<Footer style={{ textAlign: 'center' }}>Simple Accounting ©2023 Insufferable Retard</Footer>
			</Layout>
			<FloatButton.Group shape="circle" style={{ right: 24 }}>
				<FloatButton type="primary" icon={<PlusOutlined />} />
			</FloatButton.Group>
		</Layout>
	);
};

export default App;
