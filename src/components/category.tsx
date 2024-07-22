import React from 'react'
import Casual from '../assets/images/casual.png'
import Coperate from '../assets/images/copearte.avif'
import Women from '../assets/images/ladies.jpg'
import Men from '../assets/images/men.png'

interface CategoryCardProps {
	image: string
	title: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title }) => (
	<div className="group relative h-[300px] cursor-pointer overflow-hidden">
		<img
			src={image}
			alt={title}
			className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
		/>
		<div className="absolute inset-0 flex items-end justify-center bg-opacity-40 bg-gradient-to-t from-black/50 to-transparent">
			<h3 className="mb-10 text-2xl font-bold text-white">{title}</h3>
		</div>
	</div>
)

export const CategoryCards: React.FC = () => {
	const categories = [
		{ title: 'Men', image: Men },
		{ title: 'Women', image: Women },
		{ title: 'Corporate', image: Coperate },
		{ title: 'Casual', image: Casual },
	]

	return (
		<section className="container mx-auto max-w-6xl py-20">
			<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
				{categories.map((category, index) => (
					<CategoryCard key={index} {...category} />
				))}
			</div>
		</section>
	)
}
