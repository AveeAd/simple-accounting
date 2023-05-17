import React from 'react';
import Layout from './layouts';
import { Routes, Route } from 'react-router-dom';
import Components from './pages/Components';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<>Hello world</>} />
					<Route path="/components" element={<Components />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
