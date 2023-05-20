import React from 'react';
import Layout from './layouts';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import Account from './pages/Account';
import NewAccount from './pages/Account/NewAccount';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						index
						element={
							<>
								<h5>Dashboard</h5>
							</>
						}
					/>
					<Route path="/account" element={<Account />}>
						<Route path="new/:type" element={<NewAccount />} />
					</Route>
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default App;

const PageNotFound = () => {
	const navigate = useNavigate();
	return (
		<div style={{ height: '100vh', width: '100vw', display: 'grid', placeContent: 'center' }}>
			<SettingOutlined style={{ fontSize: '4rem', marginBlockEnd: '1rem', color: 'gray' }} />
			<h4 style={{ textAlign: 'center', marginBlockEnd: '1rem' }}>Working on it</h4>
			<Button onClick={() => navigate('/')}>Go Back To Home</Button>
		</div>
	);
};
