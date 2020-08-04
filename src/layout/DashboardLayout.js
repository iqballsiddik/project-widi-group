import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const DashboardLayout = ({ sidebar, mainsection }) => {
	const styleContainer = { margin: "0", boxSizing: "border-box", height: "100vh", width: "100vw", backgroundColor: "#f4f5ff" }
	const styleSidebar = { margin: "0", padding: "5px" };
	const styleMain = { margin: "0", height: "100%", overflowY: "auto" };
	return (
		<Row style={styleContainer}>
			<Col xs="2" style={styleSidebar}>
				{sidebar}
			</Col>
			<Col xs="10" style={styleMain}>
				{mainsection}
			</Col>
		</Row>
	)
}

export default DashboardLayout