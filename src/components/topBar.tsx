import React, { useState } from 'react'
import { FiMapPin, FiMenu, FiShoppingBag, FiUser, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

interface TopBarProps {
	logoSrc: string
	cartItemCount: number
}

export const TopBar: React.FC<TopBarProps> = ({ logoSrc, cartItemCount }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	const menuItems = ['Coperate', 'Men', 'Women', 'Fashion', 'Fabrics']

	const linkClasses =
		'inline-block text-xl font-semibold text-gray-700 hover:text-gray-900 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-900 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'

	return (
		<>
			<header className="fixed top-0 z-30 flex h-[100px] w-full items-center justify-between bg-white px-4 py-7 md:px-10 md:py-16">
				{' '}
				<div className="flex items-center">
					<button
						onClick={toggleSidebar}
						className="mr-2 rounded-full p-2 text-gray-700 hover:bg-gray-100"
						aria-label="Menu"
					>
						<FiMenu className="h-6 w-6" />
					</button>
					<span className="text-gray-700">Menu</span>
				</div>
				<div className="flex flex-grow justify-center">
					<div className="text-2xl font-bold text-black">{logoSrc}</div>
				</div>
				<div className="flex items-center">
					<Link
						to="/user-auth"
						className="mx-1 rounded-full p-2 text-gray-700 hover:bg-gray-100"
					>
						<FiUser className="h-6 w-6" />
					</Link>
					<button
						onClick={() => console.log('Location clicked')}
						className="mx-1 rounded-full p-2 text-gray-700 hover:bg-gray-100"
						aria-label="Location"
					>
						<FiMapPin className="h-6 w-6" />
					</button>
					<Link
						to="/cart"
						className="relative mx-1 rounded-full p-2 text-gray-700 hover:bg-gray-100"
					>
						<FiShoppingBag className="h-6 w-6" />
						{cartItemCount > 0 && (
							<span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
								{cartItemCount}
							</span>
						)}
					</Link>
				</div>
			</header>

			<div
				className={`fixed inset-y-0 left-0 z-50 w-80 bg-white transition-transform duration-300 ease-in-out md:w-96 ${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className="flex h-[100px] items-center justify-start px-3">
					<button
						onClick={toggleSidebar}
						className="rounded-full p-2 text-gray-700 hover:bg-gray-100"
						aria-label="Close menu"
					>
						<FiX className="h-6 w-6" />
					</button>
					<span className="text-base font-bold text-black">Close</span>
				</div>
				<div className="flex h-[calc(100vh-280px)] flex-col">
					<nav className="flex-grow overflow-y-auto px-6 py-4">
						<ul className="space-y-6">
							{menuItems.map((item, index) => (
								<li key={index}>
									<Link
										to={`/${item.toLowerCase()}`}
										className={linkClasses}
										onClick={toggleSidebar}
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
						<div className="my-8 border-t border-gray-200 pt-6">
							<Link
								to="/an-ker"
								className={`${linkClasses} font-bold`}
								onClick={toggleSidebar}
							>
								AN-KER
							</Link>
						</div>
						<Link to="/contact" className={linkClasses} onClick={toggleSidebar}>
							Contact Us
						</Link>
					</nav>
					<div className="mt-5 flex flex-col gap-y-4 border-t border-gray-200 px-6 py-4">
						<Link
							to="/stores"
							className={`flex items-center gap-2 text-base font-normal text-black`}
							onClick={toggleSidebar}
						>
							<FiMapPin className="mr-2 h-5 w-5" />
							<span>Locate Store</span>
						</Link>
						<Link
							to="/account"
							className={`flex items-center gap-2 text-base font-normal text-black`}
							onClick={toggleSidebar}
						>
							<FiUser className="mr-2 h-5 w-5" />
							<span>Account</span>
						</Link>
					</div>
				</div>
			</div>

			{/* Overlay */}
			{isSidebarOpen && (
				<div
					className="fixed inset-0 z-40 bg-black bg-opacity-70 transition-opacity duration-300 ease-in-out"
					onClick={toggleSidebar}
				></div>
			)}
		</>
	)
}
