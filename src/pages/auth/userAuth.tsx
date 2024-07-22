import React, { useState } from 'react'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'
import { Button } from '../../components/button'
import { InputField } from '../../components/input'

const UserAuth: React.FC = () => {
	const [showRegister, setShowRegister] = useState(false)

	return (
		<div className="mx-auto mt-32 flex min-h-screen max-w-7xl font-urbanist text-black">
			<div className="w-1/2 bg-white px-32 py-16">
				<h2 className="mb-6 text-2xl font-semibold">Login</h2>
				<form>
					<InputField type="email" placeholder="Email" label="Email Address" />
					<InputField type="password" placeholder="Password" label="Password" />
					<div className="mb-4 flex items-center justify-between">
						<label className="flex items-center">
							<input type="checkbox" className="mr-2" />
							<span className="text-sm">Remember me</span>
						</label>
						<a href="#" className="text-sm text-blue-600">
							Forgot password?
						</a>
					</div>
					<Button variant="primary" className="mt-4">
						Sign In
					</Button>
				</form>
				<p className="my-4 text-center text-sm">or sign in with</p>
				<div className="flex justify-center space-x-4">
					<Button variant="outline" size="small">
						<FaGoogle />
					</Button>
					<Button variant="outline" size="small">
						<FaFacebook />
					</Button>
					<Button variant="outline" size="small">
						<FaApple />
					</Button>
				</div>
				<p className="mt-4 text-xs text-gray-600">
					This site is protected by reCAPTCHA and the Google Privacy Policy and
					Terms of Service apply.
				</p>
			</div>

			<div className="w-1/2 border-l-[0.5px] border-gray-700 bg-white px-32 py-16">
				{!showRegister ? (
					<div>
						<h2 className="mb-6 text-2xl font-semibold">New to An-Ker?</h2>
						<p className="mb-4">With your account, you can:</p>
						<ul className="mb-6 list-disc pl-5 text-sm">
							<li>
								Use the An-Ker app to setup, optimize and control your products.
							</li>
							<li>Manage your personal details, history and preferences.</li>
							<li>View your access to An-Ker and exclusive benefits.</li>
						</ul>
						<Button
							variant="transparent"
							size="large"
							onClick={() => setShowRegister(true)}
						>
							Create Account
						</Button>
					</div>
				) : (
					<div>
						<h2 className="mb-6 text-2xl font-semibold">New Account</h2>
						<form>
							<InputField type="text" placeholder="Name" label="Full Name" />
							<InputField
								type="email"
								placeholder="Email"
								label="Email Address"
							/>
							<InputField
								type="password"
								placeholder="Password"
								label="Password"
							/>
							<InputField
								type="password"
								placeholder="Confirm Password"
								label="Confirm Password"
							/>
							<label className="mb-4 flex items-start">
								<input type="checkbox" className="mr-2 mt-1" />
								<span className="text-sm">
									Receive emails. By signing up to the House of An-Ker you
									accept that An-Ker as well as An-Ker branded shops can contact
									you by email. You are welcome to unsubscribe at any time.
								</span>
							</label>
							<label className="mb-4 flex items-start">
								<input type="checkbox" className="mr-2 mt-1" />
								<span className="text-sm">
									I accept terms of privacy and policy. For more information
									about what we do with your personal data see our privacy
									policy.
								</span>
							</label>
							<Button variant="primary" size="large" className="w-full">
								Sign Up
							</Button>
						</form>
						<p className="mt-4 text-xs text-gray-600">
							This site is protected by reCAPTCHA and the Google Privacy Policy
							and Terms of Service apply.
						</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default UserAuth
