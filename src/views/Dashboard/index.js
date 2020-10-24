import React from 'react';
import DashboardLayout from "../../layout/DashboardLayout";
import Sidebar from "../../components/Sidebar";
import PageDashboard from "../Pages/PageDashboard"
import PageAddUser from '../Pages/AddUsers';
import PageListUser from '../Pages/ListUsers';
import AdminProvider from '../../context/AdminProvider';
import PageInputOrder from '../Pages/InputOrder';
import PageOrderUsers from '../Pages/PageOrderUsers';


const MainSectionViewer = ({ item }) => {
	return (
		<React.Fragment>
			{
				{
					"Dashboard": <PageDashboard />,
					"Add User": <PageAddUser />,
					"List User": <PageListUser />,
					"Order": <PageInputOrder />,
					"List Order": <PageOrderUsers />
				}[item]
			}
		</React.Fragment>
	)
}

const Admin = () => {
	const [menu, setMenu] = React.useState("Dashboard");
	const changeMainSectionView = (item) => setMenu(item);
	return (
		<AdminProvider>
			<DashboardLayout
				sidebar={<Sidebar active={menu} action={changeMainSectionView} />}
				mainsection={<MainSectionViewer item={menu} />}
			/>
		</AdminProvider>
	)
}

export default Admin