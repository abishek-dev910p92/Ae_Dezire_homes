import about from '../assets/images/about.png'
import heroBg from '../assets/images/hero3.jpg'
export default function About() {
  const team = [
    {
      name: "Alexandra Everhart",
      role: "Founder & Principal Designer",
      bio: "With over 15 years of experience in luxury interior design, Alexandra has transformed countless spaces into sophisticated sanctuaries. Her signature style blends timeless elegance with contemporary comfort.",
      initials: "AE",
      expertise: ["Luxury Residential", "Contemporary Design", "Space Planning"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Senior Interior Designer",
      bio: "Marcus specializes in commercial spaces and sustainable design. His innovative approach to functionality and aesthetics has earned him recognition in several industry publications.",
      initials: "MR",
      expertise: ["Commercial Design", "Sustainable Materials", "Brand Integration"]
    },
    {
      name: "Sophia Chen",
      role: "Design Consultant",
      bio: "Sophia brings a fresh perspective to every project with her background in art history and textile design. She excels at creating cohesive color palettes and sourcing unique pieces.",
      initials: "SC",
      expertise: ["Color Theory", "Art Curation", "Textile Design"]
    }
  ]

  const values = [
    {
      title: "Timeless Elegance",
      description: "We create designs that transcend trends, focusing on enduring beauty and sophisticated aesthetics that stand the test of time.",
      icon: "⏳"
    },
    {
      title: "Personalized Approach",
      description: "Every project is uniquely tailored to reflect your personality, lifestyle, and aspirations, ensuring your space feels authentically yours.",
      icon: "🎯"
    },
    {
      title: "Exceptional Quality",
      description: "We partner with master craftsmen and source premium materials to deliver impeccable quality in every detail of your project.",
      icon: "💎"
    },
    {
      title: "Sustainable Practices",
      description: "Environmental responsibility guides our choices, from material selection to waste reduction, creating beautiful spaces with conscience.",
      icon: "🌿"
    }
  ]

  const achievements = [
    {
      number: "150+",
      label: "Projects Completed",
      description: "Residential and commercial spaces transformed"
    },
    {
      number: "15+",
      label: "Years of Experience",
      description: "Creating exceptional interiors since 2009"
    },
    {
      number: "12",
      label: "Design Awards",
      description: "Recognized for excellence and innovation"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Our clients recommend us to others"
    }
  ]

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section
      style={{height: '60vh'}}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="About Us Hero" 
            className="w-full h-full object-cover  "
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-primary-800/30 to-transparent"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-warm-400/20 to-accent-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 shadow-lg mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary-700">About Us</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6">
            Crafting Exceptional
            <span className="block text-gradient">Experiences</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl sm:max-w-3xl mx-auto font-light leading-relaxed px-2">
            For over 15 years, we've been transforming spaces into sophisticated sanctuaries that 
            reflect our clients' unique personalities and elevate their daily living experience.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="animate-slideInRight order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-brand-primary/10 rounded-full px-3 sm:px-4 py-1 sm:py-2 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium text-brand-primary">Our Story</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-900 mb-4 sm:mb-6">
                From Vision to
                <span className="block text-gradient">Reality</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-primary-600 mb-6 sm:mb-8 leading-relaxed font-light">
                <b>At AE Living Concepts</b>, we specialize in transforming your
vision into elegant, functional spaces through premium,
custom-designed interior solutions for flats, villas, and
commercial establishments. 



              </p>
              <p className="text-primary-700 leading-relaxed mb-4 sm:mb-8 text-sm sm:text-base">
                <b>Kiranmayee Alivelu</b>,Kiranmayee Alivelu is an interior design professional and creative entrepreneur from Telangana, known for transforming spaces into functional, elegant, and meaningful environments.

With a strong eye for detail and a deep understanding of client needs. <p className='text-primary-700 leading-relaxed mb-4 sm:mb-8 text-sm sm:text-base'>she specializes in residential and commercial interiors, creating spaces that reflect personality, purpose, and comfort. Her approach blends aesthetic design, practical planning, and thoughtful execution, ensuring every project delivers both beauty and usability.

Beyond interiors</p> <b>Kiranmayee is also recognized as the Runner-Up of Mrs. India 2022–2023, a platform that strengthened her leadership, confidence, and commitment to excellence.</b> She actively supports women’s empowerment initiatives and promotes early cancer detection awareness, reflecting her belief that strong spaces and strong people go hand in hand.

Driven by creativity, integrity, and impact, Kiranmayee continues to build spaces—and stories—that inspire better living.
<br></br>
<br></br>
<b>Lagadapati suneetha kumari</b>, driven by a keen eye for
detail and a flair for creativity, leads the artistic direction of
our interiors. Her design sensibility and commitment to innovation
result in spaces that are expressive, inspiring, and uniquely
tailored to the client’s personality and purpose.
              </p>
              <p className="text-primary-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              
 
Together, their vision shapes every AE Living Concepts
project into a space that’s not just visually stunning—but
also thoughtfully engineered to enhance everyday living
and working
              </p>
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-display font-semibold text-brand-primary">15+</div>
                  <div className="text-xs sm:text-sm text-primary-600">Years Creating</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-primary-200"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-display font-semibold text-brand-primary">150+</div>
                  <div className="text-xs sm:text-sm text-primary-600">Spaces Transformed</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fadeInUp order-1 lg:order-2 mb-8 lg:mb-0" style={{animationDelay: '0.4s'}}>
              <div className="aspect-square rounded-2xl sm:rounded-3xl gradient-warm shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center">
                  <img src={about} alt="About Us" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-brand-accent/30 to-brand-primary/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-28 h-28 sm:w-40 sm:h-40 bg-gradient-to-br from-warm-400/30 to-accent-400/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-warm-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-900 mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 max-w-2xl mx-auto font-light px-2">
              The principles that guide every decision we make and every space we create.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-premium group-hover:scale-110">
                  <span className="text-2xl sm:text-3xl">{value.icon}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-primary-900 mb-2 sm:mb-4">{value.title}</h3>
                <p className="text-primary-600 leading-relaxed text-sm sm:text-base px-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
     

      {/* Achievements Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-50 to-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center card-premium p-6 sm:p-8 group hover:scale-105 transition-premium">
                <div className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-brand-primary mb-1 sm:mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary-900 mb-1 sm:mb-2">{achievement.label}</h3>
                <p className="text-primary-600 leading-relaxed text-sm sm:text-base">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-brand-primary to-brand-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6">
            Let's Create Something
            <span className="block">Extraordinary Together</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed font-light px-2">
            Ready to transform your space? We'd love to hear about your project and discuss how 
            we can bring your vision to life with our signature approach to luxury interior design.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg sm:rounded-xl bg-white text-brand-primary shadow-xl hover:shadow-2xl transition-premium hover:scale-105 block text-center">
              Schedule Consultation
            </a>
            {/* <button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 transition-premium">
              View Our Portfolio
            </button> */}
          </div>
        </div>
      </section>
    </div>
  )
}