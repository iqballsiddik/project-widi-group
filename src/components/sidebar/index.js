import React from 'react';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button, Container, ListGroup, ListGroupItem
} from 'reactstrap';
import {
	BrowserRouter as Router,
	useLocation,
	useHistory
} from "react-router-dom";
import styles from './Sidebar.module.css';

const MenuItem = ({ item, keys, action, active }) => {
	// console.log("pathname ",useLocation().pathname);
	const locationHasilSurveyor = useLocation().pathname == '/adminsurveyor/detail-issue' ? 'HASIL SURVEY' : "";
	const onClick = () => action(item);
	const customStyle = {
		background: `${(active === item || active === locationHasilSurveyor) ? "#f4f5ff" : "#d9dbf9"}`,
	}
	return (
		<div className={styles.button} style={customStyle} onClick={onClick} key={keys}>
			<b>{item}</b>
		</div>
	)
}

const Logout = () => {
	const history = useHistory();
	const onClick = () => {
		window.localStorage.removeItem('role');
		history.push('/');
	};

	return (
		<div className={styles.button} onClick={onClick}>
			<b>KELUAR</b>
		</div>
	)
}

const Sidebar = ({ active, action }) => {
	const menulist = ["menu1", "menu2"]
	return (
		// <RootContext.Consumer>
		// 	{({ menulist }) => {
		// return (

		<div className={styles.card}>
			<React.Fragment>
				{menulist.map((menu, index) => {
					return <MenuItem
						item={menu}
						key={index}
						action={action}
						active={active}
					/>
				})}
			</React.Fragment>
			<Logout />
		</div>
		// )
		// }}
		// </RootContext.Consumer>
	)
}

export default Sidebar
