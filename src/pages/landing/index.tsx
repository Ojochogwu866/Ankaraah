import React from 'react'
import { Element } from 'react-scroll'
import { Footer } from '../../components/footer'
import { TopBar } from '../../components/topBar'
import { CategoryCards } from './category'
import { Fitted } from './fitted'
import { Hero } from './hero'
import { NonEssential } from './non-essential'
import { StoreLocator } from './store'
import { FabricGrid } from './taste'

const Landing: React.FC = () => {
	return (
		<div className="font-urbanist">
			<Element name="topbar">
				<TopBar logoSrc="An-Ker" cartItemCount={3} />
			</Element>
			<Element name="hero">
				<Hero />
			</Element>
			<CategoryCards />
			<NonEssential />
			<Fitted />
			<StoreLocator />
			<FabricGrid />
			<Footer />
		</div>
	)
}

export default Landing
