// import React from './node_modules/react';
import React from 'react';
import { Button } from 'reactstrap';
import {
	BrowserRouter as Router,
	useLocation,
	useHistory
} from "react-router-dom";
import styles from './Sidebar.module.css';
import RootContext from '../../context';
import { style } from 'd3';

const ItemMenu = ({ item, keys, action, active }) => {
	const onClick = () => action(item);
	// buat style untuk active
	const customStyle = {
		background: `${(active === item) ? "#f4f5ff" : "#d9dbf9"}`,
		// padding: '15px'
	}
	return (
		// menampilkan button side menu
		// <div className={styles.button} style={customStyle} onClick={onClick} key={keys}>
		// 	<b>{item}</b>
		// </div>
		<div className={styles.button} style={customStyle} onClick={onClick} key={keys}>
			<b>{item}</b>
		</div>
	)
}

const Logout = () => {
	const history = useHistory();
	const onClick = () => {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('role');
		window.localStorage.clear();
		history.push('/login');
	};

	return (
		<div className={styles.btnLogout} onClick={onClick}>
			<Button color="danger">LOGOUT</Button>{' '}
		</div>
	)
}

const Sidebar = ({ active, action }) => {
	return (
		// Consumer dari value AdminProviderx
		<RootContext.Consumer>
			{
				({ menulist }) => {
					return (
						<div className={styles.sidebar}>
							<div className={styles.logo} >
								<h5 style={{ color: '#000' }}>WIDI GROUP</h5>
							</div>
							<React.Fragment>
								{/*  manu di looping sebanyak kirim menulist */}
								{menulist.map((menu, index) => {
									return <ItemMenu
										item={menu}
										key={index}
										action={action}
										active={active}
									/>
								})}
							</React.Fragment>
							<Logout />
						</div>
					)
				}
			}
		</RootContext.Consumer>
	)
}

export default Sidebar
