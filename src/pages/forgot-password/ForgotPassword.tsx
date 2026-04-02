import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../../components/auth/AuthLayout'
import Button from '../../components/auth/Button'

const CheckCircleIcon = () => (
  <svg className="w-12 h-12 text-primary mx-auto animate-scale-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
)

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email and we'll send you a reset link"
      imageUrl="https://res.cloudinary.com/daqmbfctv/image/upload/q_auto/f_auto/v1775128233/charanjeet-dhiman-mHusyBu4bxM-unsplash_ag2rrl.jpg"
      imageAlt="African woman with phone"
    >
      {isSubmitted ? (
        <div className="text-center py-4 animate-fade-in">
          <CheckCircleIcon />
          <h3 className="text-lg font-semibold text-charcoal mt-4">Check your email</h3>
          <p className="text-gray-500 mt-2 text-sm">
            We've sent a password reset link to{' '}
            <span className="font-medium text-charcoal">{email}</span>
          </p>
          <p className="text-gray-400 mt-4 text-xs">
            Didn't receive the email?{' '}
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-primary hover:text-primary-dark transition-colors duration-200"
            >
              Try again
            </button>
          </p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5 auth-form-group stagger-1">
              <label className="block text-xs font-medium text-gray-600">Email address</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="auth-input pl-10"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="auth-form-group stagger-2">
              <Button type="submit" isLoading={isLoading}>
                Send reset link
              </Button>
            </div>
          </form>

          <div className="mt-5 text-center auth-form-group stagger-3">
            <p className="text-xs text-gray-500">
              Remember your password?{' '}
              <Link to="/sign-in" className="auth-link">
                Back to sign in
              </Link>
            </p>
          </div>
        </>
      )}
    </AuthLayout>
  )
}
