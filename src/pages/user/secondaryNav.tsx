import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SecondaryNav = () => {
	const location = useLocation()
	const [activeLink, setActiveLink] = useState('')

	useEffect(() => {
		const path = location.pathname.split('/').pop() || ''
		setActiveLink(path)
	}, [location])

	return (
		<nav className="relative mb-20 mt-[100px] border-b-[2px] border-gray-300">
			<ul className="flex justify-center gap-x-[50px]">
				{['', 'orders', 'profile', 'address', 'preferences'].map((path) => (
					<li key={path} className="relative flex justify-center gap-x-[50px]">
						<Link
							to={path}
							className={`block px-4 py-4 text-gray-700 hover:text-gray-900 ${
								activeLink === path ? 'font-bold' : ''
							}`}
							onClick={() => setActiveLink(path)}
						>
							{path === ''
								? 'Overview'
								: `My ${path.charAt(0).toUpperCase() + path.slice(1)}`}
						</Link>
						{activeLink === path && (
							<div className="animate-grow-width absolute bottom-[-2px] left-0 h-1 w-full bg-gray-700" />
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default SecondaryNav
