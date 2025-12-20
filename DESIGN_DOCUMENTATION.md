# AE Desire Homes - Design Documentation

## Design System Overview

AE Desire Homes is a premium interior design website built with React 19, Vite 7, and Tailwind CSS v4. The design system emphasizes sophistication, elegance, and modern luxury while maintaining excellent usability and accessibility.

## Color Palette

### Primary Colors
- **Brand Primary**: `#8A9695` - A sophisticated sage green that forms the foundation of our brand identity
- **Brand Secondary**: `#CECCB9` - A warm, muted beige that provides elegant contrast
- **Brand Accent**: `#DCC6BF` - A soft terracotta that adds warmth and visual interest

### Extended Color System
```css
/* Primary Scale */
--brand-primary: #8A9695;
--brand-primary-light: #9EA9A8;
--brand-primary-dark: #6B7A79;
--brand-primary-50: #F4F6F6;
--brand-primary-100: #E8EBEB;
--brand-primary-200: #D1D7D6;
--brand-primary-300: #B9C3C2;
--brand-primary-400: #A2AFAD;
--brand-primary-500: #8A9695;
--brand-primary-600: #6B7A79;
--brand-primary-700: #4C5D5C;
--brand-primary-800: #2E4040;
--brand-primary-900: #0F2223;

/* Warm Scale */
--warm-50: #F9F9F6;
--warm-100: #F3F2ED;
--warm-200: #E6E4D9;
--warm-300: #D9D6C6;
--warm-400: #CCC8B2;
--warm-500: #BFBA9E;
--warm-600: #A69C7B;
--warm-700: #8C7E5E;
--warm-800: #736040;
--warm-900: #594222;

/* Accent Scale */
--accent-50: #F9F4F2;
--accent-100: #F2E9E5;
--accent-200: #E6D3CC;
--accent-300: #D9BDB2;
--accent-400: #CCA799;
--accent-500: #BF917F;
--accent-600: #A67C6B;
--accent-700: #8C6757;
--accent-800: #735243;
--accent-900: #593D2F;
```

### Gradient Utilities
```css
.gradient-primary { background: linear-gradient(135deg, var(--brand-primary), var(--brand-primary-light)); }
.gradient-secondary { background: linear-gradient(135deg, var(--brand-secondary), var(--warm-300)); }
.gradient-accent { background: linear-gradient(135deg, var(--brand-accent), var(--accent-400)); }
.gradient-warm { background: linear-gradient(135deg, var(--warm-200), var(--warm-400)); }
```

## Typography

### Font Pairings
- **Display Font**: Playfair Display - Used for headlines and hero text
- **Body Font**: Inter - Used for body text, navigation, and UI elements

### Typography Scale
```css
/* Display Sizes */
.text-display-5xl { font-size: 4.5rem; line-height: 1.1; }
.text-display-4xl { font-size: 3.75rem; line-height: 1.2; }
.text-display-3xl { font-size: 3rem; line-height: 1.3; }

/* Heading Sizes */
.text-heading-2xl { font-size: 2.5rem; line-height: 1.3; }
.text-heading-xl { font-size: 2.25rem; line-height: 1.4; }
.text-heading-lg { font-size: 1.875rem; line-height: 1.4; }

/* Body Sizes */
.text-body-xl { font-size: 1.25rem; line-height: 1.6; }
.text-body-lg { font-size: 1.125rem; line-height: 1.6; }
.text-body-base { font-size: 1rem; line-height: 1.6; }
.text-body-sm { font-size: 0.875rem; line-height: 1.5; }
```

## Component Library

### Card Components
```jsx
// Premium Card
<div className="card-premium p-8 lg:p-10 group hover:scale-105 transition-premium">
  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-premium`}>
    <span className="text-3xl">{icon}</span>
  </div>
  <h3 className="font-display text-3xl font-semibold text-primary-900 mb-4">
    {title}
  </h3>
  <p className="text-primary-600 text-lg leading-relaxed mb-8 font-light">
    {description}
  </p>
</div>
```

### Button Components
```jsx
// Primary Button
<button className="px-8 py-4 text-lg font-medium rounded-xl bg-brand-primary text-white shadow-xl hover:shadow-2xl transition-premium hover:scale-105">
  {text}
</button>

// Secondary Button
<button className="px-8 py-4 text-lg font-medium rounded-xl bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 transition-premium">
  {text}
</button>
```

### Form Components
```jsx
// Input Field
<input
  className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none"
  placeholder="Enter your text"
/>

// Select Field
<select className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none">
  <option>Select option</option>
</select>

// Textarea
<textarea
  className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none resize-none"
  rows={6}
  placeholder="Enter your message"
/>
```

## Animation System

### Transition Classes
```css
.transition-premium { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.transition-fast { transition: all 0.15s ease-out; }
.transition-slow { transition: all 0.5s ease-out; }
```

### Animation Classes
```css
/* Fade In Up */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }

/* Slide In Right */
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
.animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }

/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
```

## Layout System

### Container System
```css
.container-sm { max-width: 640px; margin: 0 auto; padding: 0 1rem; }
.container-md { max-width: 768px; margin: 0 auto; padding: 0 1rem; }
.container-lg { max-width: 1024px; margin: 0 auto; padding: 0 1rem; }
.container-xl { max-width: 1280px; margin: 0 auto; padding: 0 1rem; }
.container-2xl { max-width: 1536px; margin: 0 auto; padding: 0 1rem; }
```

### Spacing Scale
```css
/* Section Spacing */
.section-sm { padding: 3rem 0; }
.section-md { padding: 4rem 0; }
.section-lg { padding: 6rem 0; }
.section-xl { padding: 8rem 0; }
```

## Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
/* sm: 640px and up */
/* md: 768px and up */
/* lg: 1024px and up */
/* xl: 1280px and up */
/* 2xl: 1536px and up */
```

### Responsive Patterns
```jsx
// Responsive Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Content */}
</div>

// Responsive Typography
<h1 className="text-3xl md:text-4xl lg:text-5xl font-display">
  Responsive Heading
</h1>

// Responsive Spacing
<section className="py-12 md:py-16 lg:py-24">
  {/* Content */}
</section>
```

## Accessibility Standards

### Color Contrast
- All text maintains WCAG 2.1 AA compliance (4.5:1 contrast ratio)
- Interactive elements have clear focus states
- Color is never the sole means of conveying information

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus indicators are clearly visible
- Logical tab order throughout the site

### Screen Reader Support
- Semantic HTML structure
- Proper heading hierarchy
- Descriptive alt text for images
- ARIA labels where appropriate

## Implementation Guidelines

### Component Structure
1. **Header Component**: Fixed position with backdrop blur and gradient logo
2. **Hero Section**: Full-width with gradient background and animated text
3. **Service Cards**: Interactive cards with hover effects and gradient icons
4. **Contact Form**: Multi-step form with validation and success states
5. **Footer**: Multi-column layout with social links and newsletter signup

### Performance Optimization
- Optimized images with proper loading attributes
- Efficient CSS with utility-first approach
- Minimal JavaScript for interactions
- Fast loading times with Vite build system

### SEO Best Practices
- Semantic HTML structure
- Proper meta tags and descriptions
- Structured data for services
- Optimized images with alt text

## Design Principles

### Visual Hierarchy
- Clear typography scale for different content types
- Consistent spacing and alignment
- Strategic use of color and contrast
- Balanced composition with breathing room

### User Experience
- Intuitive navigation with clear calls-to-action
- Responsive design that works on all devices
- Fast loading times and smooth interactions
- Accessible design for all users

### Brand Consistency
- Cohesive color palette throughout
- Consistent typography and spacing
- Unified component design language
- Professional and trustworthy appearance

This design system provides a comprehensive foundation for building and maintaining the AE Desire Homes website while ensuring consistency, accessibility, and exceptional user experience.