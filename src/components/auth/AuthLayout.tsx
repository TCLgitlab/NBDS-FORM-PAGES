import { ReactNode } from 'react'
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
    src="https://res.cloudinary.com/daqmbfctv/image/upload/v1777298008/NBDS-Logo_uwd01j.png"
    alt="NBDS Logo"
    className="w-11 h-11 object-contain rounded-full"
  />
  // <img 
  //   src="https://res.cloudinary.com/daqmbfctv/image/upload/q_auto/f_auto/v1772714010/logo.jpg_i1jmtu.jpg" 
  //   alt="NBDS Logo" 
  //   className="w-10 h-10 object-contain rounded-full"
  // />
)

const Logo2 = () => (
  <img
    src="https://res.cloudinary.com/daqmbfctv/image/upload/q_auto/f_auto/v1772714010/logo.jpg_i1jmtu.jpg"
    alt="NCTO Logo"
    className="w-6 h-6 object-contain rounded-full"
  /> 
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

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden lg:flex lg:w-[45%] xl:w-[48%] relative">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A6B1F]/70 via-[#085315]/60 to-[#041a08]" />

        <div className="relative z-10 h-full flex flex-col p-10 xl:p-14">

        <div className="flex-1 flex flex-col justify-end max-w-lg bottom-0">
        {/* <NigerianFlag /> */}
        <div className="bg-white/10 rounded-lg py-4 px-4 backdrop-blur-lg">
          <h2 className="text-white text-xl xl:text-xl font-bold leading-tight tracking-tight">
            Transforming Lives,<br />One Household at a Time
          </h2>
          <p className="text-white/75 text-xs mt-3 leading-relaxed">
            {tagline}
          </p>
        </div>
          </div>

          <div className="absolute bottom-4 flex items-center gap-3 justify-center text-white/40 text-xs">
        <Logo2 />
        <p>The National Cash Transfer Office (NCTO)</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center overflow-y-auto bg-[#f8f9f8] p-6 sm:p-8 lg:p-12">
        <div className={`w-full ${wide ? 'max-w-2xl' : 'max-w-[400px]'}`}>
          <div className="lg:hidden mb-6 text-center mt-4">
            <div className="flex items-center justify-center gap-3">
              <Logo />
              <div className="text-charcoal text-left">
                <span className="text-xl font-bold">NBDS</span>
                <span className="block text-[11px] text-charcoal/60">National Benefits Delivery System</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center mb-6 mt-4">
            <Link to="/sign-in">
              <div className="flex items-center gap-3">
                <Logo />
                <div className="text-charcoal text-left">
                  <span className="text-xl font-bold">NBDS</span>
                  <span className="block text-[11px] text-charcoal/60">National Benefits Delivery System</span>
                </div>
              </div>
            </Link>
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
