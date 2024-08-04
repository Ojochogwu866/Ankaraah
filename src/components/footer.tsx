import React, { useState } from 'react'
import { FaCheck, FaChevronDown, FaChevronUp, FaEnvelope } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-scroll'
import GradientImage from '../assets/images/Gradient.svg'
import FooterImage from '../assets/images/copearte.avif'
import { Button } from '../components/button'

interface FooterSectionProps {
	title: string
	items: string[]
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="mb-6">
			<button
				className="flex w-full items-center gap-2 text-left text-lg font-semibold text-white transition-colors hover:text-gray-300"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span>{title}</span>
				{isOpen ? (
					<FaChevronUp className="mt-1 text-sm" />
				) : (
					<FaChevronDown className="mt-1 text-sm" />
				)}
			</button>
			<ul
				className={`mt-3 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
					isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				{items.map((item, index) => (
					<li
						key={index}
						className="text-sm text-white transition-colors hover:text-gray-300"
					>
						<Link className="cursor-pointer" to="/">
							{item}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

const NonHomeFooter = () => {
	return (
		<div className="flex flex-col items-center justify-center py-16">
			<div className="mb-4 rounded-full border-2 border-white p-4">
				<FaEnvelope className="text-4xl text-white" />
			</div>
			<h2 className="mb-2 text-2xl font-bold text-white">
				Join the House of An-Ker
			</h2>
			<p className="mb-4 text-center text-white">
				Enjoy new and unlimited offers, products and services when you sign up
			</p>
			<Button
				variant="transparent"
				size="large"
				onClick={() => console.log('Sign up clicked')}
				className="transform border-gray-200 text-white transition-transform duration-300 ease-in-out hover:scale-105"
			>
				Sign Up
			</Button>
		</div>
	)
}

export const Footer: React.FC = () => {
	const location = useLocation()
	const isHomePage = location.pathname === '/'

	const benefits = [
		'Early access to new collections',
		'Exclusive discounts and promotions',
		'Personalized style recommendations',
		'Invitations to VIP events',
		'Extended return period',
		'Priority customer support',
	]

	const footerSections: FooterSectionProps[] = [
		{
			title: 'Customer Care',
			items: ['Contact Us', 'FAQ', 'Shipping', 'Returns', 'Size Guide'],
		},
		{
			title: 'Our Policies',
			items: [
				'Privacy Policy',
				'Terms of Service',
				'Refund Policy',
				'Accessibility',
			],
		},
		{
			title: 'Download App',
			items: ['iOS App', 'Android App'],
		},
		{
			title: 'Our Company',
			items: ['About Us', 'Careers', 'Press', 'Affiliates'],
		},
		{
			title: 'Social Links',
			items: ['Facebook', 'Instagram', 'Twitter', 'Pinterest'],
		},
	]

	return (
		<footer
			className="bg-cover bg-center px-4 py-16"
			style={{ backgroundImage: `url(${GradientImage})` }}
		>
			<div className="container mx-auto">
				{isHomePage ? (
					<div className="flex flex-col md:flex-row">
						<div className="relative h-[700px] w-full overflow-hidden md:w-1/2">
							<img
								src={FooterImage}
								alt="An-Ker Fashion"
								className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-l from-white via-white/50 to-transparent"></div>
						</div>
						<div className="h-[700px] w-full bg-white px-8 py-12 md:w-1/2 md:px-16">
							<h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-800">
								HOUSE OF AN-KER
							</h2>
							<p className="mb-8 text-2xl font-light text-gray-800">
								Join our global community for exclusive benefits and updates
							</p>
							<ul className="mb-8 space-y-3 text-sm text-gray-700">
								{benefits.map((benefit, index) => (
									<li key={index} className="flex items-start">
										<FaCheck className="mr-2 mt-1 text-gray-700" />
										<span>{benefit}</span>
									</li>
								))}
							</ul>
							<form className="space-y-5">
								<div className="relative">
									<input
										type="email"
										placeholder="Email"
										className="w-full border-b border-gray-300 bg-transparent p-2 text-sm text-gray-700 outline-none transition-all focus:border-gray-500"
									/>
									<div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gray-500 transition-all duration-300"></div>
								</div>
								<div className="flex space-x-4">
									<div className="relative w-1/2">
										<input
											type="text"
											placeholder="First Name"
											className="w-full border-b border-gray-300 bg-transparent p-2 text-sm text-gray-700 outline-none transition-all focus:border-gray-500"
										/>
										<div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gray-500 transition-all duration-300"></div>
									</div>
									<div className="relative w-1/2">
										<input
											type="text"
											placeholder="Last Name"
											className="w-full border-b border-gray-300 bg-transparent p-2 text-sm text-gray-700 outline-none transition-all focus:border-gray-500"
										/>
										<div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gray-500 transition-all duration-300"></div>
									</div>
								</div>
								<div className="flex items-start">
									<input type="checkbox" id="policy" className="mr-2 mt-1" />
									<label htmlFor="policy" className="text-xs text-gray-600">
										I accept An-Ker's privacy policy and agree to receive
										personalized marketing communications. Unsubscribing is
										possible at any time. For details on data processing, see
										our privacy policy.
									</label>
								</div>
								<div className="captcha">
									<p className="text-sm text-gray-600">Captcha Protection</p>
								</div>
								<Button
									variant="primary"
									size="large"
									onClick={() => console.log('Subscribe clicked')}
									className="transform transition-transform duration-300 ease-in-out hover:scale-105"
								>
									Subscribe
								</Button>
							</form>
						</div>
					</div>
				) : (
					<NonHomeFooter />
				)}
				<div className="px-4 py-8">
					<div className="flex flex-wrap">
						<div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:w-4/5">
							{footerSections.map((section, index) => (
								<FooterSection key={index} {...section} />
							))}
						</div>
						<div className="mt-6 flex w-full items-center justify-end lg:mt-0 lg:w-1/5">
							<span className="text-sm font-semibold text-white">
								International
							</span>
							<select className="ml-2 cursor-pointer appearance-none rounded border border-white bg-transparent p-1 text-sm text-white outline-none">
								<option>English</option>
								<option>Spanish</option>
								<option>Español</option>
							</select>
						</div>
					</div>
				</div>
				<div className="p-4 text-left">
					<p className="text-sm text-white">
						&copy; An-Ker, {new Date().getFullYear()}
					</p>
				</div>
			</div>
		</footer>
	)
}
