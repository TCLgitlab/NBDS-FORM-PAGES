import { ReactNode, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface AuthLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
  imageUrl?: string
  imageAlt?: string
  tagline?: string
  wide?: boolean
}

const Logo = () => (
  <img 
    src="https://res.cloudinary.com/daqmbfctv/image/upload/q_auto/f_auto/v1772714010/logo.jpg_i1jmtu.jpg" 
    alt="NBDS Logo" 
    className="w-10 h-10 object-contain rounded-full"
  />
)

const NigerianFlag = () => (
  <svg width="48" height="32" viewBox="0 0 48 32" className="shrink-0">
    <rect width="16" height="32" fill="#008148"/>
    <rect x="16" width="16" height="32" fill="#FFFFFF"/>
    <rect x="32" width="16" height="32" fill="#008148"/>
  </svg>
)

export default function AuthLayout({
  children,
  title,
  subtitle,
  imageUrl = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80',
  imageAlt = 'Community and humanitarian mission',
  tagline = 'An evolving and innovative delivery platform for nationwide social and humanitarian assistance to improve lives of vulnerable Nigerians.',
  wide = false
}: AuthLayoutProps) {
  const [, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(false)
    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [title])

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden lg:flex lg:w-[45%] xl:w-[48%] relative">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A6B1F]/70 via-[#085315]/80 to-[#041a08]" />
        
        <div className="relative z-10 h-full flex flex-col p-10 xl:p-14 animate-slide-in">
          <Link to="/sign-in">
            <div className="flex items-center gap-3">
              <Logo />
              <div className="text-white">
                <span className="text-2xl font-bold tracking-wide">NBDS</span>
                <span className="block text-xs text-white/80 font-normal mt-0.5">National Benefits Delivery System</span>
              </div>
            </div>
          </Link>
          
          <div className="flex-1 flex flex-col justify-center max-w-lg">
            <NigerianFlag />
            <h2 className="text-white text-3xl xl:text-4xl font-bold mt-6 leading-tight tracking-tight">
              Transforming Lives,<br />One Household at a Time
            </h2>
            <p className="text-white/75 text-base mt-5 leading-relaxed">
              {tagline}
            </p>
            
            <div className="flex items-center gap-4 mt-8">
              <div className="h-px flex-1 bg-white/20" />
              <span className="text-white/50 text-xs uppercase tracking-widest">Federal Republic of Nigeria</span>
              <div className="h-px flex-1 bg-white/20" />
            </div>
          </div>
          
          <div className="text-white/40 text-xs">
            A National Social Safety Nets Programme
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center overflow-y-auto bg-[#f8f9f8] p-6 sm:p-8 lg:p-12">
        <div className={`w-full ${wide ? 'max-w-2xl' : 'max-w-[400px]'}`}>
          <div className="lg:hidden mb-6 text-center">
            <div className="flex items-center justify-center gap-3 animate-fade-in">
              <Logo />
              <div className="text-charcoal text-left">
                <span className="text-xl font-bold">NBDS</span>
                <span className="block text-[11px] text-charcoal/60">National Benefits Delivery System</span>
              </div>
            </div>
          </div>
          
          <div className={`bg-white rounded-lg shadow-lg border border-gray-100 ${wide ? 'p-6 lg:p-8' : 'p-6 sm:p-8'} auth-card`}>
            <div className={`${wide ? 'mb-5' : 'mb-6'}`}>
              <h1 className={`font-semibold text-charcoal tracking-tight ${wide ? 'text-xl' : 'text-xl sm:text-2xl'}`}>{title}</h1>
              {subtitle && (
                <p className="text-charcoal/60 mt-1 text-sm">{subtitle}</p>
              )}
            </div>
            
            {children}
            
            <div className={`${wide ? 'mt-5 pt-4' : 'mt-6 pt-5'} border-t border-gray-100 text-center`}>
              <p className="text-[11px] text-charcoal/40">
                <span className="font-normal">Powered by</span>{' '}
                <span className="font-medium text-charcoal/60">Techspecialist</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
