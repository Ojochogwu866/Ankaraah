import React from 'react'
import { Element } from 'react-scroll'
import { CategoryCards } from './components/category'
import { Fitted } from './components/fitted'
import { Footer } from './components/footer'
import { Hero } from './components/hero'
import { NonEssential } from './components/non-essential'
import { StoreLocator } from './components/store'
import { FabricGrid } from './components/taste'
import { TopBar } from './components/topBar'

const App: React.FC = () => {
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

export default App
