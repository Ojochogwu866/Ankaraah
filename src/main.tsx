/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Auth from './pages/auth'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/user-auth',
		element: <Auth />,
	},
])
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
