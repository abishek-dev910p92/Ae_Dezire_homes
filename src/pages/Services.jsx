import hero from '../assets/images/hero4.jpg'
export default function Services() {
  const services = [
    {
      title: "Residential Interior Design",
      description: "Transform your home into a sophisticated sanctuary with bespoke design solutions that reflect your personality and enhance your daily living experience.",
      icon: "🏠",
      gradient: "from-brand-primary to-brand-secondary",
      features: [
        "Full-home design & planning",
        "Custom furniture design",
        "Lighting & ambiance design",
        "Color palette curation",
        "Art & accessory selection"
      ],
      price: "Starting from  25,000",
      duration: "3-6 months"
    },
    {
      title: "Commercial Spaces",
      description: "Create inspiring professional environments that enhance productivity, reflect your brand identity, and leave lasting impressions on clients.",
      icon: "🏢",
      gradient: "from-accent-500 to-accent-600",
      features: [
        "Office space planning",
        "Retail environment design",
        "Hospitality interiors",
        "Brand integration",
        "Functional workflow design"
      ],
      price: "Starting from  50,000",
      duration: "6-12 months"
    },
    {
      title: "Luxury Styling & Curation",
      description: "Elevate your space with carefully selected premium furnishings, art pieces, and accessories that add sophistication and personality.",
      icon: "💎",
      gradient: "from-warm-500 to-warm-600",
      features: [
        "Premium furniture sourcing",
        "Art curation & placement",
        "Textile & fabric selection",
        "Accessory styling",
        "Seasonal refresh services"
      ],
      price: "Starting from  15,000",
      duration: "2-4 months"
    },
    {
      title: "Renovation & Remodeling",
      description: "Breathe new life into existing spaces with comprehensive renovation services that maximize potential while preserving character.",
      icon: "🔨",
      gradient: "from-primary-600 to-primary-700",
      features: [
        "Space reconfiguration",
        "Kitchen & bath design",
        "Structural planning",
        "Material selection",
        "Project management"
      ],
      price: "Starting from  75,000",
      duration: "8-18 months"
    },
    {
      title: "Sustainable Design",
      description: "Create beautiful, eco-conscious spaces using sustainable materials and energy-efficient solutions without compromising style.",
      icon: "🌿",
      gradient: "from-green-500 to-green-600",
      features: [
        "Eco-friendly materials",
        "Energy-efficient lighting",
        "Indoor air quality",
        "Sustainable sourcing",
        "Green certification support"
      ],
      price: "Starting from  30,000",
      duration: "4-8 months"
    },
    {
      title: "Virtual Design Consultation",
      description: "Professional design guidance delivered remotely, perfect for clients worldwide or those seeking expert advice on specific projects.",
      icon: "💻",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Video consultations",
        "Digital mood boards",
        "Shopping lists",
        "Layout recommendations",
        "3D visualizations"
      ],
      price: "Starting from  2,500",
      duration: "2-6 weeks"
    }
  ]

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section
      style={{height: '70vh'}}
      >
        {/* Background image layer */}
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Interior Design Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 to-warm-900/40"></div>
        </div>

        {/* Existing decorative gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-p-11mary25 to-brand-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-warm-400/20 to-accent-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg mb-8">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary-700">Our Services</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6">
            Comprehensive Design
            <span className="block text-gradient">Solutions</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            From intimate residential projects to large-scale commercial developments, 
            we offer tailored design services that bring your vision to life with exceptional attention to detail.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card-premium p-6 sm:p-8 lg:p-10 group hover:scale-105 transition-premium"
                style={{ animationDelay: ` {index * 0.1}s` }}
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br  {service.gradient} flex items-center justify-center mb-6 sm:mb-8 shadow-lg group-hover:shadow-xl transition-premium`}>
                  <span className="text-2xl sm:text-3xl">{service.icon}</span>
                </div>

                {/* Service Title */}
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-primary-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-primary-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-light">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                      <span className="text-primary-700 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing and Duration */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div>
                    <div className="text-xs sm:text-sm text-primary-500 mb-1">Starting Price</div>
                    <div className="text-xl sm:text-2xl font-display font-semibold text-primary-900">{service.price}</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-primary-500 mb-1">Timeline</div>
                    <div className="text-base sm:text-lg font-semibold text-primary-800">{service.duration}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="#contact" className="w-full button-premium py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg font-medium block text-center">
                  Schedule Consultation
                  <svg className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-warm-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-900 mb-3 sm:mb-4">
              Our Design Process
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 max-w-2xl mx-auto font-light px-2">
              A collaborative journey from initial concept to final installation, ensuring your complete satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your vision, lifestyle, and requirements through detailed consultations.",
                icon: "🔍"
              },
              {
                step: "02",
                title: "Concept Development",
                description: "Creating mood boards, sketches, and initial design concepts for your approval.",
                icon: "✏️"
              },
              {
                step: "03",
                title: "Design & Planning",
                description: "Developing detailed plans, 3D renderings, and comprehensive material selections.",
                icon: "📐"
              },
              {
                step: "04",
                title: "Implementation",
                description: "Overseeing construction, managing installations, and ensuring perfect execution.",
                icon: "🏗️"
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-premium group-hover:scale-110">
                  <span className="text-xl sm:text-2xl">{process.icon}</span>
                </div>
                <div className="font-display text-xl sm:text-2xl font-semibold text-primary-700 mb-1 sm:mb-2">{process.step}</div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-primary-900 mb-2 sm:mb-4">{process.title}</h3>
                <p className="text-primary-600 leading-relaxed text-sm sm:text-base px-2">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-brand-primary to-brand-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed font-light px-2">
            Let's discuss your project and create something extraordinary together. 
            Schedule your complimentary initial consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg sm:rounded-xl bg-white text-brand-primary shadow-xl hover:shadow-2xl transition-premium hover:scale-105 block text-center">
              Book Free Consultation
            </a>
            {/* <button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 transition-premium">
              Download Portfolio
            </button> */}
          </div>
        </div>
      </section>
    </div>
  )
}