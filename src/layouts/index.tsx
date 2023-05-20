import React, { useState, useMemo } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Layout, Menu, theme, FloatButton, Breadcrumb } from 'antd';
import { SIDERMENUS } from '../constants';
import { PlusOutlined } from '@ant-design/icons';
import AddModal from '../components/AddModal';

//
const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [openAddModal, setOpenAddModal] = useState(false);
	const location = useLocation();
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	function handleCloseModal() {
		setOpenAddModal(false);
	}

	const breadcrumbItems = useMemo(() => {
		let routes = location.pathname.split('/');
		routes = routes.filter((route) => route !== '');
		let items = [];
		items = routes.map((route, index, arr) => {
			let path = [...arr];
			path.splice(index + 1);
			return {
				title: <Link to={'/' + path.join('/')}>{route.toUpperCase()}</Link>,
			};
		});

		// items = routes.map((route) => ({ title: <Link to={'/' + route}>{route.toUpperCase()}</Link> }));
		// console.log(routes);
		return items;
	}, [location]);

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
				<h1 style={{ color: 'white', padding: '1rem 0', textAlign: 'center' }}>Simple Accounting</h1>
				<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={SIDERMENUS} />
			</Sider>
			<Layout>
				<Header style={{ background: colorBgContainer }} className="flex items-center px-8 font-bold">
					<Breadcrumb separator=">" items={breadcrumbItems} />
				</Header>
				<Content style={{ margin: '1rem' }}>
					<Outlet />
				</Content>
				<Footer style={{ textAlign: 'center' }}>Simple Accounting ©2023 Insufferable Retard</Footer>
			</Layout>
			<FloatButton.Group shape="circle" style={{ right: 24 }}>
				<FloatButton type="primary" icon={<PlusOutlined />} onClick={() => setOpenAddModal(true)} />
			</FloatButton.Group>
			<AddModal openModal={openAddModal} handleClose={handleCloseModal} />
		</Layout>
	);
};

export default App;
