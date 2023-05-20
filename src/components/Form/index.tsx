import React, { FC, Key, useMemo } from 'react';
import { Input, Select } from 'antd';

interface IForm {
	id: Key;
	label?: string;
	type?: 'text' | 'number' | 'email' | 'select';
	containerClassName?: string;
	options?: { label: string; value: string | number }[];
	defaultValue?: string;
	register?: any;
	validations?: any;
	[key: string]: any;
}

const Form: FC<IForm> = ({
	id,
	label,
	type = 'text',
	containerClassName = '',
	options = [],
	defaultValue = '',
	register,
	validations = {},
	...rest
}) => {
	const element = useMemo(() => {
		const registration = register ? { ...register(id, validations) } : {};
		switch (type) {
			case 'select':
				return <Select {...registration} className="block" options={options} defaultValue={defaultValue} {...rest} />;
			case 'text':
			default:
				return <Input defaultValue={defaultValue} {...registration} {...rest} />;
		}
	}, [type, rest, options, defaultValue, register, id, validations]);
	return (
		<div className={['space-y-2', containerClassName].join(' ')}>
			{label && (
				<label htmlFor={String(id)} className="font-medium">
					{label}
				</label>
			)}
			{element}
		</div>
	);
};

export default Form;
