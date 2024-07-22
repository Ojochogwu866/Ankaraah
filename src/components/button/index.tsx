import React from 'react'
import { FaSpinner } from 'react-icons/fa'

interface ButtonProps {
	children: React.ReactNode
	onClick?: () => void
	variant?: 'primary' | 'secondary' | 'outline' | 'transparent'
	size?: 'small' | 'medium' | 'large'
	isLoading?: boolean
	disabled?: boolean
	fullWidth?: boolean
	className?: string
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	variant = 'primary',
	size = 'medium',
	isLoading = false,
	disabled = false,
	fullWidth = false,
	className = '',
}) => {
	const baseStyles =
		'font-semibold rounded-3xl h-[50px] transition-colors duration-200 flex items-center justify-center'

	const sizeStyles = {
		small: 'px-3 py-1 text-sm',
		medium: 'px-6 py-2',
		large: 'px-8 py-3 text-lg',
	}

	const variantStyles = {
		primary: 'bg-pink-400 text-white hover:bg-pink-500 active:bg-pink-600',
		secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400',
		transparent:
			'bg-transparent border-[2px] border-gray-700 text-black hover:bg-white/20 active:bg-white/30',
		outline:
			'bg-transparent text-pink-400 border border-pink-400 hover:bg-pink-50 active:bg-pink-100',
	}

	const disabledStyles = 'opacity-50 cursor-not-allowed'
	const loadingStyles = 'cursor-wait'
	const fullWidthStyles = 'w-full'

	const buttonStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${disabled ? disabledStyles : ''}
    ${isLoading ? loadingStyles : ''}
    ${fullWidth ? fullWidthStyles : ''}
    ${className}
  `

	return (
		<button
			onClick={onClick}
			disabled={disabled || isLoading}
			className={buttonStyles}
		>
			{isLoading ? (
				<>
					<FaSpinner className="mr-2 animate-spin" />
					Loading...
				</>
			) : (
				children
			)}
		</button>
	)
}
