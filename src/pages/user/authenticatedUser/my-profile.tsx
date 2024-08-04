/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react'
import { Button } from '../../../components/button'
import { InputField } from '../../../components/input'

const MyProfile: React.FC = () => {
	const [isEditing, setIsEditing] = useState(false)
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		birthday: '',
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevData) => ({ ...prevData, [name]: value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setIsEditing(false)
	}

	return (
		<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div className="rounded-[2px] bg-gray-50 p-6 shadow-sm">
				<h2 className="mb-4 text-3xl font-bold text-gray-900">My Profile</h2>
				<p className="mb-6 text-sm text-gray-500">
					Edit profile details and save changes
				</p>
				<form onSubmit={handleSubmit}>
					<InputField
						type="text"
						name="firstName"
						label="First Name"
						value={formData.firstName}
						onChange={handleInputChange}
						disabled={!isEditing}
					/>
					<InputField
						type="text"
						name="lastName"
						label="Last Name"
						value={formData.lastName}
						onChange={handleInputChange}
						disabled={!isEditing}
					/>
					<InputField
						type="email"
						name="email"
						label="Email"
						value={formData.email}
						onChange={handleInputChange}
						disabled={!isEditing}
					/>
					<InputField
						type="tel"
						name="phoneNumber"
						label="Phone Number"
						value={formData.phoneNumber}
						onChange={handleInputChange}
						disabled={!isEditing}
					/>
					<div className="mb-4">
						<label className="mb-2 block text-sm font-medium text-gray-700">
							Birthday
						</label>
						<input
							type="date"
							name="birthday"
							value={formData.birthday}
							onChange={handleInputChange}
							disabled={!isEditing}
							className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
						/>
					</div>
					<p className="mb-6 mt-6 text-xs italic text-gray-600">
						Age is only but a number, or is it? Either way, it is your special
						day and we would like to celebrate it without. We promise not
						mention any age or numbers.
					</p>
					<Button variant="transparent" disabled={!isEditing}>
						Save Changes
					</Button>
				</form>
				{!isEditing && (
					<Button
						variant="transparent"
						onClick={() => setIsEditing(true)}
						className="mt-4 border border-black text-black hover:bg-gray-300"
					>
						Edit Profile
					</Button>
				)}
				<p className="mt-4 text-xs text-gray-600">
					This site is protected by reCAPTCHA and the Google Privacy Policy and
					Terms of Service apply.
				</p>
			</div>

			<div className="rounded-[2px] bg-gray-50 p-6 shadow-sm">
				<h2 className="mb-4 text-xl font-semibold text-gray-900">
					Account Settings
				</h2>
				<h3 className="mb-4 text-sm font-medium text-gray-500">
					Change Password
				</h3>
				<form>
					<InputField
						type="password"
						name="currentPassword"
						label="Current Password"
						placeholder="Enter current password"
					/>
					<InputField
						type="password"
						name="newPassword"
						label="New Password"
						placeholder="Enter new password"
					/>
					<InputField
						type="password"
						name="confirmPassword"
						label="Confirm Password"
						placeholder="Confirm new password"
					/>
					<Button variant="transparent" className="mt-4">
						Save Password
					</Button>
				</form>

				<div className="mt-8">
					<h3 className="mb-4 text-xl font-medium">Delete Account</h3>
					<p className="mb-4 text-sm text-gray-600">
						There may come a time when you choose to either deactivate or delete
						your An-Ker account, and that's okay (though we'd hate to see you
						go)
					</p>
					<Button
						variant="transparent"
						className="border border-red-500 text-red-500 hover:bg-red-100"
					>
						I want to delete my account
					</Button>
					<p className="mt-2 text-xs text-gray-500">
						I will no longer be able to access my order history or registered
						product information.
					</p>
				</div>
			</div>
		</div>
	)
}

export default MyProfile
