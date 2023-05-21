import React, { FC } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SettingOutlined } from '@ant-design/icons';

interface IPageNotFound {
	hasBack?: boolean;
	full?: boolean;
}

const PageNotFound: FC<IPageNotFound> = ({ hasBack = true, full = true }) => {
	const navigate = useNavigate();
	return (
		<div
			style={{
				height: full ? '100vh' : '100%',
				width: full ? '100vw' : '100%',
				paddingBlock: '50px',
				display: 'grid',
				placeContent: 'center',
			}}
		>
			<SettingOutlined style={{ fontSize: '4rem', marginBlockEnd: '1rem', color: 'gray' }} />
			<h4 style={{ textAlign: 'center', marginBlockEnd: '1rem' }}>Working on it</h4>
			{hasBack && <Button onClick={() => navigate('/')}>Go Back To Home</Button>}
		</div>
	);
};

export default PageNotFound;
