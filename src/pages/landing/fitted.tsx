import React from 'react'
import Fit from '../../assets/images/sewing.avif'
import { Button } from '../../components/button'

export const Fitted: React.FC = () => {
	return (
		<section className="relative mt-20 h-[600px] w-full overflow-hidden">
			<img
				src={Fit}
				alt="Fitted clothing"
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-l from-white via-white/70 to-transparent">
				<div className="absolute right-0 top-1/2 w-1/2 -translate-y-1/2 transform p-12">
					<h2 className="mb-4 text-4xl font-bold text-gray-800">
						Make your order
					</h2>
					<p className="mb-6 text-xl text-gray-600">
						Customize to fit your style and preferences. Our expert tailors
						ensure the perfect fit for every garment.
					</p>
					<Button
						variant="transparent"
						size="large"
						onClick={() => console.log('Order Now clicked')}
					>
						Order Now
					</Button>
				</div>
			</div>
		</section>
	)
}
