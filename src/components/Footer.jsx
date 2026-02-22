export default function Footer() {
  const services = [
    'Residential Interior Design',
 
    'Kitchen & Bath Remodel',
    'Furniture & Decor Selection',
    'Color Consultation',
    'Full Home Renovation'
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
   
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      icon: '📸',
      href: 'https://instagram.com/aeDezirehomes',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Pinterest',
      icon: '📌',
      href: 'https://pinterest.com/aeDezirehomes',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      href: 'https://linkedin.com/company/aeDezirehomes',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Facebook',
      icon: '👥',
      href: 'https://facebook.com/aeDezirehomes',
      color: 'from-blue-600 to-blue-800'
    }
  ]

  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      content: 'C9CP+GH, LIG Chitrapuri Colony, Radhe Nagar, Hyderabad, Rai Durg, Telangana 500104'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+91 7337278425/ 879052483\nMon-Sat: 9AM-6PM PST'
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'hello@aedezirehomes.com\nWe respond within 24 hours'
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                <span className="text-white font-display font-semibold text-xl">AE</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">AE Dezire Homes</h3>
                <p className="text-primary-300 text-sm">Luxury Interior Design Studio</p>
              </div>
            </div>
            
            <p className="text-primary-300 leading-relaxed mb-8">
              Transforming spaces into sophisticated sanctuaries that reflect your unique personality and elevate your daily living experience.
            </p>

            {/* Social Links */}
            
          </div>

          {/* Services Section */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-primary-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-brand-accent rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-brand-accent rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-xl font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">{info.icon}</span>
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">{info.title}</h5>
                    <p className="text-primary-300 text-sm leading-relaxed whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
          
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12"></div>

        {/* Awards & Recognition */}
        <div className="text-center mb-12">
          <h4 className="font-display text-lg font-semibold mb-6">Awards & Recognition</h4>
          <div className="flex flex-wrap justify-center gap-8">
            {['🏆 Best Interior Design Studio 2007', '🎨 Design Excellence Award', '⭐ Luxury Living Awards'].map((award, index) => (
              <div key={index} className="flex items-center space-x-2 text-primary-300">
                <span className="text-lg">{award.split(' ')[0]}</span>
                <span className="text-sm">{award.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-400 text-sm">
            © 2026 AE Dezire Homes. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-primary-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-primary-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#accessibility" className="text-primary-400 hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent text-white shadow-xl hover:shadow-2xl transition-premium hover:scale-110 group"
        title="Back to top"
      >
        <svg className="w-6 h-6 mx-auto group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}