# Car Wash - Premium Auto Detailing Website Template

A modern, premium car wash and auto detailing website template with service-based booking functionality.

## Features

- **Luxury-Refined Design**: Premium aesthetic with deep navy, aqua teal, and gold color palette
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile, small mobile)
- **RTL Support**: Complete right-to-left language support with toggle functionality
- **Dark/Light Mode**: Theme toggle with system preference detection and localStorage persistence
- **Interactive Components**: Smooth animations, hover effects, and parallax scrolling
- **Form Validation**: Client-side validation on all forms with visual feedback
- **Multiple Pages**: Home, Home 2, Services, About, Blog, Contact, Login, Register, Dashboard, 404, Coming Soon

## Design System

### Colors
- Primary: `#0A2463` (Deep Navy)
- Secondary: `#3E92CC` (Aqua Teal)
- Accent: `#FFD700` (Gold)

### Typography
- Headings: Playfair Display (Google Font)
- Body: DM Sans (Google Font)

### Spacing
- Base unit: 8px
- Consistent spacing scale throughout

### Icons
- Phosphor Icons (via CDN)

## File Structure

```
car-wash/
├── index.html              # Home page
├── home2.html              # Alternative home page
├── services.html           # Services page
├── about.html              # About page
├── blog.html               # Blog listing
├── blog-single.html        # Single blog post
├── contact.html            # Contact page
├── login.html              # Login page
├── register.html           # Registration page
├── dashboard.html          # Dashboard page
├── 404.html                # 404 error page
├── coming-soon.html        # Coming soon page
├── assets/
│   ├── css/
│   │   ├── style.css       # Main stylesheet
│   │   └── rtl.css         # RTL overrides
│   └── js/
│       └── main.js         # Main JavaScript
└── README.md               # This file
```

## Pages Overview

### Home (index.html)
- Hero section with animation
- Services preview cards
- About section
- Features/benefits grid
- Testimonials carousel
- Call-to-action section
- Footer

### Home 2 (home2.html)
- Unique hero with typing effect
- Interactive counter section
- Services preview
- Why choose us section
- Customer reviews
- CTA section

### Services (services.html)
- Service cards with pricing
- Detailed feature lists
- Booking buttons
- Popular package highlighting

### About (about.html)
- Company story
- Mission & vision
- Team section
- Timeline/milestones

### Blog (blog.html)
- Blog post grid
- Category tags
- Author information
- Newsletter signup

### Contact (contact.html)
- Contact form with validation
- Contact information
- Google Maps integration
- Social media links

### Login (login.html)
- Centered layout
- Email/password fields
- Google/Apple social login
- Link to registration

### Register (register.html)
- Registration form
- Terms & conditions checkbox
- Social login options
- Link to login

### Dashboard (dashboard.html)
- Statistics overview
- Recent bookings table
- Quick action cards
- Sidebar navigation

### 404 (404.html)
- Custom error page
- Navigation back to home

### Coming Soon (coming-soon.html)
- Countdown timer
- Email newsletter signup
- Social media links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- Large Desktop: 1440px+
- Desktop: 1025px - 1439px
- Tablet: 769px - 1024px
- Mobile: 361px - 768px
- Small Mobile: ≤ 360px

## Key Features Implementation

### Navbar Behavior
- Desktop (> 1024px): Full horizontal navbar
- Tablet/Mobile (≤ 1024px): Hamburger menu with slide drawer
- Smooth scroll effect with backdrop blur

### Theme Toggle
- Desktop: Visible in navbar
- Mobile: Hidden from header, placed in drawer
- Persists via localStorage
- System preference detection

### RTL Support
- Toggle via button in navbar/drawer
- Logical CSS properties (margin-inline-start, etc.)
- Drawer slides from left in RTL mode
- Separate rtl.css for overrides

### Form Validation
- Required field validation
- Email format validation
- Password minimum length (8 characters)
- Password confirmation matching
- Terms checkbox validation
- Visual error/success states

### Animations
- Fade-in effects
- Slide-up animations
- Typing effect (Home 2)
- Floating elements
- Counter animations (Home 2)
- Hover transforms

## Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
  --color-primary: #0A2463;
  --color-secondary: #3E92CC;
  --color-accent: #FFD700;
  /* ... */
}
```

### Typography
Change fonts in `assets/css/style.css`:
```css
:root {
  --font-heading: 'Playfair Display', serif;
  --font-body: 'DM Sans', sans-serif;
  /* ... */
}
```

### Images
Replace Unsplash URLs with your own images in HTML files.

## Getting Started

1. Open `index.html` in a web browser
2. Navigate through the different pages
3. Test responsive design by resizing browser
4. Try RTL toggle and theme switcher
5. Test form validation on contact/login/register pages

## Notes

- All images are from Unsplash (replace with your own)
- Google Fonts and Phosphor Icons loaded via CDN
- No external frameworks or libraries required
- All JavaScript is vanilla ES6+
- CSS uses CSS variables for easy customization
- RTL support implemented with logical properties

## License

This template is provided as-is for educational and commercial use.
