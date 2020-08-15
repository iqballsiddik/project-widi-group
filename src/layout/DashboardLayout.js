import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import styles from './Layout.module.css';

const DashboardLayout = ({ sidebar, mainsection }) => {
	const styleContainer = { margin: "0", boxSizing: "border-box", height: "100vh", width: "100vw", backgroundColor: "#f4f5ff" }
	// const styleSidebar = { margin: "0", padding: "0" };
	const styleMain = { width: "100%", height: "100%", overflowY: "auto" };
	return (
		<Row style={styleContainer}>
			{/* <Col xs="2">
				{sidebar}
			</Col> */}
			<div className={styles.sidebar}>
				{sidebar}
			</div>
			<div className={styles.content} style={styleMain}>
				{mainsection}
			</div>
			{/* <Col xs="10" >
				{mainsection}
			</Col> */}
		</Row>
	)
}

export default DashboardLayout