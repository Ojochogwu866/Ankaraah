/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react'
import { FaBox, FaCheck, FaSearchPlus, FaTruck } from 'react-icons/fa'
import { Button } from '../../../components/button'

interface Order {
	id: string
	date: string
	status: 'Processing' | 'Shipped' | 'Delivered'
	items: { name: string; quantity: number }[]
	total: number
}

const MyOrders: React.FC = () => {
	const [orders] = useState<Order[]>([
		{
			id: 'ORD-001',
			date: '2024-08-01',
			status: 'Delivered',
			items: [
				{ name: 'Product A', quantity: 2 },
				{ name: 'Product B', quantity: 1 },
			],
			total: 150.99,
		},
		{
			id: 'ORD-002',
			date: '2024-08-03',
			status: 'Shipped',
			items: [{ name: 'Product C', quantity: 1 }],
			total: 79.99,
		},
		{
			id: 'ORD-003',
			date: '2024-08-04',
			status: 'Processing',
			items: [
				{ name: 'Product D', quantity: 3 },
				{ name: 'Product E', quantity: 1 },
			],
			total: 249.97,
		},
	])

	const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

	const getStatusIcon = (status: Order['status']) => {
		switch (status) {
			case 'Processing':
				return <FaBox className="text-yellow-500" />
			case 'Shipped':
				return <FaTruck className="text-blue-500" />
			case 'Delivered':
				return <FaCheck className="text-green-500" />
		}
	}

	const NoOrders = () => (
		<div className="flex h-[60vh] flex-col items-center justify-center">
			<img src="/empty-box.svg" alt="No Orders" className="mb-8 h-48 w-48" />
			<h2 className="mb-4 text-2xl font-semibold text-gray-900">
				No Orders Yet
			</h2>
			<p className="mb-8 text-gray-600">
				Looks like you haven't made any orders. Let's change that!
			</p>
			<Button
				variant="transparent"
				onClick={() => console.log('Navigate to shop')}
			>
				Start Shopping
			</Button>
		</div>
	)

	return (
		<div className="font-urbanist">
			<h1 className="mb-8 text-3xl font-bold text-gray-900">My Orders</h1>

			{orders.length === 0 ? (
				<NoOrders />
			) : (
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div className="md:col-span-2">
						<div className="space-y-8">
							{orders.map((order) => (
								<div
									key={order.id}
									className="cursor-pointer rounded-lg bg-gray-50 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
									onClick={() => setSelectedOrder(order)}
								>
									<div className="mb-4 flex items-center justify-between">
										<h3 className="text-xl font-semibold text-gray-700">
											{order.id}
										</h3>
										<span className="flex items-center space-x-2">
											{getStatusIcon(order.status)}
											<span className="text-sm font-medium text-gray-900">
												{order.status}
											</span>
										</span>
									</div>
									<p className="mb-2 text-gray-600">Order Date: {order.date}</p>
									<p className="text-lg font-bold text-gray-700">
										Total: ${order.total.toFixed(2)}
									</p>
									<div className="mt-4 flex items-center justify-between">
										<span className="text-sm text-gray-500">
											{order.items.length} item(s)
										</span>
										<Button
											variant="transparent"
											size="small"
											className="flex items-center space-x-1"
										>
											<FaSearchPlus />
											<span>View Details</span>
										</Button>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="md:col-span-1">
						{selectedOrder ? (
							<div className="sticky top-8 rounded-[2px] bg-gray-50 p-6 shadow-sm">
								<h3 className="mb-4 text-xl font-semibold text-gray-700">
									Order Details
								</h3>
								<p className="mb-2 text-gray-600">
									Order ID: {selectedOrder.id}
								</p>
								<p className="mb-4 text-gray-600">Date: {selectedOrder.date}</p>
								<h4 className="mb-2 font-medium text-gray-700">Items:</h4>
								<ul className="mb-4 list-inside list-disc text-gray-500">
									{selectedOrder.items.map((item, index) => (
										<li key={index}>
											{item.name} x{item.quantity}
										</li>
									))}
								</ul>
								<p className="mb-4 text-lg font-bold text-gray-700">
									Total: ${selectedOrder.total.toFixed(2)}
								</p>
								<div className="flex items-center justify-between">
									<span className="flex items-center space-x-2 text-gray-900">
										{getStatusIcon(selectedOrder.status)}
										<span className="text-sm font-medium">
											{selectedOrder.status}
										</span>
									</span>
									<Button variant="primary" size="small">
										Track Order
									</Button>
								</div>
							</div>
						) : (
							<div className="rounded-lg bg-gray-100 p-6 text-center">
								<p className="text-gray-600">Select an order to view details</p>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default MyOrders
