import React from 'react'
import HeroImage1 from '../../assets/anker-1.png'
import HeroImage2 from '../../assets/anker-2.png'
import { Button } from '../../components/button'

export const Hero: React.FC = () => {
	return (
		<section className="h-[600px] w-full">
			<div className="mt-[130px] flex h-full flex-col gap-[3%] md:flex-row">
				<div className="relative w-full overflow-hidden md:w-[60%]">
					<img
						className="h-full w-full object-cover"
						src={HeroImage1}
						alt="At home and at work"
					/>
					<div className="absolute inset-0 mt-20 bg-gradient-to-t from-black/50 to-transparent">
						<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
							<div className="absolute bottom-1/4 left-20 text-white">
								<h2 className="mb-2 text-left text-7xl font-bold">
									At Home & At Work
								</h2>
								<p className="mb-4 mt-4 text-base leading-8">
									Easy selection for all your fasion needs Pick from a range of
									products
								</p>
								<div className="mt-4 flex w-full justify-start">
									<Button
										variant="primary"
										size="medium"
										onClick={() => console.log('Shop Now clicked')}
									>
										Shop Now
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative mt-8 flex w-full items-end justify-end overflow-hidden md:mt-0 md:w-[37%]">
					<img
						className="h-full w-full object-cover"
						src={HeroImage2}
						alt="Comfy in Style"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
						<div className="absolute bottom-1/4 left-20 text-white">
							<h2 className="mb-2 text-right text-7xl font-bold">
								Comfy in <br />
								Style
							</h2>
							<p className="mb-4 mt-4 text-base leading-8">
								Best fits for all events - Cultural, Coperate,
								<br /> Owambe, & Birthdays.
							</p>
							<div className="mt-4 flex w-full justify-end">
								<Button
									variant="primary"
									size="medium"
									onClick={() => console.log('Shop Now clicked')}
								>
									Shop Now
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
