import hero from '../assets/images/hero4.jpg'
import one from '../assets/images/1.jpeg'
import two from '../assets/images/2.jpeg'
import three from '../assets/images/3.jpeg'
import four from '../assets/images/4.jpeg'
import bathroom from '../assets/images/bathroom.jpg'
import hero2 from '../assets/videos/hero.mp4'
import video4 from '../assets/videos/video4.mp4'
import call from '../assets/images/call.png'
import video2 from '../assets/videos/video2.mp4'
import video3 from '../assets/videos/video3.mp4'
import { FaHome, FaBuilding, FaPaintBrush } from 'react-icons/fa'
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Premium Showcase */}
      <section 
        className="flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
       style={{height: '80vh'}}
      >
        <video 
          src={hero2}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 to-transparent"></div>
        
        {/* Background Gradient */}
        <div className="absolute inset-0 gradient-luxury opacity-10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-warm-400/20 to-accent-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg mb-8 animate-fadeInUp">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary-800">AE Dezire Homes Interior Design</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Timeless Interiors,
            <span className="block text-gradient text-3xl sm:text-4xl md:text-6xl lg:text-7xl">Tailored For You</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-12 animate-fadeInUp font-light leading-relaxed px-2" style={{animationDelay: '0.4s'}}>
             
            creating environments that reflect your unique lifestyle and aspirations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <a href="#contact" className="button-premium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-xl shadow-xl hover:shadow-2xl transition-premium">
              Get Quote
              <svg className="inline-block ml-2 w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" className="group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-xl bg-black/40 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-brand-primary transition-premium block text-center">
              Book Consultation
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 bg-gradient-to-br from-white to-warm-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-900 mb-4">
              Our Signature Services
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto font-light">
              From concept to completion, we offer comprehensive design solutions that transform your space into a masterpiece.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp" style={{animationDelay: '0.2s'}} >
            {[
              {
                title: "Residential Design",
                description: "Bespoke interiors that reflect your personality and enhance your daily living experience.",
                icon: <FaHome />,
                gradient: "from-brand-primary to-brand-secondary"
              },
              {
                title: "Commercial Spaces",
                description: "Professional environments that inspire productivity and leave lasting impressions.",
                icon: <FaBuilding/>,
                gradient: "from-accent-500 to-accent-600"
              },
              {
                title: "Luxury Styling",
                description: "Curated selections of premium furnishings and art for sophisticated spaces.",
                icon: <FaPaintBrush />,
                gradient: "from-warm-500 to-warm-600"
              }
            ].map((service, index) => (
              <div key={index} className="card-premium p-8 text-center group hover:scale-105 transition-premium duration-300 bg-gradient-to-br" style={{animationDelay: `${index * 0.2}s`, backgroundColor: '#333'}}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-premium duration-300`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary-300 mb-4">{service.title}</h3>
                <p className="text-primary-400 leading-relaxed">{service.description}</p>
                <div className="mt-6">
                  <span className="inline-flex items-center text-brand-primary font-medium group-hover:translate-x-2 transition-transform">
                    Learn more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-primary-50 to-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="animate-slideInRight order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-brand-primary/10 rounded-full px-3 sm:px-4 py-1 sm:py-2 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium text-brand-primary">Featured Project's</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-900 mb-4 sm:mb-6">
                Contemporary Villa
                <span className="block text-gradient">Hyderabad</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-primary-600 mb-6 sm:mb-8 leading-relaxed font-light">
                A stunning 12,000 sq ft contemporary villa featuring floor-to-ceiling windows, 
                custom millwork, and a sophisticated palette of warm neutrals and rich textures.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-brand-primary">12,000</div>
                  <div className="text-xs sm:text-sm text-primary-600">Square Feet</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-brand-primary">18</div>
                  <div className="text-xs sm:text-sm text-primary-600">Months</div>
                </div>
              </div>
              <a href="#contact" className="button-premium px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl">
                Contact Us
              </a>
            </div>
            <div className="relative animate-fadeInUp order-1 lg:order-2 mb-8 lg:mb-0" style={{animationDelay: '0.4s'}}>
              <div className="aspect-square rounded-2xl sm:rounded-3xl gradient-warm shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center">
                   
                   <img src={hero} alt="Contemporary Villa" className="w-full h-full object-cover rounded-2xl sm:rounded-3xl" />
                  
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-brand-accent/30 to-brand-primary/30 rounded-full blur-xl sm:blur-2xl"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-warm-400/30 to-accent-400/30 rounded-full blur-2xl sm:blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stunning Offer Banners Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-900 mb-4">
              Exclusive Offers
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto font-light">
              Transform your space with our limited-time premium packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Offer Card 1 - Luxury Package */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="absolute top-0 right-0 bg-white/20 backdrop-blur-sm rounded-bl-3xl px-4 py-2">
                <span className="text-sm font-semibold">Limited Time</span>
              </div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">Luxury Living Package</h3>
                <p className="text-white/90 mb-4">Complete home transformation with premium materials</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-3xl font-bold">15,999</span>
                  <span className="text-white/70 line-through">22,999</span>
                  <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold">30% OFF</span>
                </div>
              </div>
              <a href="#contact" className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 py-3 rounded-xl font-semibold transition-all duration-300 block text-center">
                Get Quote
              </a>
            </div>

            {/* Offer Card 2 - Kitchen Special */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-warm-500 via-warm-600 to-accent-500 p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="absolute top-0 right-0 bg-white/20 backdrop-blur-sm rounded-bl-3xl px-4 py-2">
                <span className="text-sm font-semibold">Popular</span>
              </div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">Kitchen Excellence</h3>
                <p className="text-white/90 mb-4">Modern kitchen design with smart storage solutions</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-3xl font-bold">8,999</span>
                  <span className="text-white/70 line-through">12,999</span>
                  <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold">25% OFF</span>
                </div>
              </div>
              <a href="#contact" className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 py-3 rounded-xl font-semibold transition-all duration-300 block text-center">
                Get Quote
              </a>
            </div>

            {/* Offer Card 3 - Bedroom Retreat */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="absolute top-0 right-0 bg-white/20 backdrop-blur-sm rounded-bl-3xl px-4 py-2">
                <span className="text-sm font-semibold">New</span>
              </div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">Bedroom Sanctuary</h3>
                <p className="text-white/90 mb-4">Create your perfect sleep sanctuary with our bedroom package</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-3xl font-bold">5,999</span>
                  <span className="text-white/70 line-through">7,999</span>
                  <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold">20% OFF</span>
                </div>
              </div>
              <a href="#contact" className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 py-3 rounded-xl font-semibold transition-all duration-300 block text-center">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Callback Horizontal Big Card */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                  Ready to Transform Your Space?
                </h2>
                <p className="text-white/90 text-lg mb-6 max-w-lg">
                  Get a free consultation with our design experts. We'll help you create the perfect interior that reflects your style and personality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 flex-1"
                  />
                  <button className="bg-white text-brand-primary px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300">
                    Call Me Back
                  </button>
                </div>
                <p className="text-white/70 text-sm mt-3">
                  We'll call you within 30 minutes during business hours
                </p>
              </div>
              <div className="relative">
                
                   <img src={call} alt="Contemporary Villa" className="w-full h-full object-cover rounded-3xl" />
                 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
              See Our Work in Action
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              Watch how we transform ordinary spaces into extraordinary living experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Video */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0">
{/* YouTube video needs iframe, not <video>. Also provide a fallback poster image. */}
 <video className="w-full h-full object-cover" src={video3} autoPlay loop muted playsInline />
                </div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold">Featured Project's</span>
                </div>
              </div>
            </div>

            {/* Secondary Videos */}
            <div className="aspect-video bg-gradient-to-br from-warm-500/20 to-warm-600/20 rounded-2xl overflow-hidden shadow-xl">
              <div className="h-full flex items-center justify-center">
                <video className="w-full h-full object-cover" src={video2} autoPlay loop muted playsInline />
              </div>
            </div>

            <div className="aspect-video bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl overflow-hidden shadow-xl">
              <div className="h-full flex items-center justify-center">
                 <video className="w-full h-full object-cover" src={video4} autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto font-light">
              From concept to completion, we deliver exceptional interior design solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Interior Design */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-primary-100">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-900 mb-3">Interior Design</h3>
              <p className="text-primary-600 mb-6">Complete interior design solutions that reflect your personality and lifestyle.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-primary-600">
                  <svg className="w-4 h-4 text-brand-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Space planning & layout
                </li>
                <li className="flex items-center text-primary-600">
                  <svg className="w-4 h-4 text-brand-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Color scheme selection
                </li>
                <li className="flex items-center text-primary-600">
                  <svg className="w-4 h-4 text-brand-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Furniture & decor selection
                </li>
              </ul>
              <a href="#contact" className="w-full gradient-primary text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 block text-center">
                Learn More
              </a>
            </div>

            {/* Service 2 - Home Staging */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-primary-100">
              <div className="w-16 h-16 bg-gradient-to-br from-warm-500 to-warm-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-900 mb-3">Home Staging</h3>
              <p className="text-primary-600 mb-6">Professional staging services to maximize your property's appeal and value.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-primary-600">
                  <svg className="w-4 h-4 text-brand-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Furniture rental
                </li>
                <li className="flex items-center text-primary-600">
                  <svg className="w-4 h-4 text-brand-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Professional photography
                </li>
                <li className="flex items-center text-primary-600">
                  <svg className="w-4 h-4 text-brand-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Market-ready presentation
                </li>
              </ul>
              <a href="#contact" className="w-full bg-gradient-to-r from-warm-500 to-warm-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 block text-center">
                Book Service
              </a>
            </div>

            {/* Service 3 - Renovation */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-primary-100">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-900 mb-3">Renovation</h3>
              <p className="text-primary-600 mb-6">Complete renovation services from concept to completion with premium materials.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-primary-600">
                  <svg className="w-4 h-4 text-brand-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full project management
                </li>
                <li className="flex items-center text-primary-600">
                  <svg className="w-4 h-4 text-brand-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Premium materials
                </li>
                <li className="flex items-center text-primary-600">
                  <svg className="w-4 h-4 text-brand-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Expert craftsmanship
                </li>
              </ul>
              <a href="#contact" className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 block text-center">
                Start Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-900 mb-4">
              Our Recent Work
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto font-light">
              Explore our portfolio of stunning interior transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Portfolio Item 1 */}
            <div className="group relative aspect-square bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img src={one} alt="Modern Living Room" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-lg font-semibold mb-1">Modern Living Room</h3>
                <p className="text-white/80 text-sm mb-3">Hyderabad</p>
                <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">
                  AE Dezire Homes
                </button>
              </div>
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="group relative aspect-square bg-gradient-to-br from-warm-500/20 to-warm-600/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img src={two} alt="Luxury Kitchen" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-lg font-semibold mb-1">Hall</h3>
                <p className="text-white/80 text-sm mb-3">Hyderabad</p>
                <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">
                  AE Dezire Homes
                </button>
              </div>
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="group relative aspect-square bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img src={three} alt="Master Bedroom" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-lg font-semibold mb-1">Master Bedroom</h3>
                <p className="text-white/80 text-sm mb-3">Hyderabad</p>
                <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">
                  AE Dezire Homes
                </button>
              </div>
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>

            {/* Portfolio Item 4 */}
            <div className="group relative aspect-square bg-gradient-to-br from-primary-600/20 to-primary-700/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img src={four} alt="Home Office" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-lg font-semibold mb-1">Home Dine</h3>
                <p className="text-white/80 text-sm mb-3">Hyderabad</p>
                <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">
                  AE Dezire Homes
                </button>
              </div>
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>

            {/* Portfolio Item 5 */}
            <div className="group relative aspect-square bg-gradient-to-br from-secondary-500/20 to-secondary-600/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img src={bathroom} alt="Bathroom Spa" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-lg font-semibold mb-1">Bathroom Spa</h3>
                <p className="text-white/80 text-sm mb-3">Malibu Beach House</p>
                <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">
                  AE Dezire Homes
                </button>
              </div>
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>

            {/* Portfolio Item 6 */}
            <div className="group relative aspect-square bg-gradient-to-br from-warm-400/20 to-accent-400/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img src={hero} alt="Outdoor Living" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-lg font-semibold mb-1">Outdoor Living</h3>
                <p className="text-white/80 text-sm mb-3">Hyderabad</p>
                <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">
                  AE Dezire Homes
                </button>
              </div>
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="button-premium px-8 py-4 rounded-xl font-semibold">
              Contact Us
              <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-900 mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 max-w-2xl mx-auto font-light px-2">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-primary-50 to-warm-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="flex text-yellow-400 text-base sm:text-lg">
                  ★★★★★
                </div>
              </div>
              <p className="text-primary-700 mb-4 sm:mb-6 font-light leading-relaxed text-sm sm:text-base">
                "Dezire Homes transformed our house into a dream home. Their attention to detail and creative vision exceeded all our expectations."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  SM
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="font-semibold text-primary-900 text-sm sm:text-base">Sarah Mitchell</h4>
                  <p className="text-xs sm:text-sm text-primary-600">Hyderabad</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-primary-50 to-warm-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="flex text-yellow-400 text-base sm:text-lg">
                  ★★★★★
                </div>
              </div>
              <p className="text-primary-700 mb-4 sm:mb-6 font-light leading-relaxed text-sm sm:text-base">
                "Professional, creative, and incredibly talented. They brought our vision to life while staying within budget. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  JC
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="font-semibold text-primary-900 text-sm sm:text-base">James Chen</h4>
                  <p className="text-xs sm:text-sm text-primary-600">CEO, Tech Startup</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-primary-50 to-warm-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="flex text-yellow-400 text-base sm:text-lg">
                  ★★★★★
                </div>
              </div>
              <p className="text-primary-700 mb-4 sm:mb-6 font-light leading-relaxed text-sm sm:text-base">
                "The team at Dezire Homes is exceptional. They made the entire process smooth and enjoyable. Our space is now absolutely stunning."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  ER
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="font-semibold text-primary-900 text-sm sm:text-base">Emma Rodriguez</h4>
                  <p className="text-xs sm:text-sm text-primary-600">Restaurant Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}