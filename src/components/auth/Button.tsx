import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  isLoading?: boolean
}

const LoadingSpinner = () => (
  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
  </svg>
)

export default function Button({
  children,
  variant = 'primary',
  isLoading = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = variant === 'primary' 
    ? 'auth-btn-primary' 
    : variant === 'secondary' 
      ? 'auth-btn-secondary' 
      : 'w-full h-12 text-charcoal font-medium transition-all duration-200 hover:text-primary'

  return (
    <button
      className={`${baseClasses} ${className} flex items-center justify-center gap-2`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <LoadingSpinner />
          <span>Processing...</span>
        </>
      ) : (
        children
      )}
    </button>
  )
}
