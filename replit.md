# श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल - Website

## Overview

This is a modern, animated website for श्री संत कृपा प्रसाद मोटर ड्रायव्हिंग स्कूल, a driving school located in Savda, Maharashtra. The website showcases the school's services including driving lessons, RTO services, vehicle insurance, and ownership transfers. Built as a full-stack application with extensive animations and a professional design, it serves as both a marketing platform and a contact portal for potential students.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern React features
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for extensive animations including car movements, floating elements, and scroll-triggered effects
- **Forms**: React Hook Form with Zod validation for form handling
- **State Management**: TanStack Query for server state management
- **Icons**: Lucide React icon library

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript for type safety across the stack
- **API Design**: RESTful API with dedicated routes for contact form submission
- **Data Storage**: In-memory storage using Map data structure (production-ready for database migration)
- **Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error handling middleware

### Build System and Development
- **Bundler**: Vite for fast development and optimized builds
- **Development**: Hot module replacement and runtime error overlay
- **TypeScript**: Strict configuration with path mapping for clean imports
- **PostCSS**: Autoprefixer and Tailwind CSS processing

### Database Schema (Prepared for Migration)
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Contact messages table with fields for name, phone, service, message, and timestamps
- **Migration**: Drizzle Kit configured for database migrations

### Internationalization
- **Multi-language Support**: Marathi (Devanagari script) and English text
- **Font Loading**: Google Fonts integration for Inter and Noto Sans Devanagari
- **Cultural Design**: Driving-themed animations and locally relevant content

### Performance Optimizations
- **Asset Optimization**: Vite's built-in optimization for production builds
- **Image Loading**: Unsplash integration for high-quality images
- **Animation Performance**: Framer Motion with viewport-based triggering to reduce unnecessary renders
- **Bundle Splitting**: Automatic code splitting through Vite

### Contact System
- **Form Handling**: Full-stack contact form with validation
- **Data Persistence**: In-memory storage with interface ready for database implementation
- **User Feedback**: Toast notifications for form submission status
- **Admin Interface**: API endpoint for retrieving contact messages

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Production-ready motion library for React animations
- **Class Variance Authority**: Utility for creating variant-based component APIs

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking for JavaScript
- **ESBuild**: Fast JavaScript bundler used by Vite
- **PostCSS**: CSS processing tool for Tailwind and autoprefixer

### Database (Configured)
- **Drizzle ORM**: Type-safe ORM for TypeScript and SQL databases
- **PostgreSQL**: Planned production database (via Neon or similar provider)
- **Drizzle Kit**: Database migration and introspection tool

### Form Handling
- **React Hook Form**: Performant, flexible forms with easy validation
- **Hookform Resolvers**: Integration layer for validation libraries
- **Zod**: TypeScript-first schema validation library

### External Services
- **Google Fonts**: Web font hosting for Inter and Noto Sans Devanagari
- **Unsplash**: Stock photography service for high-quality images
- **Replit**: Development environment and hosting platform

### Monitoring and Development
- **TanStack Query**: Powerful data synchronization for React
- **Replit Dev Tools**: Development banner and error monitoring
- **Cartographer**: Replit's development enhancement plugin