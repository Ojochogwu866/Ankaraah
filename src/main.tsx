/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Auth from './pages/auth'
import AuthenticatedUserPage from './pages/user/index.tsx'
import { destroyProduct7, initProduct7 } from './product7.ts'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/user-auth',
		element: <Auth />,
	},
	{
		path: '/my-account/*',
		element: <AuthenticatedUserPage />,
	},
])
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)

void initProduct7()

if (import.meta.hot) {
	import.meta.hot.dispose(() => {
		destroyProduct7()
	})
}
