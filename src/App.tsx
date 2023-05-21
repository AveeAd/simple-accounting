import React from 'react';
import Layout from './layouts';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Dashboard from './pages/Dashboard';

//Account
import Account from './pages/Account';
import AccountList from './pages/Account/Lists';
import NewAccount from './pages/Account/NewAccount';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="/account" element={<Account />}>
						<Route index element={<AccountList />} />
						<Route path=":slug" element={<>New Account</>} />
						<Route path="new/:type" element={<NewAccount />} />
					</Route>
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default App;
