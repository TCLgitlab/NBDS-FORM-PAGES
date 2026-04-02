import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../../components/auth/AuthLayout'
import Input from '../../components/auth/Input'
import Button from '../../components/auth/Button'

const EmailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
)

const LockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
  </svg>
)

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
  </svg>
)

const EyeSlashIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
  </svg>
)

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isFocused, setIsFocused] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to get access to the admin dashboard"
      imageUrl="https://res.cloudinary.com/daqmbfctv/image/upload/q_auto/f_auto/v1775128237/osarugue-igbinoba-1YEsM_v9t4c-unsplash_t0pzyx.jpg"
      imageAlt="African community coming together"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className={`auth-form-group stagger-1 ${isFocused === 'email' ? 'scale-[1.01]' : ''} transition-transform duration-200`}>
          <Input
            type="email"
            name="email"
            label="Email address"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setIsFocused('email')}
            onBlur={() => setIsFocused(null)}
            icon={<EmailIcon />}
            required
            autoComplete="email"
          />
        </div>

        <div className={`space-y-1.5 auth-form-group stagger-2 ${isFocused === 'password' ? 'scale-[1.01]' : ''} transition-transform duration-200`}>
          <label className="block text-xs font-medium text-gray-600">Password</label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200">
              <LockIcon />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => setIsFocused('password')}
              onBlur={() => setIsFocused(null)}
              className="auth-input pl-10 pr-10"
              required
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              tabIndex={-1}
            >
              {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between auth-form-group stagger-3">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="auth-checkbox"
            />
            <span className="text-xs text-charcoal/70 group-hover:text-charcoal transition-colors duration-200">Remember me</span>
          </label>
          <Link to="/forgot-password" className="text-xs text-primary hover:text-primary-dark transition-colors duration-200">
            Forgot password?
          </Link>
        </div>

        <div className="auth-form-group stagger-4">
          <Button type="submit" isLoading={isLoading}>
            Sign in
          </Button>
        </div>
      </form>

      <div className="mt-5 text-center auth-form-group stagger-5">
        <p className="text-xs text-charcoal/60">
          Don't have an account?{' '}
          <Link to="/sign-up" className="auth-link">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
