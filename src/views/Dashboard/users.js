import React from 'react';
import UsersProvider from '../../context/UsersProvider';
import DashboardLayout from '../../layout/DashboardLayout';
import Sidebar from '../../components/Sidebar';
import PageInputOrder from '../Pages/InputOrder';
import PageOrderUsers from '../Pages/PageOrderUsers';

const MainSectionViewer = ({ item }) => {
    return (
        <React.Fragment>
            {
                {
                    "Dashboard": <p>ini Users Dashboard</p>,
                    "Order": <PageInputOrder />,
                    "List Order": <PageOrderUsers />
                }[item]
            }
        </React.Fragment>
    )
}

export default function Users() {
    const [menu, setMenu] = React.useState("Dashboard");
    const changeMainSectionView = (item) => setMenu(item);
    const token = localStorage.getItem('token');
    const role = window.localStorage.getItem('role');
    return (
        <UsersProvider>
            <DashboardLayout
                sidebar={<Sidebar active={menu} action={changeMainSectionView} />}
                mainsection={<MainSectionViewer item={menu} />}
            />
        </UsersProvider>
    )
}
