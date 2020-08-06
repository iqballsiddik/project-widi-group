import React from 'react';
import DashboardLayout from "../../layout/DashboardLayout";
import Sidebar from "../../components/sidebar";
import pages from "../Pages"

const Test = ({ item }) => <div>{item}</div>

const MainSectionViewer = ({ item }) => {
	return (
		<React.Fragment>
			{
				{
					"menu1": <p>kjhgf</p>,
					"menu4": <p>Form</p>,
				}[item]
			}
		</React.Fragment>
	)
}

const Admin = () => {
	const [menu, setMenu] = React.useState("menu1");
	const changeMainSectionView = (item) => setMenu(item);

	return (
		<DashboardLayout
			sidebar={<Sidebar active={menu} action={changeMainSectionView} />}
			mainsection={<MainSectionViewer item={menu} />}
		/>
	)
}

export default Admin