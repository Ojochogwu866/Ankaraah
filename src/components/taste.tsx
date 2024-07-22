/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import fabric from '@/assets/images/fabric.jpg'
import print from '@/assets/images/print.avif'
import hat from '@/assets/images/sunhat.webp'
import tote from '@/assets/images/tote-bagwebp.webp'
import React, { useEffect, useRef, useState } from 'react'

interface GridItemProps {
	image: string
	description: string
	mainText: string
}

const GridItem: React.FC<GridItemProps> = ({
	image,
	description,
	mainText,
}) => {
	const textRef = useRef<HTMLDivElement>(null)
	const [lines, setLines] = useState<string[]>([])

	useEffect(() => {
		if (textRef.current) {
			const splitIntoLines = () => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-call
				const words = mainText.split(' ')
				const tempElement = document.createElement('span')
				tempElement.style.visibility = 'hidden'
				tempElement.style.position = 'absolute'
				tempElement.style.fontSize = window.getComputedStyle(
					textRef.current
				).fontSize
				tempElement.style.fontWeight = window.getComputedStyle(
					textRef.current
				).fontWeight
				document.body.appendChild(tempElement)

				const lines: string[] = []
				let currentLine = ''
				const maxWidth = textRef.current.offsetWidth

				words.forEach((word) => {
					tempElement.textContent = currentLine + ' ' + word
					if (tempElement.offsetWidth > maxWidth) {
						if (currentLine) {
							lines.push(currentLine.trim())
							currentLine = word
						} else {
							lines.push(word)
							currentLine = ''
						}
					} else {
						currentLine += (currentLine ? ' ' : '') + word
					}
				})

				if (currentLine) {
					lines.push(currentLine.trim())
				}

				document.body.removeChild(tempElement)
				setLines(lines)
			}

			splitIntoLines()
			window.addEventListener('resize', splitIntoLines)
			return () => window.removeEventListener('resize', splitIntoLines)
		}
	}, [mainText])

	return (
		<div className="group flex cursor-pointer gap-5">
			<div className="w-[250px] overflow-hidden">
				<img
					src={image}
					alt={description}
					className="h-64 w-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
				/>
			</div>
			<div className="mt-4">
				<p className="text-[15px] uppercase text-gray-500">{description}</p>
				<h3 ref={textRef} className="mt-2 text-xl font-semibold text-gray-700">
					{lines.map((line, index) => (
						<span key={index} className="relative inline-block">
							{line}
							<span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
							{index < lines.length - 1 && <br />}
						</span>
					))}
				</h3>
			</div>
		</div>
	)
}

export const FabricGrid: React.FC = () => {
	const gridItems: GridItemProps[] = [
		{
			image: fabric,
			description: 'Different Fabrics',
			mainText: 'Explore fabrics colors and textures',
		},
		{
			image: tote,
			description: 'Quality Styles',
			mainText: 'Feel the luxury of premium fabrics',
		},
		{
			image: hat,
			description: 'Unique Fashion Patterns',
			mainText: 'Discover our exclusive designs',
		},
		{
			image: print,
			description: 'Sustainable Choices',
			mainText: 'Eco-friendly options for conscious fashion',
		},
	]

	return (
		<section className="container mx-auto max-w-6xl px-4 py-16 md:px-0">
			<h1 className="pb-10 text-2xl font-semibold tracking-wide text-gray-700">
				Explore An-KER
			</h1>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				{gridItems.map((item, index) => (
					<GridItem key={index} {...item} />
				))}
			</div>
		</section>
	)
}
