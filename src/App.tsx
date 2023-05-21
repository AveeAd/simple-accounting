import React from 'react';
import Layout from './layouts';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Dashboard from './pages/Dashboard';

//Account
import Account from './pages/Account';
import AccountList from './pages/Account/Lists';
import NewAccount from './pages/Account/NewAccount';
import Inventory from './pages/Inventory';
import Stocks from './pages/Inventory/Stocks';
import Products from './pages/Inventory/Products';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />
					{/* Account */}
					<Route path="/account" element={<Account />}>
						<Route index element={<AccountList />} />
						<Route path=":slug" element={<>New Account</>} />
						<Route path="new/:type" element={<NewAccount />} />
						<Route path="*" element={<PageNotFound full={false} hasBack={false} />} />
					</Route>
					<Route path="/customer" element={<AccountList />} />
					<Route path="/supplier" element={<AccountList />} />
					<Route path="/bank" element={<AccountList />} />
					{/* Inventory */}
					<Route path="/inventory" element={<Inventory />}>
						<Route index element={<Stocks />} />
						<Route path="product" element={<Products />} />
						<Route path="*" element={<PageNotFound full={false} hasBack={false} />} />
					</Route>
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default App;
