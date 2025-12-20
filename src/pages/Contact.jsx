import { useState } from 'react'
import heroBg from '../assets/images/hero2.jpg'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const projectTypes = [
    'Residential Interior Design',
    'Commercial Space Design',
    'Kitchen & Bath Remodel',
    'Furniture & Decor Selection',
    'Color Consultation',
    'Full Home Renovation'
  ]

  const budgetRanges = [
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ]

  const timelines = [
    'As soon as possible',
    'Within 1-3 months',
    'Within 3-6 months',
    'Within 6-12 months',
    'Just exploring options'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Studio',
      content: '123 Design Avenue\nBeverly Hills, CA 90210',
      action: 'Get Directions'
    },
    {
      icon: '📞',
      title: 'Call Us',
      content: '+91 90003 38400, +91 733-7278425\nMon-Sat: 9AM-6PM PST',
      action: 'Call Now'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      content: 'hello@aedezirehomes.com\nWe respond within 24 hours',
      action: 'Send Email'
    }
  ]

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32">
      {/* Hero Section */}
      <section
      style={{height: '80vh'}}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 to-warm-100/80" />

        {/* Decorative gradient blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-br from-warm-400/20 to-accent-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-1 sm:py-2 shadow-lg mb-4 sm:mb-6 md:mb-8">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-primary-700">Get In Touch</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-900 mb-4 sm:mb-6">
            Let's Start Your
            <span className="block text-gradient">Design Journey</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-primary-700 max-w-2xl sm:max-w-3xl mx-auto font-light leading-relaxed px-2">
            Ready to transform your space? We'd love to hear about your project and discuss how 
            we can bring your vision to life with our signature approach to luxury interior design.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-900 mb-3 sm:mb-4">
              Connect With Us
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 max-w-2xl mx-auto font-light px-2">
              Choose your preferred way to reach out—we're here to help bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-premium p-4 sm:p-6 md:p-8 text-center group hover:scale-105 transition-premium">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-premium">
                  <span className="text-2xl sm:text-3xl">{info.icon}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-primary-900 mb-3 sm:mb-4">{info.title}</h3>
                <p className="text-primary-600 leading-relaxed mb-4 sm:mb-6 whitespace-pre-line text-sm sm:text-base">{info.content}</p>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-brand-primary text-white rounded-lg sm:rounded-xl font-medium hover:bg-brand-accent transition-colors shadow-lg hover:shadow-xl transition-premium text-sm sm:text-base">
                  {info.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-warm-50 to-accent-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-900 mb-3 sm:mb-4">
              Tell Us About Your Project
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 max-w-2xl mx-auto font-light px-2">
              Fill out the form below and we'll get back to you within 24 hours to schedule your complimentary consultation.
            </p>
          </div>

          {isSubmitted ? (
            <div className="card-premium p-6 sm:p-8 md:p-12 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 sm:w-20 md:w-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-primary-900 mb-2 sm:mb-4">Thank You!</h3>
              <p className="text-primary-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Your message has been sent successfully. We'll contact you within 24 hours to discuss your project.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-premium p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div>
                  <label className="block text-primary-900 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-primary-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-primary-900 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-primary-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div>
                  <label className="block text-primary-900 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-primary-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none text-sm sm:text-base"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-primary-900 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-primary-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none text-sm sm:text-base"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div>
                  <label className="block text-primary-900 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-primary-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none text-sm sm:text-base"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-primary-900 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-primary-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none text-sm sm:text-base"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map(timeline => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <label className="block text-primary-900 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Tell us about your project *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-primary-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none resize-none text-sm sm:text-base"
                  placeholder="Describe your vision, style preferences, and any specific requirements..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg sm:rounded-xl bg-brand-primary text-white shadow-xl hover:shadow-2xl transition-premium hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-900 mb-3 sm:mb-4">
              Find Our Studio
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 max-w-2xl mx-auto font-light px-2">
              Visit our design studio in Beverly Hills for a personalized consultation.
            </p>
          </div>

          <div className="aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-primary-100 to-warm-100 flex items-center justify-center">
              <div className="text-center px-4">
                <div className="w-16 h-16 sm:w-20 md:w-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-primary-700 font-medium text-base sm:text-lg mb-1 sm:mb-2">Interactive Map</p>
                <p className="text-primary-600 text-xs sm:text-sm">123 Design Avenue, Beverly Hills, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}