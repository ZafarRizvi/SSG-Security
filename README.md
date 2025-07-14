# SecurePro - Professional Security Services Website

A comprehensive, modern website for a security company built with Next.js, TypeScript, and Tailwind CSS. The website features a professional design following the specifications in `deisgn.json` and includes all the requested pages and services.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with responsive navigation
- **Professional UI**: Clean, modern design following brand guidelines
- **Complete Pages**: Home, About, Services, Company Policies, and Contact
- **Service Cards**: Detailed service information with features and descriptions
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant design elements

## 📋 Services Included

- Car Parking Management
- CCTV Operations
- Door Supervision
- Mall Security
- Reception Concierge
- Short Notice Services
- Static / Mobile Patrol

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Vercel ready

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── policies/
│   │   └── page.tsx         # Company policies page
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   └── Footer.tsx           # Footer component
├── deisgn.json              # Design specifications
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd security-company-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

The website follows the design specifications from `deisgn.json`:

- **Primary Color**: #FF0000 (Red)
- **Secondary Color**: #000000 (Black)
- **Accent Color**: #FFFFFF (White)
- **Support Colors**: #333333, #777777, #F7F7F7
- **Typography**: Arial/Helvetica sans-serif
- **Layout**: Max 1200px container with 12-column grid

## 📱 Pages Overview

### Home Page (`/`)

- Hero section with call-to-action
- Features showcase
- Services preview
- Contact CTA

### About Page (`/about`)

- Company story and mission
- Core values
- Team information
- Why choose us section

### Services Page (`/services`)

- Card-based layout for all services
- Detailed service descriptions
- Key features for each service
- Contact CTA

### Company Policies Page (`/policies`)

- Security standards
- Employee conduct
- Client relations
- Quality assurance
- Data protection
- Health & safety

### Contact Page (`/contact`)

- Contact form with validation
- Company contact information
- Business hours
- Emergency contact
- Location placeholder

## 🔧 Customization

### Colors

Update colors in `tailwind.config.js`:

```javascript
colors: {
  primary: '#FF0000',
  secondary: '#000000',
  accent: '#FFFFFF',
  support: {
    1: '#333333',
    2: '#777777',
    3: '#F7F7F7'
  }
}
```

### Content

- Update company information in components
- Modify service details in `app/services/page.tsx`
- Edit contact information in `app/contact/page.tsx`

### Styling

- Global styles in `app/globals.css`
- Component-specific styles using Tailwind classes
- Custom CSS classes defined in `@layer components`

## 📧 Contact Form

The contact form includes:

- Name, email, phone, company fields
- Service selection dropdown
- Message textarea
- Form validation
- Success message handling

**Note**: The form currently logs to console. For production, integrate with your preferred backend service (e.g., EmailJS, Formspree, or custom API).

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact:

- Email: info@securepro.com
- Phone: +44 123 456 7890

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
