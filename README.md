## Job Task – Next.js Project

This project is a Next.js 16 application built for a job task. It uses NextAuth for authentication, MongoDB for data storage, and Tailwind CSS/DaisyUI for styling.

The app includes:
- Home page with banner and offers
- Protected My Booking page
- Protected offer details pages
- User authentication (login/register)

## Tech Stack

- Next.js 16.1.1
- React 19
- NextAuth (credentials-based auth)
- MongoDB
- Tailwind CSS 4 + DaisyUI
- Framer Motion, Lucide React, React Icons, React Hook Form, Swiper

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```text
https://job-task-theta.vercel.app
```

## Available Scripts

- `npm run dev` – start development server
- `npm run build` – build for production
- `npm run start` – run production build
- `npm run lint` – run ESLint

## Environment Variables

Create a `.env.local` file in the project root with at least:



Adjust the values for your environment and production deployment.

## Authentication and Protected Routes

- My Booking page and offer details pages are protected.
- If a user is not logged in and tries to access these routes, they are redirected to the login page.
- After successful login, the user is redirected back to the original page they wanted to visit.

## Build and Production

To create a production build and run it locally:

```bash
npm run build
npm run start
```

The app will be available at `https://job-task-theta.vercel.app`.

## Project Structure

High-level folders in this project:

- `src/app` – Next.js App Router pages, layouts, API routes
- `src/componets` – React UI components (home, offers, my-booking, room, etc.)
- `src/actions` – Server actions and auth helpers
- `src/lib` – Shared utilities (MongoDB connection, NextAuth options, uploads)
- `src/provider` and `src/providers` – React/NextAuth providers
- `public` – Static assets and images

## Main Routes

- `/` – Home page with banner, offers, experiences, rooms
- `/offers` – List of offers
- `/offers/[id]` – Offer details page (protected)
- `/book` – Booking-related page
- `/my-booking` – User’s booking list (protected, in `(dashboard)` layout)
- `/room` – Room listing page
- `/experiences` – Experiences section
- `/feedback` – Feedback page
- `/login` – Login page
- `/register` – Registration page

## Booking and Offers Flow

- Users can browse offers and rooms publicly.
- When a user wants to see offer details or their bookings, they must be logged in.
- Protected routes are handled via middleware/proxy and NextAuth session.
- After login, the user is redirected back to the page they tried to open.

## Development Notes

- Authentication is implemented using NextAuth credentials provider.
- MongoDB is used as the main database (configured in `src/lib`).
- Protected routes are enforced on:
  - `/my-booking`
  - `/offers/[id]`
- Loading states are handled with `loading.jsx` files for smoother UX.
