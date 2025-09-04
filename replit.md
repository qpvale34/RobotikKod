# Overview

This is a Turkish robotics coding course website built as a full-stack application. The platform offers a 10-week comprehensive robotics programming curriculum targeting beginners. The site includes course information, registration functionality, and contact forms. It's designed as a modern web application with a React frontend and Express.js backend, featuring a clean UI built with shadcn/ui components and Tailwind CSS.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The client-side is built as a Single Page Application (SPA) using React with TypeScript. The architecture follows these key patterns:

- **Component Library**: Uses shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable UI components
- **Routing**: Implements client-side routing with Wouter library for lightweight navigation
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes
- **State Management**: React Query (@tanstack/react-query) for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

The application structure includes:
- Pages for home, course details, contact, and registration
- Reusable UI components following atomic design principles  
- Custom hooks for mobile detection and toast notifications
- TypeScript path aliases for clean imports (@/, @shared/)

## Backend Architecture

The server-side uses Express.js with TypeScript in an ESM setup:

- **Framework**: Express.js with middleware for JSON parsing and request logging
- **Database Layer**: Drizzle ORM configured for PostgreSQL with schema definitions in shared folder
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be swapped for database implementation
- **Development**: Hot reloading with tsx and Vite integration for seamless development experience
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

The server implements a modular structure separating concerns:
- Route registration system for API endpoints
- Storage abstraction allowing easy database implementation switching
- Shared schema definitions between client and server
- Development-optimized Vite integration with HMR support

## Data Layer

The application uses a hybrid approach for data storage:

- **Schema Definition**: Shared TypeScript types and Zod schemas for type safety across client and server
- **Database**: PostgreSQL configured via Drizzle ORM with migration support
- **Development Storage**: In-memory storage implementation for development/testing
- **Connection**: Neon Database serverless driver for cloud PostgreSQL connectivity

The data layer supports:
- User management with username/password authentication
- Type-safe database queries and mutations
- Schema migrations and version control
- Environment-based configuration

## Authentication & Authorization

Currently implements basic user management structure:
- User schema with username/password fields
- UUID-based primary keys with PostgreSQL gen_random_uuid()
- Password storage (implementation details to be added)
- Session management placeholder (connect-pg-simple available)

# External Dependencies

## Database & Storage
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit (drizzle-orm, drizzle-kit)
- **PostgreSQL**: Primary database with UUID support

## UI & Styling
- **Radix UI**: Accessible component primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider functionality

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and enhanced developer experience
- **ESBuild**: Fast JavaScript/TypeScript bundler for production
- **PostCSS**: CSS processing with Tailwind CSS

## Runtime Libraries
- **React Query**: Server state management and caching
- **React Hook Form**: Form handling and validation
- **Zod**: Runtime type validation and schema definition
- **Date-fns**: Date manipulation and formatting
- **Wouter**: Lightweight client-side routing

The application is configured for deployment on Replit with specialized plugins and error overlay for development experience.