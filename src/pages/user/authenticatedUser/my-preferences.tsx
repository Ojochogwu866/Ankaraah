/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from 'react'
import { Button } from '../../../components/button'

interface PreferencesForm {
	language: string
	currency: string
	newsletterFrequency: string
	productNotifications: boolean
	orderUpdates: boolean
}

const MyPreferences: React.FC = () => {
	const [preferences, setPreferences] = useState<PreferencesForm>({
		language: '',
		currency: '',
		newsletterFrequency: '',
		productNotifications: false,
		orderUpdates: false,
	})

	const [isFormChanged, setIsFormChanged] = useState(false)

	useEffect(() => {
		setPreferences({
			language: 'English',
			currency: 'USD',
			newsletterFrequency: 'weekly',
			productNotifications: true,
			orderUpdates: true,
		})
	}, [])

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value, type } = e.target
		const newValue =
			type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
		setPreferences((prev) => ({ ...prev, [name]: newValue }))
		setIsFormChanged(true)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Preferences saved:', preferences)
		setIsFormChanged(false)
	}

	return (
		<div className="mx-auto max-w-2xl font-urbanist">
			<h1 className="mb-2 text-3xl font-bold tracking-wider text-gray-900">
				My Preferences
			</h1>
			<p className="mb-6 text-gray-600">Customize your shopping experience</p>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="mb-2 block font-medium text-gray-500">
						Language
					</label>
					<select
						name="language"
						value={preferences.language}
						onChange={handleChange}
						className="w-full rounded border p-2"
					>
						<option value="English">English</option>
						<option value="Spanish">Spanish</option>
						<option value="French">French</option>
					</select>
				</div>

				<div>
					<label className="mb-2 block font-medium text-gray-500">
						Currency
					</label>
					<select
						name="currency"
						value={preferences.currency}
						onChange={handleChange}
						className="w-full rounded border p-2"
					>
						<option value="USD">USD</option>
						<option value="EUR">EUR</option>
						<option value="GBP">GBP</option>
					</select>
				</div>

				<div>
					<label className="mb-2 block font-medium text-gray-500">
						Newsletter Frequency
					</label>
					<select
						name="newsletterFrequency"
						value={preferences.newsletterFrequency}
						onChange={handleChange}
						className="w-full rounded border p-2"
					>
						<option value="daily">Daily</option>
						<option value="weekly">Weekly</option>
						<option value="monthly">Monthly</option>
						<option value="never">Never</option>
					</select>
				</div>

				<div className="flex items-center text-gray-500">
					<input
						type="checkbox"
						id="productNotifications"
						name="productNotifications"
						checked={preferences.productNotifications}
						onChange={handleChange}
						className="mr-2"
					/>
					<label htmlFor="productNotifications">
						Receive product notifications
					</label>
				</div>

				<div className="flex items-center text-gray-500">
					<input
						type="checkbox"
						id="orderUpdates"
						name="orderUpdates"
						checked={preferences.orderUpdates}
						onChange={handleChange}
						className="mr-2"
					/>
					<label htmlFor="orderUpdates">Receive order updates</label>
				</div>

				<p className="mt-4 text-xs text-gray-500">
					This site is protected by reCAPTCHA and the Google Privacy Policy and
					Terms of Service apply.
				</p>

				<Button
					variant="primary"
					disabled={!isFormChanged}
					className="mt-6 w-full"
				>
					Save Changes
				</Button>
			</form>
		</div>
	)
}

export default MyPreferences
