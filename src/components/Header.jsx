import { useState } from 'react'
 
export default function Header({ current }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { key: 'home', label: 'Home' },
    { key: 'services', label: 'Services' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 animate-fadeIn backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        <div className="mx-auto mt-2 sm:mt-4 max-w-7xl">
          <div className="flex h-16 sm:h-20 items-center justify-between rounded-2xl sm:rounded-4xl backdrop-premium border-white/20 shadow-xl transition-premium relative overflow-hidden">
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full blur-5xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-warm-400 to-accent-400 rounded-full blur-2xl"></div>
            </div>
            {/* Brand Logo */}
            <div className="flex items-center pl-3 sm:pl-8 relative z-10">
              <a 
                href="#home" 
                className="group flex items-center space-x-2 sm:space-x-4 transition-premium"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 to-brand-accent/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-premium group-hover:scale-110">
                    <span className="text-white font-display font-semibold text-lg sm:text-xl">AE</span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="relative">
                    <h1 className="font-display text-xl font-semibold text-primary-800 group-hover:text-brand-primary transition-premium">
                      AE Dezire Homes
                    </h1>
                    <p className="text-xs text-primary-600 font-light tracking-wide group-hover:text-brand-primary/80 transition-premium">
                      Premium Interior Design
                    </p>
                    {/* Creative underline effect */}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3 pr-4 xl:pr-8">
              {links.map((link, index) => (
                <a
                  key={link.key}
                  href={`#${link.key}`}
                  className={`
                    relative px-4 xl:px-6 py-2 xl:py-3 rounded-lg xl:rounded-xl text-xs xl:text-sm font-medium transition-premium group overflow-hidden
                    ${current === link.key 
                      ? 'text-white bg-gradient-to-r from-brand-primary to-brand-accent shadow-lg' 
                      : 'text-primary-600 hover:text-brand-primary hover:bg-gradient-to-r hover:from-primary-100/50 hover:to-warm-100/50'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="w-2 h-2 bg-current rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </span>
                  
                  {/* Creative hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Animated underline */}
                  <div className={`
                    absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent transition-all duration-300
                    ${current === link.key ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}></div>
                  
                  {/* Subtle glow effect */}
                  {current === link.key && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 blur-sm opacity-50"></div>
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden pr-4 sm:pr-6">
              <button 
                onClick={toggleMenu}
                className="p-3 rounded-xl gradient-primary text-white hover:shadow-lg hover:scale-110 transition-premium relative z-50 shadow-md"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg 
                  className={`w-5 h-5 transition-all duration-300 ${isMenuOpen ? 'rotate-90 scale-110' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-fadeIn sm:bg-black/20"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-full sm:w-80 max-w-full bg-white/98 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Elegant background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-warm-400/20 to-accent-400/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="p-4 sm:p-6 h-full flex flex-col relative z-10">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                <img src="/logo.png" alt="AE Dezire Homes" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary-800">AE Dezire Homes</h3>
                <p className="text-xs text-primary-600">Premium Interior Design</p>
              </div>
            </div>
            <button 
              onClick={closeMenu}
              className="p-2 rounded-lg text-primary-600 hover:text-brand-primary hover:bg-primary-100/50 transition-premium"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 space-y-2 sm:space-y-3 bg-white/90 rounded-2xl p-4">
            {links.map((link, index) => (
              <a
                key={link.key}
                href={`#${link.key}`}
                onClick={closeMenu}
                className={`
                  flex items-center px-3 sm:px-4 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium transition-premium group relative overflow-hidden
                  ${current === link.key 
                    ? 'text-white bg-gradient-to-r from-brand-primary to-brand-accent shadow-lg' 
                    : 'text-primary-600 hover:text-brand-primary hover:bg-gradient-to-r hover:from-primary-100/50 hover:to-warm-100/50'
                  }
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="w-2 h-2 bg-brand-accent rounded-full mr-4 group-hover:scale-150 transition-transform relative z-10"></span>
                <span className="relative z-10">{link.label}</span>
                <svg className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                
                {/* Creative shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            ))}
          </nav>

          {/* Mobile Contact Info */}
          <div className="border-t border-primary-200/50 pt-6 mt-6 bg-white/90 rounded-2xl p-4">
            <h4 className="font-display text-sm font-semibold text-primary-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a href="tel:+13105550123" className="flex items-center space-x-4 text-sm text-primary-600 hover:text-brand-primary transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Call Us</div>
                  <div className="text-xs opacity-75">+91 879052483</div>
                </div>
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="mailto:hello@aedezirehomes.com" className="flex items-center space-x-4 text-sm text-primary-600 hover:text-brand-primary transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Email Us</div>
                  <div className="text-xs opacity-75">hello@aedezirehomes.com</div>
                </div>
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}