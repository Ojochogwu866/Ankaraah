/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Route, Routes } from 'react-router-dom'
import { Button } from '../../components/button'
import { Footer } from '../../components/footer'
import { TopBar } from '../../components/topBar'
import MyAddress from './authenticatedUser/my-address'
import MyOrders from './authenticatedUser/my-orders'
import MyPreferences from './authenticatedUser/my-preferences'
import MyProfile from './authenticatedUser/my-profile'
import SecondaryNav from './secondaryNav'

const Overview = () => {
	const overviewItems = [
		{
			title: 'My Profile',
			description: 'Manage your personal information',
			details: 'John Doe | john.doe@example.com',
			buttonLabel: 'View Profile',
		},
		{
			title: 'My Orders',
			description: 'Track and manage your orders',
			details: 'Recent Order: #12345 | Status: In Transit',
			buttonLabel: 'View Orders',
		},
		{
			title: 'My Address',
			description: 'Manage your shipping addresses',
			details: '123 Main St, Anytown, AN 12345',
			buttonLabel: 'Manage Addresses',
		},
		{
			title: 'My Preferences',
			description: 'Customize your shopping experience',
			details: 'Newsletter: Subscribed | Language: English',
			buttonLabel: 'Set Preferences',
		},
	]

	return (
		<div className="grid grid-cols-1 gap-8 font-urbanist md:grid-cols-2">
			{overviewItems.map((item, index) => (
				<div
					key={index}
					className="flex h-[400px] flex-col justify-between rounded-[2px] bg-gray-50 p-6 shadow-sm"
				>
					<div className="flex flex-col justify-between">
						<h3 className="mb-2 text-xl font-semibold text-gray-900">
							{item.title}
						</h3>
						<p className="mb-4 text-sm text-gray-500">{item.description}</p>
						<p className="mb-4 text-gray-700">{item.details}</p>
					</div>
					<div className="flex items-end justify-start">
						<Button
							variant="transparent"
							size="medium"
							onClick={() => console.log(`${item.buttonLabel} clicked`)}
							className="border border-black text-black hover:bg-gray-300"
						>
							{item.buttonLabel}
						</Button>
					</div>
				</div>
			))}
		</div>
	)
}

const AuthenticatedUserPage = () => {
	return (
		<div className="min-h-screen bg-white font-urbanist">
			<TopBar logoSrc={''} cartItemCount={0} />
			<div className="container mx-auto max-w-6xl px-4 py-16 md:px-0">
				<SecondaryNav />
				<Routes>
					<Route index element={<Overview />} />
					<Route path="orders" element={<MyOrders />} />
					<Route path="profile" element={<MyProfile />} />
					<Route path="address" element={<MyAddress />} />
					<Route path="preferences" element={<MyPreferences />} />
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default AuthenticatedUserPage
