import Fabrics from '@/assets/images/Ankara-Fabrics.png'
import GradientImage from '@/assets/images/Gradient.svg'
import Coperate from '@/assets/images/copearte.avif'
import GradientImage1 from '@/assets/images/grad-image-1.webp'
import GradientImage2 from '@/assets/images/grad-image-2.webp'
import GradientImage3 from '@/assets/images/grad-image3.webp'

import React from 'react'
import { Button } from './button'

export const NonEssential: React.FC = () => {
	return (
		<section className="container mx-auto flex max-w-6xl flex-col items-center justify-center py-32">
			<h1 className="text-lg uppercase leading-7 tracking-widest text-black">
				An-KER
			</h1>
			<p className="mt-6 text-6xl font-normal text-black">
				Quality African Made Fabrics
			</p>
			<div className="mt-10">
				<Button variant="transparent">Read More</Button>
			</div>
			<div
				className="relative mt-28 h-[900px] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${GradientImage})` }}
			>
				<div className="absolute inset-0 grid grid-cols-3 gap-4 p-8">
					<div className="col-span-1 row-span-2 rotate-3 transform transition-transform duration-300 hover:rotate-0">
						<img
							className="h-full w-full rounded-[2px] object-cover shadow-lg"
							src={GradientImage1}
							alt="ankara-1"
						/>
					</div>
					<div className="col-span-1 -rotate-2 transform transition-transform duration-300 hover:rotate-0">
						<img
							className="h-full w-full rounded-[2px] object-cover shadow-lg"
							src={Coperate}
							alt="ankara-2"
						/>
					</div>
					<div className="col-span-1 row-span-2 rotate-1 transform transition-transform duration-300 hover:rotate-0">
						<img
							className="h-full w-full rounded-[2px] object-cover shadow-lg"
							src={GradientImage2}
							alt="ankara-3"
						/>
					</div>
					<div className="col-span-1 -rotate-3 transform transition-transform duration-300 hover:rotate-0">
						<img
							className="h-full w-full rounded-[2px] object-cover shadow-lg"
							src={GradientImage3}
							alt="ankara-4"
						/>
					</div>
					<div className="col-span-2 rotate-2 transform transition-transform duration-300 hover:rotate-0">
						<img
							className="h-full w-full rounded-[2px] object-cover shadow-lg"
							src={Fabrics}
							alt="ankara-5"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
