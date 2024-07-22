import React from 'react'
import StoreImage from '../../assets/images/store.avif'
import { Button } from '../../components/button'

export const StoreLocator: React.FC = () => {
	return (
		<section className="mt-20 bg-gray-100 px-4 py-20 md:px-8">
			<div className="mx-auto max-w-6xl">
				<div className="flex flex-col bg-white shadow-sm md:flex-row">
					<div className="w-full overflow-hidden md:w-1/2">
						<img
							src={StoreImage}
							alt="Our Store"
							className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
						/>
					</div>
					<div className="flex w-full flex-col items-center justify-center p-8 md:w-1/2">
						<p className="mb-2 text-sm uppercase tracking-wider text-gray-500">
							Find Us
						</p>
						<h1 className="mb-4 text-3xl font-bold text-gray-700">
							Visit Our Store
						</h1>
						<p className="mb-6 text-center text-gray-600">
							Experience our collection in person. Our friendly staff is ready
							to assist you in finding the perfect fit.
						</p>
						<Button
							variant="primary"
							size="large"
							onClick={() => console.log('Locate Store clicked')}
						>
							Locate Store
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
