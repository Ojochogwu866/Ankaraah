import React from 'react'
import { Element } from 'react-scroll'
import Landing from './pages/landing'

const App: React.FC = () => {
	return (
		<div className="font-urbanist">
			<Element name="Landing">
				<Landing />
			</Element>
		</div>
	)
}

export default App
