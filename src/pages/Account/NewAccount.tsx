import React, { useEffect, useState } from 'react';
import { Divider, Row, Col, Button } from 'antd';
import Form from '../../components/Form';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const accOptions = [
	{ value: 'customer', label: 'Customer' },
	{ value: 'supplier', label: 'Supplier' },
];

const NewAccount = () => {
	const { type } = useParams();
	const [accType, setAccType] = useState<'customer' | 'supplier'>(type === 'supplier' ? 'supplier' : 'customer');
	const { register, handleSubmit } = useForm();
	useEffect(() => {
		if (type === 'customer') setAccType('customer');
		if (type === 'supplier') setAccType('supplier');
	}, [type]);
	const handleTypeChange = (value: 'supplier' | 'customer') => {
		setAccType(value);
	};
	const onSubmit = (data: any) => {
		// alert(JSON.stringify(data));
		console.log(data);
	};
	return (
		<div className="p-4 bg-white shadow">
			<Row gutter={16}>
				<Col span={8}>
					<Form
						id="account-type"
						type="select"
						label="Account Type"
						options={accOptions}
						defaultValue={type}
						value={accType}
						onChange={handleTypeChange}
						disabled
					/>
				</Col>
			</Row>
			<Divider orientation="left" plain>
				Business Detail
			</Divider>
			<Row gutter={16}>
				<Col span={6}>
					<Form id="business_name" register={register} label="Business Name" type="text" />
				</Col>
				<Col span={6}>
					<Form id="email" label="Email" register={register} type="text" />
				</Col>
				<Col span={6}>
					<Form id="phone" label="Phone/Mobile No." register={register} type="text" />
				</Col>
			</Row>
			<Divider orientation="left" plain>
				{accType === 'customer' ? "Customer's" : "Supplier's"} Detail
			</Divider>
			<Row gutter={[16, 16]}>
				<Col span={6}>
					<Form id="first_name" register={register} label="First Name" type="text" />
				</Col>
				<Col span={6}>
					<Form id="last_name" register={register} label="Last Name" type="text" />
				</Col>
				<Col span={6}>
					<Form id="secondary_email" register={register} label="Email" type="text" />
				</Col>
				<Col span={6}>
					<Form id="secondary_phone" register={register} label="Phone/Mobile No." type="text" />
				</Col>
				<Col span={6}>
					<Form id="address" register={register} label="Address" type="text" />
				</Col>
			</Row>
			<Row className="mt-8">
				<Col span={24}>
					<Button onClick={handleSubmit(onSubmit)}>Create</Button>
				</Col>
			</Row>
		</div>
	);
};

export default NewAccount;
