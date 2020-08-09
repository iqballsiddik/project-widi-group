import React from 'react';
import UsersProvider from '../../context/UsersProvider';
import DashboardLayout from '../../layout/DashboardLayout';
import Sidebar from '../../components/Sidebar';
import PageInputOrder from '../Pages/InputOrder';

const MainSectionViewer = ({ item }) => {
    return (
        <React.Fragment>
            {
                {
                    "Dashboard": <p>ini Users Dashboard</p>,
                    "Order": <PageInputOrder />,
                    "List Order": <p>List Order</p>,
                }[item]
            }
        </React.Fragment>
    )
}

export default function Users() {
    const [menu, setMenu] = React.useState("Dashboard");
    const changeMainSectionView = (item) => setMenu(item);

    return (
        <UsersProvider>
            <DashboardLayout
                sidebar={<Sidebar active={menu} action={changeMainSectionView} />}
                mainsection={<MainSectionViewer item={menu} />}
            />
        </UsersProvider>
    )
}