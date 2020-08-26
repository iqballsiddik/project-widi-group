import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import styles from '../components/Sidebar/Sidebar.module.css';

const DashboardLayout = ({ sidebar, mainsection }) => {
	const styleContainer = { margin: "0", boxSizing: "border-box", height: "100vh", width: "100vw", backgroundColor: "#f4f5ff" }
	// const styleSidebar = { margin: "0", padding: "0" };
	const styleMain = { width: "100%", height: "100%", overflowY: "auto" };
	return (
		<Row style={styleContainer}>
			<div className={styles.sidebar}>
				{sidebar}
			</div>
			<div className={styles.content} style={styleMain}>
				{mainsection}
			</div>
		</Row>
	)
}

export default DashboardLayout