# NexaBloom - AI-Powered Business Platform

## Overview

NexaBloom is a marketing and lead generation platform for an AI business consultancy service. The application helps entrepreneurs connect with NexaBloom to transform their business ideas into AI-driven companies. The platform features a modern, responsive landing page with sections for services, pricing, project showcases, and a contact form for partnership inquiries.

This is a full-stack TypeScript application built with React (frontend) and Express (backend), using PostgreSQL for data persistence via Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, chosen for fast HMR and optimized production builds
- Wouter for client-side routing (lightweight alternative to React Router)
- CSS processed through Tailwind CSS with PostCSS for utility-first styling

**UI Component System**
- shadcn/ui component library (Radix UI primitives with Tailwind styling)
- Consistent design system using CSS variables for theming (dark mode by default)
- Component structure follows the "New York" style variant from shadcn
- All UI components are self-contained in `client/src/components/ui/`

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management and caching
- React Hook Form with Zod validation for form handling
- Custom query client configured with:
  - No automatic refetching (staleTime: Infinity)
  - Credentials included for session management
  - Custom error handling for API responses

**Page Structure**
- Single-page application with sections: Hero, Logo Carousel, Services, Pricing, Projects, Contact
- Scroll-based navigation with smooth scrolling between sections
- Intersection Observer API for fade-in animations on scroll
- Mobile-responsive design with hamburger menu navigation

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and routing
- Node.js runtime with ES modules (type: "module")
- TypeScript compilation via tsx for development, esbuild for production

**API Design**
- RESTful endpoint structure under `/api` prefix
- Two primary endpoints:
  - `POST /api/contact` - Accept contact form submissions
  - `GET /api/contact-submissions` - Retrieve all submissions (admin)
- JSON request/response format with Zod schema validation
- Custom request logging middleware for API routes

**Development Features**
- Vite middleware integration in development mode for HMR
- Custom error overlay for runtime errors (Replit plugin)
- Request/response logging with timing and JSON capture
- Raw body buffering for webhook support (future use)

**Storage Layer**
- Abstraction through `IStorage` interface for flexibility
- In-memory storage implementation (`MemStorage`) for development/testing
- Production-ready for PostgreSQL integration via Drizzle ORM
- UUID-based primary keys using `gen_random_uuid()`

### Data Storage

**Database Schema (PostgreSQL via Drizzle)**
- `users` table: Basic user authentication structure (id, username, password)
- `contact_submissions` table: Lead capture with fields:
  - firstName, lastName, email (required)
  - company, message, partnershipLevel (optional)
  - createdAt timestamp

**ORM Configuration**
- Drizzle ORM chosen for type-safe SQL queries and migrations
- Schema defined in `shared/schema.ts` for code sharing between client/server
- Migration files output to `./migrations` directory
- Zod schemas auto-generated from Drizzle tables for validation
- Connection via Neon Database serverless driver

**Database Migrations**
- Managed through `drizzle-kit push` command
- Connection string from `DATABASE_URL` environment variable
- PostgreSQL dialect configuration

### External Dependencies

**Third-Party Services**
- **Neon Database**: Serverless PostgreSQL hosting
  - Connection via `@neondatabase/serverless` driver
  - Requires `DATABASE_URL` environment variable
  
**UI Component Libraries**
- **Radix UI**: Headless component primitives (30+ components)
  - Provides accessibility and behavior for dialogs, dropdowns, forms, etc.
  - Styled through Tailwind CSS for visual consistency

**Development Tools**
- **Replit Plugins**: Development environment enhancements
  - `@replit/vite-plugin-runtime-error-modal`: Error overlay
  - `@replit/vite-plugin-cartographer`: Code mapping
  - `@replit/vite-plugin-dev-banner`: Development banner
  - Only loaded in development mode when `REPL_ID` is present

**Content Delivery**
- External image hosting via HubSpot CDN for:
  - Company logos in carousel section
  - Project showcase images
  - All images served over HTTPS

**Build & Deployment**
- No external build services (builds run locally)
- Static assets bundled via Vite to `dist/public`
- Server code bundled via esbuild to `dist/index.js`
- Environment-based configuration (NODE_ENV)