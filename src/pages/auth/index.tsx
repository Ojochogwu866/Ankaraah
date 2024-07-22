import React from 'react'
import { Element } from 'react-scroll'
import { Footer } from '../../components/footer'
import { TopBar } from '../../components/topBar'
import UserAuth from './userAuth'

const Auth: React.FC = () => {
	return (
		<div className="font-urbanist">
			<Element name="topbar">
				<TopBar logoSrc="An-Ker" cartItemCount={3} />
			</Element>
			<Element name="hero">
				<UserAuth />
			</Element>
			<Footer />
		</div>
	)
}

export default Auth
