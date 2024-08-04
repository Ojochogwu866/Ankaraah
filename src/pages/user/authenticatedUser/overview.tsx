import { Link, useResolvedPath } from 'react-router-dom'

const Overview = () => {
	const url = useResolvedPath('').pathname

	return (
		<div className="grid grid-cols-2 gap-8">
			<div className="rounded-lg bg-white p-6 shadow-md">
				<h3 className="mb-4 text-xl font-semibold">Order Summary</h3>
				<p>You have 5 orders in progress</p>
				<Link
					to={`${url}/orders`}
					className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white"
				>
					View Orders
				</Link>
			</div>
			<div className="rounded-lg bg-white p-6 shadow-md">
				<h3 className="mb-4 text-xl font-semibold">Profile</h3>
				<p>Update your personal information</p>
				<Link
					to={`${url}/profile`}
					className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white"
				>
					Edit Profile
				</Link>
			</div>
			<div className="rounded-lg bg-white p-6 shadow-md">
				<h3 className="mb-4 text-xl font-semibold">Address</h3>
				<p>Manage your shipping addresses</p>
				<Link
					to={`${url}/address`}
					className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white"
				>
					Manage Addresses
				</Link>
			</div>
			<div className="rounded-lg bg-white p-6 shadow-md">
				<h3 className="mb-4 text-xl font-semibold">Preferences</h3>
				<p>Customize your shopping experience</p>
				<Link
					to={`${url}/preferences`}
					className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white"
				>
					Set Preferences
				</Link>
			</div>
		</div>
	)
}

export default Overview
