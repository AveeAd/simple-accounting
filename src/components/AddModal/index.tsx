import React, { memo } from 'react';
import { Modal, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

interface IAddModal {
	openModal: boolean;
	handleClose: () => void;
}

const AddModal: React.FC<IAddModal> = ({ openModal, handleClose }) => {
	return (
		<>
			<Modal open={openModal} footer={[]} onCancel={handleClose}>
				<Row gutter={8}>
					<Col span={6}>
						<h4>Customer</h4>
						<StyledLink to="/account/new/dr">Account</StyledLink>
						<StyledLink to="/invoice/new">Invoice</StyledLink>
						<StyledLink to="/estimate/new">Estimate</StyledLink>
						<StyledLink to="/receipt/sales/new">Sales Receipt</StyledLink>
						<StyledLink to="receipt/refund/new">Refund Receipt</StyledLink>
					</Col>
					<Col span={6}>
						<h4>Supplier</h4>
						<StyledLink to="/account/new/cr">Account</StyledLink>
						<StyledLink to="/bill/new">Bill</StyledLink>
						<StyledLink to="/order/new">Purchase Order</StyledLink>
						<StyledLink to="/expense/new">Expense</StyledLink>
						<StyledLink to="/cheque/new">Cheque</StyledLink>
						<StyledLink to="/credit/new">Supplier Credit</StyledLink>
					</Col>
					<Col span={6}>
						<h4>Management</h4>
						<StyledLink to="/inventory/new">Add Stock</StyledLink>
						<StyledLink to="/user/new">Add User</StyledLink>
						<StyledLink to="/inventory/new">Add Product</StyledLink>
					</Col>
					<Col span={6}>
						<h4>Others</h4>
						<StyledLink to="/bank/deposit/new">Bank Deposit</StyledLink>
						<StyledLink to="/bank/withdrawal/new">Bank Withdrawal</StyledLink>
						<StyledLink to="/journal/new">Journal Entry</StyledLink>
						<StyledLink to="/ledger/new">Ledger</StyledLink>
					</Col>
				</Row>
			</Modal>
		</>
	);
};

export default memo(AddModal);

const StyledLink = styled(Link)`
	display: block;
	margin-block: 0.5rem;
	color: gray;
	font-size: 0.8rem;
`;
