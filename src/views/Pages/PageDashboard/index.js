import React from 'react'
import ChartBar from '../../../components/ChartBar'
import TableOrder from '../../../components/Table/TableOrder'
import CardOrder from '../../../components/Card/CardOrder'

function PageDashboard() {
	return (
		<>
			{/* <ChartBar data={[5, 10, 1, 3]} size={[500, 500]} /> */}
			<div className="mt-3">
				<h1>Dashboard</h1>
				<hr />
				<CardOrder />
				<br />
				<TableOrder />
			</div>
		</>
	)
}

export default PageDashboard