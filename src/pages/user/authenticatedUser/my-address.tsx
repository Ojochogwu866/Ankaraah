/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react'
import { Button } from '../../../components/button'
import { InputField } from '../../../components/input'

interface AddressForm {
	addressLine1: string
	addressLine2: string
	zipCode: string
	state: string
	city: string
	country: string
}

const MyAddress: React.FC = () => {
	const [address, setAddress] = useState<AddressForm>({
		addressLine1: '',
		addressLine2: '',
		zipCode: '',
		state: '',
		city: '',
		country: '',
	})

	const [isFormChanged, setIsFormChanged] = useState(false)

	useEffect(() => {
		setAddress({
			addressLine1: '123 Main St',
			addressLine2: 'Apt 4B',
			zipCode: '12345',
			state: 'CA',
			city: 'Anytown',
			country: 'USA',
		})
	}, [])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setAddress((prev) => ({ ...prev, [name]: value }))
		setIsFormChanged(true)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Address saved:', address)
		setIsFormChanged(false)
	}

	return (
		<div className="mx-auto max-w-2xl font-urbanist">
			<h1 className="mb-2 text-3xl font-bold text-gray-900">My Address</h1>
			<p className="mb-6 mt-4 text-gray-600">
				Check and edit your shipping details
			</p>

			<form onSubmit={handleSubmit} className="space-y-8">
				<InputField
					label="Address Line 1"
					name="addressLine1"
					value={address.addressLine1}
					onChange={handleChange}
					required
				/>
				<InputField
					label="Address Line 2"
					name="addressLine2"
					value={address.addressLine2}
					onChange={handleChange}
				/>
				<InputField
					label="ZIP/Postal Code"
					name="zipCode"
					value={address.zipCode}
					onChange={handleChange}
					required
				/>
				<InputField
					label="State"
					name="state"
					value={address.state}
					onChange={handleChange}
					required
				/>
				<InputField
					label="City"
					name="city"
					value={address.city}
					onChange={handleChange}
					required
				/>
				<InputField
					label="Country"
					name="country"
					value={address.country}
					onChange={handleChange}
					required
				/>

				<p className="mt-4 text-xs text-gray-500">
					This site is protected by reCAPTCHA and the Google Privacy Policy and
					Terms of Service apply.
				</p>

				<Button
					variant="transparent"
					disabled={!isFormChanged}
					className="mt-6 w-full"
				>
					Save Changes
				</Button>
			</form>
		</div>
	)
}

export default MyAddress
