import React, { useState } from 'react'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

export const InputField: React.FC<InputFieldProps> = ({
	label,
	className,
	...props
}) => {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<div className="relative mb-4">
			{label && (
				<label className="mb-1 block text-sm font-medium text-gray-700">
					{label}
				</label>
			)}
			<input
				{...props}
				className={`w-full border-b border-gray-300 bg-transparent p-2 text-sm text-gray-700 outline-none transition-all focus:border-gray-500 ${className}`}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			<div
				className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gray-500 transition-all duration-300 ${
					isFocused ? 'w-full' : ''
				}`}
			></div>
		</div>
	)
}
